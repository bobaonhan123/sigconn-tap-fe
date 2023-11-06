'use client'

import { memo, useState } from "react";
import { http } from "../config/AxiosCFG";
import { useRouter } from "next/navigation";
import Link from "next/link";
function Sidebar() {
  const [name, setName] = useState("");
  const router=useRouter()
  let token='';
  if (typeof localStorage !== 'undefined') {
    token = localStorage.getItem("access-token");
  }
  http
    .get("auth/name", {
      headers: {
        Authorization: "bearer " + token,
      },
    })
    .then((data) => {
      setName(data.data.name)
    })
    .catch((error) => {
      // router.push("/manage/login");
      if (typeof window !== 'undefined') {
        window.location.href ='/manage/login'
      }
    });
  return (
    <div className="flex-column fixed h-[90.5vh] w-[20vw] bg-[#e0fffc] left-[0.2vw] top-[9.5vh] rounded-md">
      <div className='
      mx-auto
      my-6
      text-xl
      text-center
      '>
        Xin chào <b className="cursor-pointer">{name}</b>
      </div>
      <Link href='/manage/mypage' className='mx-0
       bg-[#5ba2ff65]
      py-3 px-4 block
      text-[#3156ff]
      font-bold
      rounded-r-2xl
      '>
        Trang chủ
      </Link>
    </div>
  );
}
export default memo(Sidebar);