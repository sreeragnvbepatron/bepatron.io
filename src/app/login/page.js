import Link from 'next/link'; 

import Sidebar from '@/Components/Sidebar/Sidebar';
import './login.css';
import G_sign_and_separator from '@/Components/G_sign_and _separator';
import TextEditor from '@/Components/TextEditor/TextEditor';
import Login_button from '@/Components/Button/Login_button';
import CreateOrLoginText from '@/Components/CreateOrLoginText';

export const metadata = {
    title: 'Bepatron.io | Login',
    description: 'Top Mentors United',
  }

export default function Login() {
    
    return(<div className='grid grid-cols-2'>
        <Sidebar/>
        <div className="w-9/12">
            <div className='mt-10'>
                <span className="text-black text-2xl font-normal font-['Anderson Grotesk']">Try </span>
                <span className="text-black text-2xl font-bold font-['Anderson Grotesk']">bepatron.io<br/></span>
                <span className="text-black text-2xl font-normal font-['Anderson Grotesk']">for Be Lorem ipsum🏆</span>
            </div>
            <div className="text-zinc-500 text-base font-normal font-['Anderson Grotesk'] mt-16">Hello champ, Welcome back👋</div>
            <G_sign_and_separator/>
            <div>
                <div>
                <TextEditor label="Email" type="email" placeholder="Enter your Email Address" mandatory="true" error="false" errorMessage="This email id is already exist, please try another."/>
                <TextEditor label="Password" type="password" placeholder="Enter your password" mandatory="true"/>
                </div>
                <div>
                <Link href="\forgot-password"><div className="mt-3 text-right text-zinc-500 text-base font-normal font-['Anderson Grotesk'] cursor-pointer">Forgot password ?</div></Link>
                <Login_button content="Continue"/>
                </div>
            </div>
            <CreateOrLoginText question="Don't have an account?" action=" Sign up" actionLink="/sign-up"/>
        </div>
    </div>);
}