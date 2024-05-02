import Image from 'next/image'
export default function NavMenuItems(props){
    return (<div className="grid grid-cols-3 gap-2 cursor-pointer">
                <div className='col-span-1'>
                    <Image src={props.icon} alt='icon' width={20} height={20}/>
                </div>
                <div className='col-span-2'>
                    {props.Itemtitle}
                </div>
    </div>)
}