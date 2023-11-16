'use client'
import { useState } from "react"
import { useNamePopupStore } from "../store"
import { http } from "../config/AxiosCFG"
export default function NamePopup() {
    const handleClose = useNamePopupStore((state) => state.toggle)
    const handleChange = useNamePopupStore((state) => state.change)
    const [name,setName]=useState("")
    function handleName(e) {
        setName(e.target.value)
    }
    function handleSubmit() {
        let token = '';
        if (typeof localStorage !== 'undefined') {
            token = localStorage.getItem("access-token");
        }
        http
            .post("auth/name",{name:name}, {
                headers: {
                    Authorization: "bearer " + token,
                },
            })
            .then((data) => {
                setName(data.data.name)
                handleChange()
                handleClose()
            })
            .catch((error) => {
                
            });
    }
    return (<div className="fixed top-0 left-0 w-full h-full flex items-center justify-around bg-gray-800 bg-opacity-50 z-20"

    >

        <div className="bg-white p-6 rounded shadow-lg">
            <button
                className=" ml-[90%] text-gray-600"
                onClick={handleClose}
            >
                X
            </button>
            <div className="w-full flex flex-col items-end">
                <input type="text" placeholder="Nhập tên mới" className='
            border-2 py-2 px-1 rounded-md m-2 w-full' value={name} onChange={handleName}/>
                <button className='text-white w-[35%] bg-[#5271ff] text-center rounded-full py-[3%]' onClick={handleSubmit}>Đổi tên</button>
            </div>
        </div>
    </div>
    )
}