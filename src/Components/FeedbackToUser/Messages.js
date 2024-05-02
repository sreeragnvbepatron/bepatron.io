"use client";
import React, { useState } from 'react';
import Image from 'next/image'
import IconMessages from "../../Assets/Icons/IconMessages.png"
export default function Messages(props){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to handle click event on the dropdown button
    const handleDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return(<div>
        <div className='cursor-pointer' onClick={handleDropdownClick} id="dropdownMessagesButton"
                data-dropdown-toggle="dropdownMessages">
            <Image src={IconMessages} width={20} height={20}/>
            {props.messages.length > 0 && (
                    <div className="absolute top-11 transform translate-x-2 -translate-y-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {props.messages.length}
                </div>
            )}
            </div>
            {/* Dropdown menu */}
            {isDropdownOpen && (
                <div
                id="dropdownMessages"
                className="z-20 fixed top-20 right-12 mt-1 w-1/4 bg-white divide-y divide-gray-100 rounded-lg shadow"
                aria-labelledby="dropdownMessagesButton"
            >
               
                    
                    <div className="divide-y divide-gray-100">
                        {props.messages.map((message, index) => (
                            <a
                                key={index}
                                href="#"
                                className="flex px-4 py-3 hover:bg-gray-100"
                            >
                               {message}
                            </a>
                        ))}
                        {props.messages.length === 0 && <a
                                href="#"
                                className="flex px-4 py-3 text-sm text-gray-text"
                            >
                               Nothing to Show
                            </a>}
                    </div>
                </div>
            )}
        </div>)
}