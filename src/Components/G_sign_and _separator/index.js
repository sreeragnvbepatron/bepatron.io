import '../../app/sign-up/login.css';
export default function G_sign_and_separator() {
    return(<div>
        <div className='pt-8'>
                <div className="text-center py-3 text-white font-bold rounded rounded-md border g-sign-btn">
                    <span className="text-black  text-l font-semibold font-['Open Sans']">
                        <img className="w-10 h-8 absolute g-sign-logo" src="https://seeklogo.com/images/G/google-logo-28FA7991AF-seeklogo.com.png"/>Continue with google</span>
                </div>
        </div>
        <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-gray-500"></div>
                    <span className="flex-shrink mx-4 text-black text-xl font-semibold font-['Open Sans']">or</span>
                    <div className="flex-grow border-t border-gray-500"></div>
        </div>
    </div>);
}