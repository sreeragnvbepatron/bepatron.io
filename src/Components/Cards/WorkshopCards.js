import Session from '../../Assets/Icons/Session.png'
import Image from 'next/image'
export default function WorkshopCards(props){
    return(<div>
            <div className='rounded-2xl bg-[#FF6363] h-60 w-[20rem] p-4 overflow-hidden' style={{ backgroundImage: 'linear-gradient(to top, #000000 1%, transparent 20%)' }} >
                <div className='text-sm grid grid-cols-12 mt-2'>
                        <span className='col-span-1 col-start-9 grid place-items-center'><Image width={20} height={20} src={Session}/></span>
                        <span className='col-span-11 col-start-10 text-white'>{props.rating} Rating</span>
                </div>
                <div className='text-[10px] rounded-3xl bg-black text-white w-20 p-2'>Masterclass</div>
                <div className='mt-4 w-[12rem] text-xl text-white font-semibold'>{props.name}</div>
                <div className="relative top-10 text-[11px] text-white font-['Anderson Grotesk'] font-semibold">
                    {props.mentorName}<br/>
                    {props.mentorRole}
                </div>
                <div className='z-20 relative left-32 bottom-28'>
                    <Image src={props.mentorImage} width={180} height={180}/>
                </div>
                <div className='grid grid-rows-2 z-50 relative bottom-40 left-56'>
                          <div className='text-off-white text-[9px]'>Available on</div>
                          <div className='font-bold text-white text-[9px]'>{props.date}</div>
                </div>
            </div>
            <span className='grid place-items-center font-bold mt-2'>{props.title}</span>
    </div>)
}