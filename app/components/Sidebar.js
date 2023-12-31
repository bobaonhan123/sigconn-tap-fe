'use client'

import { memo, useEffect, useState } from "react";
import { http } from "../config/AxiosCFG";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LogoutComponent from "./LogoutComponent";
import { useNamePopupStore } from "../store";
function Sidebar() {
  const [name, setName] = useState("");
  const [logoutVisible, setLogoutVisible] = useState(false);
  const isChanged = useNamePopupStore((state) => state.isChanged)
  const [isVisible, setVisible] = useState(0)
  const arr = [` max-md:left-[-80vw]`,``]
  const router = useRouter()
  let token = '';
  if (typeof localStorage !== 'undefined') {
    token = localStorage.getItem("access-token");
  }
  useEffect(() => {
    http
      .get("/name/", {
        headers: {
          Authorization: "Token " + token,
        },
      })
      .then((data) => {
        if (data.data.username != "")
          setName(data.data.username)
        else router.push("/manage/login");
      })
      .catch((error) => {
        router.push("/manage/login");
        // if (typeof window !== 'undefined') {
        //   window.location.href ='/manage/login'
        // }
      });
  }, [isChanged])

  function handleLogoutVisible(e) {
    e.stopPropagation()
    setLogoutVisible(!logoutVisible);
  }

  function handleVisible() {
    if(isVisible==0) setVisible(1);
    else setVisible(0);
  }

  return (
    <div className={`flex-column fixed h-[90.5vh] w-[20vw] z-20 bg-[#e0fffc] left-[0.2vw] top-[9.5vh] rounded-md
    max-md:w-[80vw] transition delay-200 ${arr[isVisible]}`}
      onClick={() => setLogoutVisible(false)}>
      <p className='absolute md:hidden text-[2rem] font-bold top-6 right-[-16px] text-blue-400'
      onClick={handleVisible}  >{'>'}</p>
      <div className='
      mx-auto
      my-6
      text-xl
      text-center
      '>
        Xin chào <b className="cursor-pointer"
          onClick={handleLogoutVisible}
        >{name}</b>
        {logoutVisible && <LogoutComponent />}
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