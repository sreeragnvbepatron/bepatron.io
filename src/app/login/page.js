import './login.css';
import Image from 'next/image'
import Logo from '../../Assets/Images/Logo.png'
export default function login() {
    return (<div className='grid grid-cols-2'>
        <div>
        <div className="left-[10px] top-[10px] relative bg-black rounded-3xl blackBox">
    <div className="w-96 left-[49px] top-[190.74px] absolute text-white text-5xl font-bold font-['Anderson Grotesk']">Start your journey with us.</div>
    <div className="left-[20px] top-[5.92px] absolute text-white text-xl font-medium font-['HK Grotesk Wide']"><Image src={Logo} width={250}
      height={250} alt="Logo of Bepatron"/></div>
    <div className="w-96 left-[49px] top-[400px] absolute text-zinc-400 text-xl font-normal font-['Anderson Grotesk'] leading-relaxed">Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit, sed do eius<br/>tempor incididunt ut labore et</div>
    <div className="w-60 h-64 left-[513px] top-[615px] absolute">
        <div className="w-60 h-64 left-0 top-0 absolute bg-zinc-900 rounded-3xl" />
        <div className="w-48 left-[20px] top-[55px] absolute text-white text-sm font-normal font-['Anderson Grotesk'] leading-tight">Simply unbelievable! Lorem ipsum dolor sit amet, conse ctetur ad ipiscing  eiusmod tempor inci di dunt ut labore et dolore magna aliqua laboris nisi ut aliquip labo ris nisi ut aliquip</div>
        <div className="left-[66px] top-[197px] absolute text-white text-base font-bold font-['Anderson Grotesk']">Hari Krishna</div>
        <img className="w-14 h-8 left-[20px] top-[13px] absolute" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" />
        <div className="left-[66px] top-[220px] absolute text-white text-xs font-normal font-['Anderson Grotesk'] leading-tight">Products designer at google</div>
        <img className="w-9 h-9 left-[20px] top-[197px] absolute rounded-full" src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png" />
    </div>
    <div className="w-60 h-64 left-[-19px] top-[615px] absolute">
        <div className="w-60 h-64 left-0 top-0 absolute bg-zinc-900 rounded-3xl" />
        <div className="w-48 left-[20px] top-[55px] absolute text-white text-sm font-normal font-['Anderson Grotesk'] leading-tight">Simply unbelievable! Lorem ipsum dolor sit amet, conse ctetur ad ipiscing  eiusmod tempor inci di dunt ut labore et dolore magna aliqua laboris nisi ut aliquip labo ris nisi ut aliquip</div>
        <div className="left-[66px] top-[197px] absolute text-white text-base font-bold font-['Anderson Grotesk']">Sreehari A J</div>
        <img className="w-9 h-9 left-[20px] top-[197px] absolute rounded-full" src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png" />
        <div className="left-[66px] top-[220px] absolute text-white text-xs font-normal font-['Anderson Grotesk'] leading-tight">Senior manager at meta</div>
        <img className="w-16 h-8 left-[20px] top-[13px] absolute" src="https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png" />
    </div>
    <div className="w-60 h-64 left-[247px] top-[615px] absolute">
        <div className="w-60 h-64 left-0 top-0 absolute bg-zinc-900 rounded-3xl" />
        <div className="w-48 left-[20px] top-[55px] absolute text-white text-sm font-normal font-['Anderson Grotesk'] leading-tight">Simply unbelievable! Lorem ipsum dolor sit amet, conse ctetur ad ipiscing  eiusmod tempor inci di dunt ut labore et dolore magna aliqua laboris nisi ut aliquip labo ris nisi ut aliquip</div>
        <div className="left-[66px] top-[197px] absolute text-white text-base font-bold font-['Anderson Grotesk']">Gopi Krishna</div>
        <div className="left-[66px] top-[220px] absolute text-white text-xs font-normal font-['Anderson Grotesk'] leading-tight">SDE-2 at Amazon</div>
        <img className="w-9 h-9 left-[19px] top-[197px] absolute rounded-full" src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png" />
        <img className="w-16 h-5 left-[18px] top-[19px] absolute" src="https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?resize=2560%2C1578" />
    </div>
</div>
</div>
<div>
    <div className='pt-20'>
        <span className="text-black text-4xl font-normal font-['Anderson Grotesk'] capitalize">Try </span>
        <span className="text-black text-4xl font-bold font-['Anderson Grotesk'] lowercase">bepatron.io<br/></span>
        <span className="text-black text-4xl font-normal font-['Anderson Grotesk'] capitalize">for Be Lorem ipsum🏆</span>
    </div>
    <div className='pt-16'>
        <span className="text-black text-3xl font-bold font-['Anderson Grotesk'] ">Create your account</span>
        <div><span className="text-zinc-500 text-base font-normal font-['Anderson Grotesk']">I</span><span className="text-zinc-500 text-base font-normal font-['Anderson Grotesk'] lowercase">t takes only 45 seconds🤯</span></div>
        
    </div>
   <div className='pt-16'>
        <div className="bg-blue-50 text-center text-white font-bold rounded rounded-md border g-sign-btn">
            <span className="text-black  text-xl font-semibold font-['Open Sans']"><img className="w-10 h-7  absolute g-sign-logo" src="https://seeklogo.com/images/G/google-logo-28FA7991AF-seeklogo.com.png" />Continue with google</span>
        </div>
    </div>
    <div className='grid grid-cols-3 pt-8'>   
        <div className="w-64 h-px border border-stone-300"/>
        <div className="text-black text-xl font-semibold font-['Open Sans'] lowercase">OR</div>
        <div className="h-px border border-stone-300"/>
    </div>
    <div>
        <form className='w-8/12'>
            <div>
                <span className="text-black text-base font-bold font-['Anderson Grotesk']">Name</span><span className="text-red-400 text-base font-bold font-['Anderson Grotesk']">*</span>
                <input class="mt-5 py-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name"></input>
            </div>
            <div className='pt-8'>
                <span className="text-black text-base font-bold font-['Anderson Grotesk']">Email</span><span className="text-red-400 text-base font-bold font-['Anderson Grotesk']">*</span>
                <input class="mt-5 py-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Enter your Email Address"></input>
            </div>
            <div className='pt-8'>
                <button class="py-4 w-full bg-black text-white font-bold px-4 rounded ">Continue</button>
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