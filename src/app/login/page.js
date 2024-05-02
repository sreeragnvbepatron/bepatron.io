"use client";
import React, { useState } from 'react';
import Link from 'next/link'; 
import Sidebar from '@/Components/Sidebar/Sidebar';
import '../login/login.css';
import G_sign_and_separator from '@/Components/G_sign_and _separator';
import TextEditor from '@/Components/TextEditor/TextEditor';
import Login_button from '@/Components/Button/Login_button';
import CreateOrLoginText from '@/Components/CreateOrLoginText';

  export default function Login() {
   
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const updateFormData = (input) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [input.name]: input.value
        }));
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        // Prepare data for API call
        const userData = {
            email: formData.email,
            password: formData.password
        };
        console.log(userData);
        // Call API to submit login data
        // Example:
        // try {
        //     const response = await fetch('your_api_endpoint', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(userData)
        //     });
        //     // Handle response
        // } catch (error) {
        //     // Handle error
        // }
    };

    return (
        <div className='grid grid-cols-2'>
            <div className='min-h-95vh'><Sidebar /></div>
            <div className="w-9/12">
                <div className='mt-10'>
                    <span className="text-black text-2xl font-normal font-['Anderson Grotesk']">Try </span>
                    <span className="text-black text-2xl font-bold font-['Anderson Grotesk']">bepatron.io<br/></span>
                    <span className="text-black text-2xl font-normal font-['Anderson Grotesk']">for Be Lorem ipsum🏆</span>
                </div>
                <div className="text-zinc-500 text-base font-normal font-['Anderson Grotesk'] mt-16">Hello champ, Welcome back👋</div>
                <G_sign_and_separator/>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <TextEditor name="email" label="Email" type="email" placeholder="Enter your Email Address" mandatory="true" error="false" errorMessage="This email id is doesn't exist" onupdate={updateFormData}/>
                            <TextEditor name="password" label="Password" type="password" placeholder="Enter your password" mandatory="true" onupdate={updateFormData}/>
                        </div>
                        <div>
                            <Link href="\forgot-password"><div className="mt-3 text-right text-zinc-500 text-base font-normal font-['Anderson Grotesk'] cursor-pointer">Forgot password ?</div></Link>
                            <Login_button content="Continue"/>
                        </div>
                    </form>
                </div>
                <CreateOrLoginText question="Don't have an account?" action=" Sign up" actionLink="/sign-up"/>
            </div>
        </div>
    );
}