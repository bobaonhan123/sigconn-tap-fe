'use client'
import { useEffect, useState, memo} from "react"
import { useTagPopupStore,useSuccess } from "../store"
import logo from "@/app/img/logo.png";
import { http } from "../config/AxiosCFG"
import Image from "next/image";
function WriteTag() {
    const handleClose = useTagPopupStore((state) => state.toggle)
    const handleChange = useTagPopupStore((state) => state.change)
    const displaySuccess = useSuccess((state) => state.showFor5Seconds)
    const url = useTagPopupStore((state) => state.url)
    const onWrite = async () => {
        try {
            const ndef = new window.NDEFReader();
            await ndef.scan();
            await ndef.write({ records: [{ recordType: "url", data: url }] });
            await displaySuccess();
            console.log(url)
            handleClose()
        } catch (error) {
            console.log(error);
        }
    }
    onWrite()
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
                <Image src={logo} className='animate-pulse' alt="loading" />
            </div>
        </div>
    </div>
    )
}

export default memo(WriteTag)