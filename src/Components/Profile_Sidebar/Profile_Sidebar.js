import Logo from '../../Assets/Images/logo-removebg-preview.png'
import GiftBox from '../../Assets/Icons/GiftBox.png'
import profilepic from '../../Assets/Images/1695123394890.jpeg'
import Image from 'next/image'
import NavMenu from './NavMenu';
export default function Profile_Sidebar(){
    const userdata={profilepic:'/../../Assets/Images/1695123394890.jpeg',name:'Sreerag N V'}
    return (<div className="z-50 h-full grid grid-rows-8 bg-black-sidebar text-white rounded-xl place-items-center">
            <div className='row-span-1 h-2/6'>
                <Image src={Logo} width={150} height={150} alt="Logo of Bepatron"/>   
            </div>
            <div className='row-span-4 h-5/6'>
              <NavMenu active="Home"/>
            </div>
            <div className="grid grid-rows-3 font-['Anderson Grotesk'] place-items-center bg-gray-in-black rounded-3xl p-3 cursor-pointer row-span-2">
                <div className='row-span-2'>
                    <Image src={GiftBox} width={100} height={100} alt="Invite and get Rewards"/>
                </div>
                <div className='row-span-1 text-20p grid place-items-center '>Invite your friend
                <div className='text-xs text-gray-text content-center'>Get 10000 Points</div></div>
            </div>
            <div className='grid grid-cols-4 bg-gray-in-black rounded-3xl w-9/12 p-2 place-items-center cursor-pointer row-span-1'>
                <div className='col-span-1'>
                    <Image src={profilepic} className='rounded-full' alt='profile picture' width={50} height={50}/>
                </div>
                <div className="col-span-2 font-['Anderson Grotesk']">
                    Logout
                </div>
                <div className='col-span-1 '>
                <svg fill="#ffffff" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 320.002 320.002" xmlSpace="preserve" stroke="#ffffff">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g id="XMLID_6_">
                      <path id="XMLID_7_" d="M51.213,175.001h173.785c8.284,0,15-6.716,15-15c0-8.284-6.716-15-15-15H51.213l19.394-19.394 c5.858-5.858,5.858-15.355,0-21.213c-5.857-5.858-15.355-5.858-21.213,0L4.396,149.393c-0.351,0.351-0.683,0.719-0.997,1.103 c-0.137,0.167-0.256,0.344-0.385,0.515c-0.165,0.22-0.335,0.435-0.488,0.664c-0.14,0.209-0.261,0.426-0.389,0.64 c-0.123,0.206-0.252,0.407-0.365,0.619c-0.118,0.22-0.217,0.446-0.323,0.67c-0.104,0.219-0.213,0.435-0.306,0.659 c-0.09,0.219-0.164,0.442-0.243,0.664c-0.087,0.24-0.179,0.477-0.253,0.722c-0.067,0.222-0.116,0.447-0.172,0.672 c-0.063,0.249-0.133,0.497-0.183,0.751c-0.051,0.259-0.082,0.521-0.119,0.782c-0.032,0.223-0.075,0.443-0.097,0.669 c-0.048,0.484-0.073,0.971-0.074,1.457c0,0.007-0.001,0.015-0.001,0.022c0,0.007,0.001,0.015,0.001,0.022 c0.001,0.487,0.026,0.973,0.074,1.458c0.022,0.223,0.064,0.44,0.095,0.661c0.038,0.264,0.069,0.528,0.121,0.79 c0.05,0.252,0.119,0.496,0.182,0.743c0.057,0.227,0.107,0.456,0.175,0.681c0.073,0.241,0.164,0.474,0.248,0.71 c0.081,0.226,0.155,0.453,0.247,0.675c0.091,0.22,0.198,0.431,0.3,0.646c0.108,0.229,0.21,0.46,0.33,0.685 c0.11,0.205,0.235,0.4,0.354,0.599c0.131,0.221,0.256,0.444,0.4,0.659c0.146,0.219,0.309,0.424,0.466,0.635 c0.136,0.181,0.262,0.368,0.407,0.544c0.299,0.364,0.616,0.713,0.947,1.048c0.016,0.016,0.029,0.034,0.045,0.05l45,45.001 c2.93,2.929,6.768,4.394,10.607,4.394c3.838-0.001,7.678-1.465,10.606-4.393c5.858-5.858,5.858-15.355,0.001-21.213L51.213,175.001 z"></path>
                      <path id="XMLID_8_" d="M305.002,25h-190c-8.284,0-15,6.716-15,15v60c0,8.284,6.716,15,15,15s15-6.716,15-15V55h160v210.001h-160 v-45.001c0-8.284-6.716-15-15-15s-15,6.716-15,15v60.001c0,8.284,6.716,15,15,15h190c8.284,0,15-6.716,15-15V40 C320.002,31.716,313.286,25,305.002,25z"></path>
                    </g>
                  </g>
                </svg>
                </div>
            </div>
    </div>)
}