import Link from 'next/link'; 
export default function CreateOrLoginText(props){
    return(<div className='mt-4'>
    <div className="text-black text-l font-normal font-['Anderson Grotesk']">{props.question}
    <Link href={props.actionLink}><span className="text-orange-600 text-l font-bold font-['Anderson Grotesk'] cursor-pointer"> {props.action}</span></Link>
    </div>
</div>)
}