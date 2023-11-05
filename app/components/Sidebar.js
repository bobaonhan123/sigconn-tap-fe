"use client";
import logo from "@/app/img/logo.png";
import name from "@/app/img/name.png";
import Image from "next/image";
import Link from "next/link";
import { memo, useState } from "react";
import { http } from "../config/AxiosCFG";
import { useRouter } from "next/navigation";
function Sidebar() {
  const [name, setName] = useState("");
  const router=useRouter()
  let token='';
  if (typeof window !== 'undefined') {
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
      router.push("/manage/login");
    });
  return (
    <div className="flex-column fixed h-[90.5vh] w-[20vw] bg-[#e0fffc] left-[0.2vw] top-[9.5vh] rounded-md">
      <div className={`
      mx-auto
      my-6
      text-xl
      text-center
      `}>
        Xin chào <b className="cursor-pointer">{name}</b>
      </div>
    </div>
  );
}
export default memo(Sidebar);