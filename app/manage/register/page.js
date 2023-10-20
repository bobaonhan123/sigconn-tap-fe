'use client'

import Link from "next/link";
import { useState } from "react"

export default function Register() {
    const [username,setUsername]=useState("");
    function handleUsername(e) {
      setUsername(e.target.value);
    }
    const [password,setPassword]=useState("");
    function handlePassword(e) {
      setPassword(e.target.value);
    }
    const [reEnter,setReEnter]=useState("");
    function handleReEnter(e) {
      setReEnter(e.target.value);
    }
    return (
      <main className='flex flex-col h-[90vh] justify-center items-center w-screen'>
        <h1 className='text-center text-3xl font-montserrat block w-3/4'>Chào mừng đến với SigConn</h1>
        <div className='my-2 flex flex-col justify-around items-center w-1/2'>
        <input type="text" placeholder="Tên đăng nhập" className='my-2 w-3/4 h-12 border-2 rounded-md pl-2 bg-transparent' 
        value={username}
        onChange={handleUsername}/>
        <input type="text" placeholder="Mật khẩu" className='my-2 w-3/4 h-12 border-2 rounded-md pl-2 bg-transparent' 
        value={password}
        onChange={handlePassword}/>
        <input type="text" placeholder="Nhập lại mật khẩu" className='my-2 w-3/4 h-12 border-2 rounded-md pl-2 bg-transparent' 
        value={reEnter}
        onChange={handleReEnter}/>
        <div className='w-3/4'>
          <p className='text-right'>Đã có tài khoản? <Link href='/manage/login' className='text-gray-500'>Đăng nhập</Link></p>
        </div>
        <button className='my-2 w-1/4 h-12 rounded-sm pl-2 text-white bg-sky-500 mt-4'>Đăng ký</button>
        </div>
      </main>
    )
  }
  