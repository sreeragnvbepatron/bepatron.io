"use client"
import React, { useState } from 'react';
import Circular_progressbar from '@/Components/Circular_progreebar/Circular_progressbar';
import TextEditor from '@/Components/TextEditor/TextEditor';
import Login_button from '@/Components/Button/Login_button';
import Login_Role_Box from '@/Components/Box/Login_Role_Box';
import Sidebar from '@/Components/Sidebar/Sidebar';
import G_sign_and_separator from '@/Components/G_sign_and _separator';
import CreateOrLoginText from '@/Components/CreateOrLoginText';

const Signup = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        interestedAreas: '',
        role: '' // Add role field to formData
    });
    const [error, setError] = useState(null);
    const [progress, setProgress] = useState("33");

    const updateFormData = (input) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [input.name]: input.value
        }));
    };

    const handleContinue = async (e) => {
        e.preventDefault();

        // Form validation...
        if (progress === "33") {
            if(formData.name){
                if(formData.email){
                    setProgress("66");
                }else{
                    console.log("Email error")
                }
            }else{
                    console.log("Name error")
            }
            
        } else if (progress === "66") {
            if(formData.password == formData.confirmPassword){
                    setProgress("100");
            }else{
                    console.log("Password mismatch error")
            }
            
        } else {
           
            console.log(formData);
        }
    };

    return (
        <div className='grid grid-cols-2 h-full'>
            <div className='min-h-95vh'><Sidebar /></div>
            <div className="w-9/12">
                <div className='pt-10'>
                    <span className="text-black text-2xl font-normal font-['Anderson Grotesk']">Try </span>
                    <span className="text-black text-2xl font-bold font-['Anderson Grotesk']">bepatron.io<br /></span>
                    <span className="text-black text-2xl font-normal font-['Anderson Grotesk']">for Be Lorem ipsum🏆</span>
                </div>
                <div className='pt-8 grid grid-cols-2'>
                    <div>
                        <span className="text-black text-2xl font-bold font-['Anderson Grotesk'] ">Create your account</span>
                        <div><span className="text-zinc-500 text-base font-normal font-['Anderson Grotesk']">It</span><span className="text-zinc-500 text-base font-normal font-['Anderson Grotesk']"> takes only 45 seconds🤯</span></div>
                    </div>
                    <div className='flex justify-end'>
                        <Circular_progressbar value={progress} />
                    </div>
                </div>
                
                {progress !== "100" && <G_sign_and_separator />}
                <div>
                    <form onSubmit={handleContinue}>
                        {error && <div className="text-red-500">{error}</div>}
                        {progress === "33" &&
    <div>
        <TextEditor name="name" label="Name" type="text" placeholder="Enter your name" onupdate={updateFormData} mandatory="true"  />
        <TextEditor name="email" label="Email" type="email" placeholder="Enter your Email Address" mandatory="true" error="false" errorMessage="This email id is already exist, please try another." onupdate={updateFormData} />
        <Login_button content="Continue" />
    </div>
}
{
    progress === "66" &&
    <div className="animate__fadeInRight">
        <TextEditor name="password" label="Password" type="password" placeholder="Enter your password" mandatory="true" onupdate={updateFormData} />
        <TextEditor name="confirmPassword" label="Confirm password" type="password" placeholder="Re-enter your password" mandatory="true" onupdate={updateFormData} />
        <Login_button content="Continue with email" />
    </div>
}
{
    progress === "100" &&
    <div className="mt-10 animate__fadeInRight">
        <div className="text-black text-xl font-bold font-['Anderson Grotesk']">I’m a :</div>
        <div className='grid grid-cols-2'>
        <Login_Role_Box
                            title="Mentor"
                            description="Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod"
                            isSelected={selectedOption === 'Mentor'}
                            onSelect={() => { setSelectedOption('Mentor'); updateFormData({ name: 'role', value: 'Mentor' }); }} // Update selectedOption and formData
                        />
                        <Login_Role_Box
                            title="Mentee"
                            description="Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod"
                            isSelected={selectedOption === 'Mentee'}
                            onSelect={() => { setSelectedOption('Mentee'); updateFormData({ name: 'role', value: 'Mentee' }); }} // Update selectedOption and formData
                        />
        </div>
        <div className='mt-4'>
            <span className="text-zinc-400 text-base font-normal font-['Outfit']">Don’t worry,
                <span className="text-black font-bold"> you can always be a mentor</span>. never stop learning!</span>
        </div>
        <div>
            <TextEditor name="interestedAreas" label="Interested areas (optional)" placeholder="Eg: UX Designer" type="text" mandatory="false" onupdate={updateFormData} />
            <Login_button content="Continue" />
        </div>
    </div>
}

                    </form>
                    <CreateOrLoginText question="Already have an account?" action=" Login" actionLink="/login" />
                </div>
            </div>
        </div>
    )
}

export default Signup;
