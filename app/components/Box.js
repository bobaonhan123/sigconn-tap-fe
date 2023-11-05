'use client'

import { data } from "autoprefixer";
import Link from "next/link";

export default function Box(props) {
  const { img, name, id } = props.data;
  let isChoosen = props.isChoosen;
  let hostname="";
  let pathname="";
  let port=""
  if (typeof window !== 'undefined') {
    hostname = window.location.hostname;
    pathname = window.location.pathname;
    port=window.location.port
  }
  console.log(hostname)
  console.log(pathname)
  return (
    <div className="h-[35vh] bg-[#cfefff] mx-6 rounded-3xl cursor-pointer" onClick={props.click}>
      <img src={img} alt={name} className='h-[75%] w-full object-cover rounded-3xl' />
      <div className="h-[20%] w-[100%] mt-2 px-5">
        <h2 className="text-gray-800 font-semibold text-lg p-0">{name}</h2>
        <p className="text-gray-500 text-sm p-0">{hostname +":"+port+'/' + id}</p>
      </div>
      { !isChoosen && <div className= {`relative 
        h-full 
        w-full 
        top-[-98.1%] left-0 rounded-3xl bg-[#2b2b2b83] 
        backdrop-blur-lg 
        transition-colors 
        duration-500
        box-border
        flex
        flex-col
        items-center
        justify-evenly
        `}>
        <Link href={'/' + id } className={`text-white w-[55%] bg-[#003842] text-center rounded-full py-[3%]`}>Xem</Link>
        <Link href={pathname + '/edit/'+id}
         className={`text-white w-[55%] bg-[#737373] text-center rounded-full py-[3%]`}><div className="">Sửa</div></Link>
        <button
         className={`text-white w-[55%] bg-[#5271ff] text-center rounded-full py-[3%]`}>Xóa</button>
        <button
         className={`text-white w-[55%] bg-[#ff5757] text-center rounded-full py-[3%]`}>Ghi thẻ</button>
      </div>}
    </div>
  );
}
