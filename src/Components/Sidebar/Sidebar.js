import Image from 'next/image'
import Logo from '../../Assets/Images/Logo.png'
export default function Sidebar() {
    const users=[
        {name:'Gopikrishna',position:'SDE-2 at Amazon',review:'Simply unbelievable! Lorem ipsum dolor sit amet, conse ctetur ad ipiscing  eiusmod tempor inci di dunt ut labore et dolore magna aliqua laboris nisi ut aliquip labo ris nisi ut aliquip',company_logo:'https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?resize=2560%2C1578',user_img_url:'https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png'},
        {name:'Sreehari A J',position:'Senior manager at meta',review:'Simply unbelievable! Lorem ipsum dolor sit amet, conse ctetur ad ipiscing  eiusmod tempor inci di dunt ut labore et dolore magna aliqua laboris nisi ut aliquip labo ris nisi ut aliquip',company_logo:'https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png',user_img_url:'https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png'},
        {name:'Hari Krishna',position:'Products designer at google',review:'Simply unbelievable! Lorem ipsum dolor sit amet, conse ctetur ad ipiscing  eiusmod tempor inci di dunt ut labore et dolore magna aliqua laboris nisi ut aliquip labo ris nisi ut aliquip',company_logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png',user_img_url:'https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png'},
        ]
        return (<div className='z-50'>
        <div className="mt-2.5 ml-6 bg-black pb-3 rounded-3xl pb-2 w-11/12 h-43 overflow-hidden">
        <div className="mt-2.5 ml-8 text-white text-xl font-medium font-['HK Grotesk Wide']"><Image src={Logo} width={150}
      height={150} alt="Logo of Bepatron"/></div>
    <div className="w-98 ml-12 text-white text-6xl font-['Anderson Grotesk']">Start your journey with us.</div>
    <div className="w-96 ml-12 mt-8 text-zinc-400 text-l font-normal font-['Anderson Grotesk'] leading-relaxed">Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit, sed do eius<br/>tempor incididunt ut labore et</div>
    <div className="w-full h-56 grid grid-cols-3 mt-20 gap-7">
   
    {users.map((user,index) => (
        <div key={index} className="w-80 h-64 ">
          <div className="w-56 h-56 bg-zinc-900 rounded-3xl pl-3 ">
          <Image alt="Comapny-logo" width={64} height={56} className="pt-5 w-16 h-14" src={user.company_logo} />
          <div className="pt-2 w-48 px-1 text-white text-xs font-normal font-['Anderson Grotesk'] leading-tight">
            {user.review}
          </div>
          <div className='pt-5 user_review_grid'>
            <Image alt="user" width={36} height={36} className="w-9 h-9 rounded-full" src={user.user_img_url} />
            <div>
                <div className="text-white text-sm font-['Anderson Grotesk']">
                    {user.name}
                </div>
                <div className="text-white text-xss font-['Anderson Grotesk'] leading-tight">
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
        )
}