'use client'

import { hostname } from "../config/location";
import Link from "next/link";
import { useTagPopupStore } from "../store";

export default function Box(props) {
  const { img, name, id } = props.data;
  let isSelected = props.isSelected;
  const toggleWrite = useTagPopupStore((state) => state.toggle)
  const setUrl = useTagPopupStore((state) => state.setUrl)
  const handleWrite = async () => {
    await setUrl(hostname + '/' + id)
    toggleWrite()
  }
  return (
    <div className="h-[35vh] bg-[#cfefff] mx-6 rounded-3xl cursor-pointer max-md:mx-2" onClick={props.click}>
      <img src={img} alt={name} className='h-[75%] w-full object-cover rounded-3xl' />
      <div className="h-[20%] w-[100%] mt-2 px-5">
        <h2 className="text-gray-800 font-semibold text-lg p-0">{name}</h2>
        <p className="text-gray-500 text-sm p-0">{hostname + '/' + id}</p>
      </div>
      {!isSelected && <div className={`relative 
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
        <a href={'/' + id} className='text-white w-[55%] bg-[#003842] text-center rounded-full py-[3%]'
          target="_blank">Xem</a>
        <Link href={'/manage/mypage/edit/' + id}
          className={`text-white w-[55%] bg-[#737373] text-center rounded-full py-[3%]`}><div className="">Sửa</div></Link>
        <button
          className={`text-white w-[55%] bg-[#5271ff] text-center rounded-full py-[3%]`}>Xóa</button>
        <button
          className='text-white w-[55%] bg-[#ff5757] text-center rounded-full py-[3%]'
          onClick={handleWrite}>Ghi thẻ</button>
      </div>}
    </div>
  );
}
