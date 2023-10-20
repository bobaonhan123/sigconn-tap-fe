'use client'

import { data } from "autoprefixer";

export default function Box(props) {
    const { img, name, id } = props.data;
    let isChoosen=props.isChoosen;
    return (
      <div className="h-[35vh] bg-[#cfefff] mx-6 rounded-3xl cursor-pointer" onClick={props.click}>
        <img src={img} alt={name} className='h-[75%] w-full object-cover rounded-3xl'/>
        <div className="h-[20%] w-[100%] mt-2 px-5">
          <h2 className="text-gray-800 font-semibold text-lg p-0">{name}</h2>
          <p className="text-gray-500 text-sm p-0">{window.location.hostname+'/'+id}</p>
        </div>
        <div className={isChoosen?"true":"false"+ " relative h-full w-full top-[-98.1%] left-0 rounded-3xl bg-[#2b2b2bb2] backdrop-blur-lg  false:none"}>

        </div>
      </div>
    );
  }
  