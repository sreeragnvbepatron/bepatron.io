"use client"; 
import './login.css';
import Link from 'next/link'; 
import Circular_progressbar from '@/Components/Circular_progreebar/Circular_progressbar';
import TextEditor from '@/Components/TextEditor/TextEditor';
import Login_button from '@/Components/Button/Login_button';
import React, { useState } from 'react';
import Login_Role_Box from '@/Components/Box/Login_Role_Box';
import Sidebar from '@/Components/Sidebar/Sidebar';
import G_sign_and_separator from '@/Components/G_sign_and _separator';
import CreateOrLoginText from '@/Components/CreateOrLoginText';

export default function signup() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleBoxSelect = (option) => {
      //setSelectedOption(option === selectedOption ? null : option);
      setSelectedOption(option);
    };
    const [progress, setProgress] = useState("33");
    const handleContinue = () => {
        if (progress === "33") {
            setProgress("66");
        } else if (progress === "66") {
            setProgress("100");
        }
      };
    return (<div className='grid grid-cols-2 '>
        <Sidebar/>
<div className="w-9/12">
    <div className='pt-10'>
        <span className="text-black text-2xl font-normal font-['Anderson Grotesk']">Try </span>
        <span className="text-black text-2xl font-bold font-['Anderson Grotesk']">bepatron.io<br/></span>
        <span className="text-black text-2xl font-normal font-['Anderson Grotesk']">for Be Lorem ipsum🏆</span>
    </div>
    <div className='pt-8 grid grid-cols-2'>
        <div>
            <span className="text-black text-2xl font-bold font-['Anderson Grotesk'] ">Create your account</span>
            <div><span className="text-zinc-500 text-base font-normal font-['Anderson Grotesk']">I</span><span className="text-zinc-500 text-base font-normal font-['Anderson Grotesk'] lowercase">t takes only 45 seconds🤯</span></div>
        </div>
        <div className='flex justify-end'>
            <Circular_progressbar value={progress}/>
        </div>
    </div>
    { progress !=100 &&
    <G_sign_and_separator/>
    }
    <div>
        <form>
            {progress=="33" &&
                <div>
                    <TextEditor label="Name" type="text" placeholder="Enter your name" mandatory="true"/>
                    <TextEditor label="Email" type="email" placeholder="Enter your Email Address" mandatory="true" error="false" errorMessage="This email id is already exist, please try another."/>
                    <Login_button content="Continue" onClick={handleContinue}/>
                </div>
            }
            {
                progress=="66" &&
                <div className="animate__fadeInRight">
                    <TextEditor label="Password" type="password" placeholder="Enter your password" mandatory="true"/>
                    <TextEditor label="Confirm password" type="password" placeholder="Re-enter your password" mandatory="true"/>
                    <Login_button content="Continue with email" onClick={handleContinue}/>
                </div>
            }
            {
                progress==100 &&
                <div className="mt-10 animate__fadeInRight">
                    <div className=" text-black text-xl font-bold font-['Anderson Grotesk']">I’m a :</div>
                    <div className='grid grid-cols-2'>
                        <Login_Role_Box 
                        title="Mentor" 
                        description="Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod"  
                        isSelected={selectedOption === 'Mentor'}
                        onSelect={handleBoxSelect}/>
                        
                        <Login_Role_Box 
                        title="Mentee" 
                        description="Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod"  
                        isSelected={selectedOption === 'Mentee'}
                        onSelect={handleBoxSelect}/>
                    </div>
                    <div className='mt-4'>
                            <span className="text-zinc-400 text-base font-normal font-['Outfit']">Don’t worry, 
                            <span className="text-black font-bold"> you can always be a mentor</span>. never stop learning!</span>
                    </div>
                    <div>   
                        <TextEditor label="Interested areas (optional)" placeholder="Eg: UX Designer" type="text" mandatory="false"/>
                        <Login_button content="Continue" onClick={handleContinue}/>
                    </div>  
                </div>
            }
            
       </form>
       <CreateOrLoginText question="Already have an account?" action=" Login" actionLink="/login"/>
       
    </div>
</div>

    </div>)
}