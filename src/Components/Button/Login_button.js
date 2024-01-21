export default function Login_button(props) {
    return (<div className='pt-8'>
    <button className="py-3 w-full bg-black text-white font-semibold px-4 rounded-lg text-l" onClick={props.onClick}>{props.content}</button>
</div>);
}