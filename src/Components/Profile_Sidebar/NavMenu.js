import NavMenuItems from "./NavMenuItems";
import Home from '../../Assets/Icons/Home.svg'
import Bookings from "../../Assets/Icons/Bookings.svg"
import Mentors from "../../Assets/Icons/Mentors.svg"
// import Workshops from "../../Assets/Icons/Workshops.svg"
import Acheivements from "../../Assets/Icons/Acheivements.svg"
import Rewards from "../../Assets/Icons/Rewards.svg"
import Settings from "../../Assets/Icons/Settings.svg"

export default function NavMenu(props){
    return(<div className="w-auto grid grid-rows-7 gap-2 justify-center font-['Anderson Grotesk']">
            <div className={`hover:text-white ${props.active === 'Home' ? 'text-white' : 'text-slate-500'}`}>
                <NavMenuItems Itemtitle="Home" icon={Home}/>
            </div>
            <div className={` hover:text-white ${props.active === 'Bookings' ? 'text-white' : 'text-slate-500 '}`}>
                <NavMenuItems Itemtitle="Bookings" icon={Bookings}/>
            </div>
            <div className={` hover:text-white ${props.active === 'Mentors' ? 'text-white' : 'text-slate-500 '}`}>
                <NavMenuItems Itemtitle="Mentors" icon={Mentors}/>
            </div>
            {/* <div className={` hover:text-white ${props.active === 'Workshops' ? 'text-white' : 'text-slate-500 '}`}>
                <NavMenuItems Itemtitle="Workshops" icon={Workshops}/>
            </div> */}
            <div className={` hover:text-white ${props.active === 'Acheivements' ? 'text-white' : 'text-slate-500 '}`}>
                <NavMenuItems Itemtitle="Acheivements" icon={Acheivements}/>
            </div>
            <div className={` hover:text-white ${props.active === 'Rewards' ? 'text-white' : 'text-slate-500 '}`}>
                <NavMenuItems Itemtitle="Rewards" icon={Rewards}/>
            </div>
            <div className={` hover:text-white ${props.active === 'Settings' ? 'text-white' : 'text-slate-500 '}`}>
                <NavMenuItems Itemtitle="Settings" icon={Settings}/>
            </div>
        </div>)
}