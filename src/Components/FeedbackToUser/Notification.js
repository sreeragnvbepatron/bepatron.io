"use client";
import React, { useState } from 'react';
import Image from 'next/image'
import IconBell from "../../Assets/Icons/IconBell.png"
  export default function Notification(props) {
   
    // State variable for managing modal visibility
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to handle click event on the dropdown button
    const handleDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="relative inline-block text-sm">
             <div className='cursor-pointer' onClick={handleDropdownClick} id="dropdownMessagesButton"
                data-dropdown-toggle="dropdownMessages">
            <Image src={IconBell} width={20} height={20}/>

                {props.notifications.length > 0 && (
                    <div className="absolute top-0 transform translate-x-2 -translate-y-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {props.notifications.length}
                    </div>
                )}
                </div>
            {/* Dropdown menu */}
            {isDropdownOpen && (
                <div
                id="dropdownNotification"
                className="z-20 fixed top-20 right-12 mt-1 w-1/4 bg-white divide-y divide-gray-100 rounded-lg shadow"
                aria-labelledby="dropdownNotificationButton"
            >
                    <div className="divide-y divide-gray-100 ">
                        {props.notifications.map((notification, index) => (
                            <a
                                key={index}
                                href="#"
                                className="flex px-4 py-3 hover:bg-gray-800"
                            >
                               {notification}
                            </a>
                        ))}
                        {props.notifications.length === 0 && <a
                                href="#"
                                className="flex px-4 py-3 text-sm text-gray-text"
                            >
                               Nothing to Show
                            </a>}
                    </div>
                </div>
            )}
        </div>
    );
}