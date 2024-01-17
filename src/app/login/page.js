import './login.css';
import Image from 'next/image'
import Logo from '../../Assets/Images/Logo.png'
import Circular_progressbar from '@/Components/Circular_progreebar/Circular_progressbar';
export default function login() {

    const users=[
    {name:'Gopikrishna',position:'SDE-2 at Amazon',review:'Simply unbelievable! Lorem ipsum dolor sit amet, conse ctetur ad ipiscing  eiusmod tempor inci di dunt ut labore et dolore magna aliqua laboris nisi ut aliquip labo ris nisi ut aliquip',company_logo:'https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?resize=2560%2C1578',user_img_url:'https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png'},
    {name:'Sreehari A J',position:'Senior manager at meta',review:'Simply unbelievable! Lorem ipsum dolor sit amet, conse ctetur ad ipiscing  eiusmod tempor inci di dunt ut labore et dolore magna aliqua laboris nisi ut aliquip labo ris nisi ut aliquip',company_logo:'https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png',user_img_url:'https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png'},
    {name:'Hari Krishna',position:'Products designer at google',review:'Simply unbelievable! Lorem ipsum dolor sit amet, conse ctetur ad ipiscing  eiusmod tempor inci di dunt ut labore et dolore magna aliqua laboris nisi ut aliquip labo ris nisi ut aliquip',company_logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png',user_img_url:'https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png'},
    ]

    return (<div className='grid grid-cols-2 '>
        <div>
        <div className="mt-2.5 w-10/12 ml-6 py-8 bg-black rounded-3xl  blackBox">
        <div className="mt-2.5 ml-2.5 text-white text-xl font-medium font-['HK Grotesk Wide']"><Image src={Logo} width={250}
      height={250} alt="Logo of Bepatron"/></div>
    <div className="w-96 ml-12 text-white text-5xl font-bold font-['Anderson Grotesk']">Start your journey with us.</div>
    <div className="w-96 ml-12 mt-12 text-zinc-400 text-xl font-normal font-['Anderson Grotesk'] leading-relaxed">Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit, sed do eius<br/>tempor incididunt ut labore et</div>
    <div className="w-full h-64 grid grid-cols-3 mt-48 gap-7">
    {users.map((user,index) => (
        <div key={index} className="w-80 h-64">
          <div className="w-60 h-64 bg-zinc-900 rounded-3xl pl-4">
          <img className="pt-5 w-16 h-14" src={user.company_logo} alt="Logo" />
          <div className="pt-2 w-48 text-white text-sm font-normal font-['Anderson Grotesk'] leading-tight">
            {user.review}
          </div>
          <div className='pt-5 user_review_grid'>
            <img className="w-9 h-9 rounded-full" src={user.user_img_url} alt="Avatar" />
            <div>
                <div className="text-white text-base font-bold font-['Anderson Grotesk']">
                    {user.name}
                </div>
                <div className="text-white text-xs font-normal font-['Anderson Grotesk'] leading-tight">
                    {user.position}
                </div>
            </div>
          </div>
        </div>
        </div>
      ))}
    </div>
</div>
</div>
<div className="w-9/12">
    <div className='pt-20'>
        <span className="text-black text-4xl font-normal font-['Anderson Grotesk'] capitalize">Try </span>
        <span className="text-black text-4xl font-bold font-['Anderson Grotesk'] lowercase">bepatron.io<br/></span>
        <span className="text-black text-4xl font-normal font-['Anderson Grotesk'] capitalize">for Be Lorem ipsum🏆</span>
    </div>
    <div className='pt-16 grid grid-cols-2'>
        <div>
            <span className="text-black text-3xl font-bold font-['Anderson Grotesk'] ">Create your account</span>
            <div><span className="text-zinc-500 text-base font-normal font-['Anderson Grotesk']">I</span><span className="text-zinc-500 text-base font-normal font-['Anderson Grotesk'] lowercase">t takes only 45 seconds🤯</span></div>
        </div>
        <div className='flex justify-end'>
            <Circular_progressbar value='33'/>
        </div>
    </div>
   <div className='pt-16'>
        <div className="text-center py-3 text-white font-bold rounded rounded-md border g-sign-btn">
            <span className="text-black  text-xl font-semibold font-['Open Sans']">
                <img className="w-10 h-7  absolute g-sign-logo" src="https://seeklogo.com/images/G/google-logo-28FA7991AF-seeklogo.com.png"/>Continue with google</span>
        </div>
    </div>
    <div class="relative flex py-5 items-center">
            <div class="flex-grow border-t border-gray-500"></div>
            <span class="flex-shrink mx-4 text-black text-xl font-semibold font-['Open Sans']">or</span>
            <div class="flex-grow border-t border-gray-500"></div>
    </div>
    <div>
        <form>
            <div>
                <span className="text-black text-base font-bold font-['Anderson Grotesk']">Name</span><span className="text-red-400 text-base font-bold font-['Anderson Grotesk']">*</span>
                <input className="mt-5 py-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name"></input>
            </div>
            <div className='pt-8'>
                <span className="text-black text-base font-bold font-['Anderson Grotesk']">Email</span><span className="text-red-400 text-base font-bold font-['Anderson Grotesk']">*</span>
                <input className="mt-5 py-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Enter your Email Address"></input>
            </div>
            <div className='pt-8'>
                <button className="py-4 w-full bg-black text-white font-bold px-4 rounded-lg text-lg">Continue</button>
            </div>
       </form>
       <div className='pt-8'>
            <div className="text-black text-xl font-normal font-['Anderson Grotesk']">Already have an account?
            <span className="text-orange-600 text-xl font-bold font-['Anderson Grotesk']">  Login</span>
            </div>
            
       </div>
    </div>
</div>

    </div>)
}