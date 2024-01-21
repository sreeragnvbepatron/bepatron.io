import React, { useState } from 'react';
import './index.css';
export default function Login_Role_Box(props) {
  const [isChecked, setIsChecked] = useState(false);
    const handleClick = () => {
      setIsChecked(prevState => !prevState);
        props.onSelect(props.title);
        console.log("Selected Radio Title:", props.title);
      };
      return (
        <div
          className={`mt-2 w-60 h-24 ${
            props.isSelected
              ? 'text-black border-2 border-black hover:border-black hover:text-black'
              : 'text-zinc-500 border border-neutral-300 hover:border-2 hover:text-black hover:border-black'
          } rounded-md p-4 cursor-pointer`}
          onClick={handleClick}
        >
          <div className='grid grid-cols-12'>
            <div className={`w-14 h-5 col-span-11 font-bold font-['Anderson Grotesk']`}>{props.title}</div>
            <div className='col-span-1'>
              <input type="radio" checked={isChecked} name="role" value={props.title} onChange={() => {}} />
            </div>
          </div>
          <div className="w-52 mt-2 text-xs font-normal font-['Anderson Grotesk']">{props.description}</div>
        </div>
      );
}