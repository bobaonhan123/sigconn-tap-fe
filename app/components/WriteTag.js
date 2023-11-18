'use client'
import { useState } from "react"
import { useTagPopupStore } from "../store"
import logo from "@/app/img/logo.png";
import { http } from "../config/AxiosCFG"
import Image from "next/image";
export default function WriteTag() {
    const handleClose = useTagPopupStore((state) => state.toggle)
    const handleChange = useTagPopupStore((state) => state.change)
    const [name, setName] = useState("")
    function handleName(e) {
        setName(e.target.value)
    }
    function handleSubmit() {
        
    }
    return (<div className="fixed top-0 left-0 w-full h-full flex items-center justify-around bg-gray-800 bg-opacity-50 z-20"

    >

        <div className="bg-white p-6 rounded shadow-lg max-md:p-4 max-md:w-[90%]">
            <button
                className=" ml-[90%] text-gray-600"
                onClick={handleClose}
            >
                X
            </button>
            <div className="w-full flex flex-col items-center">
                <p className='
            py-2 px-1 rounded-md m-2 w-full' >Đặt điện thoại của bạn lên thẻ NFC</p>
                <Image src={logo} className='animate-pulse'/>
            </div>
        </div>
    </div>
    )
}