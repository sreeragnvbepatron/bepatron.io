'use client'
import React, { useState } from 'react';
import Profile_Sidebar from "@/Components/Profile_Sidebar/Profile_Sidebar";
import profilepic from '../../Assets/Images/1695123394890.jpeg'


import EnglandFlag from '../../Assets/Icons/flag1.png'
import IndiaFlag from '../../Assets/Icons/IndiaFlag.png'
import Image from 'next/image'
import SearchBox from '@/Components/SearchBox/SearchBox';
import './index.css'
import MentorCards from '@/Components/Cards/MentorCards';
import WorkshopCards from '@/Components/Cards/WorkshopCards';
import Messages from '@/Components/FeedbackToUser/Messages';
import Notification from '@/Components/FeedbackToUser/Notification';
export default function MenteeHome(){
    const [searchTerm, setSearchTerm] = useState('');
    const notifications = ['Notification 1', 'Notification 2', 'Notification 3'];
    const messages = ['Message 1', 'Message 2', 'Message 3'];

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
    };
    const userdata={profilepic:'/../../Assets/Images/1695123394890.jpeg',name:'Sreerag N V',role:'Web Developer'}
    return(<div className="grid grid-cols-12">
        <div className="col-span-2 min-h-screen">
            <Profile_Sidebar/>
        </div>
        <div className="col-span-10 grid grid-rows-12 mt-4 p-4 divide-y divide-slate-300">
            {/* Nav design starts */}
            <div className='grid grid-cols-10 row-span-1 h-2/3 mb-6 overflow-hidden border-b-1 border-indigo-500'>
                <div className="col-span-1 text-black text-20p font-semibold">Home</div>
                <div className="col-span-4">
                    <SearchBox placeholder="Search mentors" onChange={handleChange} />
                </div>
                <div className="col-span-2 mt-1">
                    <button className="text-green-text grid place-items-center font-['Anderson Grotesk'] bg-light-green rounded-2xl p-2 cursor-pointer w-9/12 ">Become a mentor 🚀</button>
                </div>
                <div className="col-span-1 mt-3 grid grid-cols-2">
                    <div>
                        <Notification notifications={notifications}/>
                    </div>
                    <div>
                        <Messages messages={messages}/>
                    </div>
                    <div></div>
                </div>
                <div className="col-span-2 w-10/12 cursor-pointer">
                    <div className="grid grid-rows-2 grid-flow-col bg-gray rounded-3xl p-2 h-14">
                        <div className="row-span-3"><Image src={profilepic} className='rounded-full' alt='profile picture' width={40} height={40}/></div>
                        <div className="col-span-2 text-lg text-black font-semibold font-['Anderson Grotesk']">{userdata.name}</div>
                        <div className="row-span-2 text-xs mt-1 col-span-2 text-gray-text font-['Anderson Grotesk']">{userdata.role}</div>
                    </div>
                </div>
            </div>
            {/* Nav design ends */}
            <div className='row-span-1 mb-4 content-center p-2'>
                <div>
                    <span className='font-semibold text-xl'>Welcome </span> 
                    <span className='text-orange-text text-xl'>{userdata.name} 👋</span>
                </div>
                <div>
                    <span className='text-sm text-gray-text'> You have </span>
                    <span className='text-sm font-semibold'> 3 upcoming events</span>
                </div>
            
            </div>
            <div className='row-span-5'>
                <div className='grid grid-cols-90-10 mt-4 font-semibold'>
                    <div className=' text-xl'>
                        Top <span className='half_bg'>mentors</span>
                    </div>
                    <div className='text-black flex gap-2 cursor-pointer'>
                        <div className='col-span-1 cursor-pointer'>
                            Explore more
                        </div>
                        <div className='col-span-1 mt-2'>
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.228 9.74256L10.2277 9.74257L10.2277 0.257435H0.742565V2.25713H6.81378L0.0354582 9.03546L1.44967 10.4497L8.228 3.67135L8.228 9.74256Z" fill="black"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-10 gap-2 mt-4 mb-4'>
                    <div className='col-span-2'>
                        <MentorCards name="Sara Ali Khan" image="https://s3-alpha-sig.figma.com/img/8dbf/cbc2/7f432ef9bef1009035602270bcf84449?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sw2HN-UlD-Bp9XKQce45vOzvzhhqgKy6Xl2BdF84qgw5Vk3AQgxKJgxYMw19iufEmUzckO11QxWpQoZcbB4UN1QNJbqZjNpsKk0a65Ij1KBJGxGfcBd3gWBPTvvyT-Vw8YhxrQytRUMYp5Nh6numCgdrrPlKaBTVV-uponCTZuuTF8CidTYh0IEjsfMW~rTfHa6bBRCL6jxcbu7~HVI86N1Ejl9h5vQFhHoydi8ENWgL1fNWL3~jIB4f5nYP530QvTSuf2a5JGnXuSIkDkSg3Ecqtxl3VFRgLkfVwzPJdm8wMscOtwETStLIWHfHFvLV1E0kGGzKY1trtTcVidaRLA__" country={EnglandFlag} role="Product Designer" company="meta" RecentAvailable="02 May 2024" experience="2 Years" session="189 sessions(6 Reviews)"/>
                    </div>
                    <div className='col-span-2'>
                        <MentorCards name="Sara Ali Khan" image={profilepic} country={IndiaFlag} role="Product Designer" company="meta" RecentAvailable="02 May 2024"  experience="5 Years" session="200 sessions(6 Reviews)"/>
                    </div> 
                    <div className='col-span-2'>
                        <MentorCards name="Sara Ali Khan" image={profilepic} country={EnglandFlag} role="Product Designer" company="meta" RecentAvailable="02 May 2024" experience="2 Years" session="189 sessions(6 Reviews)"/>
                    </div>
                    <div className='col-span-2'>
                        <MentorCards name="Sara Ali Khan" image={profilepic} country={IndiaFlag} role="Product Designer" company="meta" RecentAvailable="02 May 2024"  experience="5 Years" session="200 sessions(6 Reviews)"/>
                    </div> 
                    <div className='col-span-2'>
                        <MentorCards name="Sara Ali Khan" image={profilepic} country={EnglandFlag} role="Product Designer" company="meta" RecentAvailable="02 May 2024" experience="2 Years" session="189 sessions(6 Reviews)"/>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className='row-span-5'>
            <div className='grid grid-cols-90-10 mt-4 font-semibold'>
                    <div className=' text-xl'>
                        Explore <span className='half_bg'>Workshops</span>
                    </div>
                    <div className='text-black flex gap-2 cursor-pointer'>
                        <div className='col-span-1 cursor-pointer'>
                            Explore more
                        </div>
                        <div className='col-span-1 mt-2'>
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.228 9.74256L10.2277 9.74257L10.2277 0.257435H0.742565V2.25713H6.81378L0.0354582 9.03546L1.44967 10.4497L8.228 3.67135L8.228 9.74256Z" fill="black"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-2 mt-4'>
                <div className='col-span-2 grid place-items-center'>
                    <WorkshopCards name="What's happening on Blockchain" date="02 May 2024" mentorImage="https://s3-alpha-sig.figma.com/img/1a4f/9960/f941da1a89814bb16ebb78c4cbbf9b96?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hxbgP4j52YnkZPGvenyB5tGweoTlynqzq6-460ZdzTPpbpuBEEFzBkoxcltoVq-ADzrRGsGPZxEevJ6A06ur6KUhqiNllOrnz4FohFtoPGSChhbRs1shDqWmSY5e8xUv4yd~b-EZaUb1F4Fn0Nk-ZOKZPJe7bg2zZw-~~uRM4pSDWgo22escro891RY~3pnufVNOS09MUvm3FpzXPXFbI9jKlCfAI-LYc5HmNzjcBVf13PoZkj6PXOkVTExdcPKx8HU-auJKN7qCACmGSpSFiWdlrO2gn~IFjmvVzXXgG-xUUXgsH98PNu3dNT5mm~5XyQJrxa1qw3SqH80bRwZQ3Q__" mentorName="Muhammad Rafeeque" mentorRole="Product designer at Meta" title="How Blockchain is working" rating="4.3" background="rose-400"/>
                </div>
                <div className='col-span-2 grid place-items-center'>
                    <WorkshopCards name="What's happening on Blockchain" date="02 May 2024" mentorImage="https://s3-alpha-sig.figma.com/img/1a4f/9960/f941da1a89814bb16ebb78c4cbbf9b96?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hxbgP4j52YnkZPGvenyB5tGweoTlynqzq6-460ZdzTPpbpuBEEFzBkoxcltoVq-ADzrRGsGPZxEevJ6A06ur6KUhqiNllOrnz4FohFtoPGSChhbRs1shDqWmSY5e8xUv4yd~b-EZaUb1F4Fn0Nk-ZOKZPJe7bg2zZw-~~uRM4pSDWgo22escro891RY~3pnufVNOS09MUvm3FpzXPXFbI9jKlCfAI-LYc5HmNzjcBVf13PoZkj6PXOkVTExdcPKx8HU-auJKN7qCACmGSpSFiWdlrO2gn~IFjmvVzXXgG-xUUXgsH98PNu3dNT5mm~5XyQJrxa1qw3SqH80bRwZQ3Q__" mentorName="Muhammad Rafeeque" mentorRole="Product designer at Meta" title="How Blockchain is working" rating="4.3" background="rose-400"/>
                </div>
                <div className='col-span-2 grid place-items-center'>
                    <WorkshopCards name="What's happening on Blockchain" date="02 May 2024" mentorImage="https://s3-alpha-sig.figma.com/img/1a4f/9960/f941da1a89814bb16ebb78c4cbbf9b96?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hxbgP4j52YnkZPGvenyB5tGweoTlynqzq6-460ZdzTPpbpuBEEFzBkoxcltoVq-ADzrRGsGPZxEevJ6A06ur6KUhqiNllOrnz4FohFtoPGSChhbRs1shDqWmSY5e8xUv4yd~b-EZaUb1F4Fn0Nk-ZOKZPJe7bg2zZw-~~uRM4pSDWgo22escro891RY~3pnufVNOS09MUvm3FpzXPXFbI9jKlCfAI-LYc5HmNzjcBVf13PoZkj6PXOkVTExdcPKx8HU-auJKN7qCACmGSpSFiWdlrO2gn~IFjmvVzXXgG-xUUXgsH98PNu3dNT5mm~5XyQJrxa1qw3SqH80bRwZQ3Q__" mentorName="Muhammad Rafeeque" mentorRole="Product designer at Meta" title="How Blockchain is working" rating="4.3" background="rose-400"/>
                </div>
                
                </div>
            </div>
        </div>
    </div>)
}
