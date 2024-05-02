import Sidebar from "@/Components/Sidebar/Sidebar";
import '../login.css';
import Link from 'next/link'; 
import { faEdit,faCheckCircle,faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OtpEditor from "@/Components/TextEditor/OtpEditor";
import Login_button from "@/Components/Button/Login_button";
export default function verify() {
    
    return(<div className="grid grid-cols-2">
         <div className='min-h-95vh'><Sidebar /></div>
        <div className="w-9/12">
            <div className="w-120 h-28 mt-28">
                    <div className="w-98">
                        <span className="text-black text-3xl font-normal font-['Anderson Grotesk']">We have successfully sent 
                        <span className="text-black text-3xl font-bold font-['Anderson Grotesk'] capitalize">OTP </span> 
                        to your email address</span>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className="text-zinc-500 text-base font-normal font-['Anderson Grotesk'] lowercase">post.rafeeque@gmail.com</div>
                        <div className="flex flex-row gap-2 cursor-pointer">
                        <div className="text-orange-600 text-base font-normal font-['Anderson Grotesk'] underline lowercase">Edit</div>
                        <FontAwesomeIcon icon={faEdit} className="w-3 h-6" style={{color:'#F24B00'}}/>
                    </div>
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
                <div className="mt-20">
                    <div>
                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="bordered-checkbox-1" className="ml-2"><span className="text-zinc-500 text-lg font-bold font-['Anderson Grotesk']">I agree to all
                        <span className="text-black text-lg font-bold font-['Anderson Grotesk'] cursor-pointer"> Terms & conditions </span>and
                        <span className="text-black text-lg font-bold font-['Anderson Grotesk'] cursor-pointer"> privacy policy</span></span></label>
                    </div>
                    <Login_button content="Continue to explore 🎉"/>
                </div>
                
                <div className='pt-4'>
                    <div className="text-black text-l font-normal font-['Anderson Grotesk']">Already have an account?
                    <Link href="\login"><span className="text-orange-600 text-l font-bold font-['Anderson Grotesk'] curosr-pointer"> Login</span></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}