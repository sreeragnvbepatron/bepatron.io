import Image from 'next/image'
import Experience from '../../Assets/Icons/Experience.png'
import Session from '../../Assets/Icons/Session.png'
import Role from '../../Assets/Icons/Role.png'

export default function MentorCards(props){
    return (<div>
              <div className="w-56 rounded-2xl overflow-hidden shadow-lg">
                <Image className="rounded-2xl w-[222px] h-[222px]" src={props.image} alt={props.name} width={250} height={50}/>
                <div className="px-3 py-4">
                    <div className="font-bold text-base grid grid-cols-12 grid-flow-row-dense">
                      <span className='col-span-10'>{props.name}</span> 
                      <span className='col-span-2 grid place-items-center'><Image src={props.country} width={20} height={20}/></span>
                  </div>
                  <div className='mt-2'>
                      <div className='text-sm font-semibold grid grid-cols-12 mt-2'>
                        <span className='col-span-1 grid place-items-center'><Image src={Role}/></span>
                        <span className='col-span-11 text-gray-text-in-card'>{props.role} at <span className='text-orange-text'>{props.company}</span></span>
                      </div>
                    <div>
                      <div className='text-sm font-semibold grid grid-cols-12 mt-2'>
                        <span className='col-span-1 grid place-items-center'><Image src={Session}/></span>
                        <span className='col-span-11 text-gray-text-in-card'>{props.session} </span>
                      </div>
                    </div>
                    <div>
                      <div className='text-sm font-semibold grid grid-cols-12 mt-2'>
                        <span className='col-span-1 grid place-items-center'><Image src={Experience}/></span>
                        <span className='col-span-11 text-gray-text-in-card'>{props.experience} </span>
                      </div>
                    </div>
                  </div>
                  <div className='grid grid-cols-2 mt-2'>
                      <div className='grid grid-rows-2'>
                          <div className='text-gray-text-in-card text-[11px]'>Available on</div>
                          <div className='font-bold text-[11px]'>{props.RecentAvailable}</div>
                      </div>
                      <div><button className="font-['Anderson Grotesk'] rounded-xl bg-black hover:bg-orange-book-call text-white hover:text-white p-2 text-sm">Book 1:1 call</button></div>
                  </div>
                </div>
              </div>
            </div>)
}