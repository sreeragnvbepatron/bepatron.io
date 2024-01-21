"use client"; 
import Sidebar from '@/Components/Sidebar/Sidebar';
import '../sign-up/login.css';
import React, { useState } from 'react';
import { faCheckCircle,faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextEditor from '@/Components/TextEditor/TextEditor';
import Login_button from '@/Components/Button/Login_button';
import CreateOrLoginText from '@/Components/CreateOrLoginText';
import OtpEditor from '@/Components/TextEditor/OtpEditor';
import Tick from '@/Components/FeedbackToUser/Tick';
export default function Forgot_password(){
    const [progress, setProgress] = useState("33");
    const handleContinue = () => {
        if (progress === "33") {
            setProgress("66");
        } else if (progress === "66") {
            setProgress("100");
        }
      };
    return(<div className='grid grid-cols-2'>
        <Sidebar/>
        <div className='w-9/12'>
            <div>
                <div className="mt-10 text-black text-4xl font-normal font-['Anderson Grotesk'] capitalize">uuug! don’t worry</div>
                {progress == "33" && 
                <div>
                    <div className="mt-16 text-black text-2xl font-bold font-['Anderson Grotesk'] capitalize">Forgot password</div>
                    <div className="mt-2 text-zinc-500 text-sm font-bold font-['Anderson Grotesk'] leading-none tracking-tight">Enter the email address with your account and we’ll send an email with confirmation to reset your password.</div>
                    <div className='mt-2'>
                        <TextEditor label="Enter your Email" type="email" placeholder="Enter your Email Address" mandatory="true" error="false" errorMessage="This email id is already exist, please try another."/>
                    </div>
                    <Login_button content="Send code" onClick={handleContinue}/>
                    
                </div>
                }
                { progress == "66" && 
                <div className="animate__fadeInRight">
                    <div className="mt-16 text-black text-2xl font-bold font-['Anderson Grotesk'] capitalize">Verify your OTP</div>
                    <div className="flex flex-row gap-2">
                        <div className="text-zinc-500 text-base font-normal font-['Anderson Grotesk'] lowercase">post.rafeeque@gmail.com</div>
                        <div className="flex flex-row gap-2 cursor-pointer">
                            <div className="text-orange-600 text-base font-normal font-['Anderson Grotesk'] underline lowercase">Change</div>
                        </div>
                    </div>
                    <div className="mt-14">
                        <div className="text-black text-base font-bold font-['Anderson Grotesk']">Enter OTP</div>
                        <div id="otp" className="flex flex-row text-center mt-5">
                            <OtpEditor id="first"/>
                            <OtpEditor id="second"/>
                            <OtpEditor id="third"/>
                            <OtpEditor id="fourth"/>
                            <OtpEditor id="fifth"/>
                            <OtpEditor id="sixth"/>
                        </div>
                        <div>
                            <div className="flex flex-row mt-4">
                                <FontAwesomeIcon icon={faTimesCircle} style={{ color: '#FF3F3F'}}  className="w-3 h-6"/>
                                <div className="ml-2 text-red-500 text-base font-bold font-['Anderson Grotesk']">Incorrect OTP</div>
                            </div>    
                            <div className="flex flex-row mt-4">
                                <FontAwesomeIcon icon={faCheckCircle} style={{color:'#00BC1E'}} className="w-3 h-6"/>
                                <div className="ml-2  text-green-600 text-base font-bold font-['Anderson Grotesk']">OTP verified sucessfully</div>
                            </div>
                        </div>
                    </div>
                    <Login_button content="Verify" onClick={handleContinue}/>
                </div>
                }
                {
                    progress == "100" && <div className="animate__fadeInRight">
                        <div className="mt-16 text-black text-2xl font-bold font-['Anderson Grotesk'] capitalize">Create new password</div>
                        <div className="mt-2 text-zinc-500 text-sm font-bold font-['Anderson Grotesk'] leading-none tracking-tight"> This password should be different from the previous password.</div>
                        <div>
                            <TextEditor label="New Password" type="password" placeholder="Enter your password" mandatory="true"/>
                            <div className='grid grid-cols-2'>
                                <Tick color="green" message="At least 8 characters"/>
                                <Tick color="gray" message="At least One special character"/>
                                <Tick color="green" message="One lowercase character"/>
                                <Tick color="gray" message=" One number"/>
                                <Tick color="green" message="One uppercase character"/>
                            </div>
                            <TextEditor label="Confirm password" type="password" placeholder="Re-enter your password" mandatory="true"/>
                            <Login_button content="Reset password" onClick={handleContinue}/>
                        </div>
                    </div>
                }
                <CreateOrLoginText question="Don't have an account?" action=" Sign up" actionLink="/sign-up"/>
                <div className='mt-56'>
                    <div className="text-center text-zinc-500 text-xs font-bold font-['Anderson Grotesk']">Terms of use |   Privacy Policy    |    Need Help?</div>
                </div>
            </div>
        </div>
    </div>);
}