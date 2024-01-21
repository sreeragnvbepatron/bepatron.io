"use client"; 
import React, { useState } from 'react';
import { faEye, faEyeSlash,faTimes       } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';
export default function TextEditor(props) {
        const [showPassword, setShowPassword] = useState(false);
        const [inputValue, setInputValue] = useState('');
        const [tags, setTags] = useState([]);
        const handleTogglePassword = () => {
                setShowPassword((prevShowPassword) => !prevShowPassword);
              };
              const handleInputChange = (event) => {
                setInputValue(event.target.value);
              }
              const handleKeyDown = (event) => {
                if (event.key === 'Enter' && inputValue.trim() !== '') {
                  setTags([...tags, inputValue.trim()]);
                  setInputValue('');
                  event.preventDefault()
                }
              };
            
              const handleTagRemoval = (index) => {
                const updatedTags = [...tags];
                updatedTags.splice(index, 1);
                setTags(updatedTags);
              };
              

return (<div className='pt-4'>
                <span className="text-black text-base font-bold font-['Anderson Grotesk']">{props.label}</span>
                {props.mandatory=="true" && (<span className="text-red-400 text-base font-bold font-['Anderson Grotesk']">*</span>)}
                {props.label == 'Interested areas (optional)' && <div>
                                <input 
                                className="mt-2 shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id='areas'
                                type="text" 
                                placeholder={props.placeholder}
                                value={inputValue}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                />
                                <div className='grid grid-cols-4'>
                                {tags.map((tag,index) => (
                                        <div key={index} className="w-auto h-auto mr-2 mt-4 bg-violet-50 rounded-md px-3 py-2 grid grid-cols-12">
                                                <div className="text-blue-800 text-sm font-bold font-['Anderson Grotesk'] col-span-10">{tag}</div>
                                                <div className='col-span-2 cursor-pointer' onClick={() => handleTagRemoval(index)}>
                                                        <FontAwesomeIcon icon={faTimes} style={{ color: '#0022C0'}}/></div>
                                        </div>
                                ))}
                                </div>
                        </div>
                }
                {props.label != 'Interested areas (optional)' && <div>
                                <input 
                                className={`mt-2 shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${props.error == "true" ? 'border-red-500 text-red-500' : ''}`}
                                id={props.label}
                                type={showPassword==false ? props.type:"text"} 
                                placeholder={props.placeholder}/>
                                {props.error == "true" && <div className="mt-1 text-red-500 text-xs font-bold font-['Anderson Grotesk']">{props.errorMessage}</div>}
                                
                        </div>
                        
                }
                {props.type=="password" &&
                        <div className="password-toggle" onClick={handleTogglePassword}>
                                {showPassword ? (
                                <FontAwesomeIcon icon={faEyeSlash} />
                                ) : (
                                <FontAwesomeIcon icon={faEye} />
                                )}
                        </div>
                }     
                  
        </div>);
}