'use client'

import Link from "next/link";
// import { useRouter } from "next/navigation";
import { useState } from "react"
import { http } from "@/app/config/AxiosCFG";
import Alert from "@/app/components/Alert";

export default function Register() {
  // const router=useRouter();
  const [isAlert, setAlert] = useState(false);
  const [name,setName]=useState("");
    function handleName(e) {
      setName(e.target.value);
    }
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

    async function handleRegister() {
      http.post(`auth/register`,{
        name:name,
        email:username,
        password:password,
        password_confirmation:reEnter
      })
        .then((res) => res.data)
        .then((data) => {
          console.log(data)
          if(typeof data!=="string"){
            if (typeof window !== 'undefined') {
              window.location.pathname = '/manage/login'
            }
          }
          else
            setAlert(true)
        })
        .catch((error) => {
          setAlert(true)
        });
  
    }
  
    return (
      <main className='flex flex-col h-[90vh] justify-center items-center w-screen'>
        <h1 className='text-center text-3xl font-montserrat block w-3/4'>Chào mừng đến với SigConn</h1>
        <div className='my-2 flex flex-col justify-around items-center w-1/2'>
        <input type="text" placeholder="Tên" className='my-2 w-3/4 h-12 border-2 rounded-md pl-2 bg-transparent' 
        value={name}
        onChange={handleName}/>
        <input type="text" placeholder="Email" className='my-2 w-3/4 h-12 border-2 rounded-md pl-2 bg-transparent' 
        value={username}
        onChange={handleUsername}/>
        <input type="password" placeholder="Mật khẩu" className='my-2 w-3/4 h-12 border-2 rounded-md pl-2 bg-transparent' 
        value={password}
        onChange={handlePassword}/>
        <input type="password" placeholder="Nhập lại mật khẩu" className='my-2 w-3/4 h-12 border-2 rounded-md pl-2 bg-transparent' 
        value={reEnter}
        onChange={handleReEnter}/>
        <div className='w-3/4'>
          <p className='text-right'>Đã có tài khoản? <Link href='/manage/login' className='text-gray-500'>Đăng nhập</Link></p>
        </div>
        <button className='my-2 w-1/4 h-12 rounded-sm pl-2 text-white bg-sky-500 mt-4' onClick={handleRegister}>Đăng ký</button>
        </div>
        {isAlert&&<Alert onClick={()=>setAlert(false)}/>}
      </main>
    )
  }
  