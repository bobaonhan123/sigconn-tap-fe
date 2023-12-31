'use client'
import { useState } from "react"
import Link from "next/link";
// import { redirect } from 'next/navigation';
import { useRouter } from "next/navigation";
import { http } from "@/app/config/AxiosCFG";
import Alert from "@/app/components/Alert";
import {useLoadingStore} from "../../store"
export default function Login() {
  const setLoading = useLoadingStore((state)=>state.setLoading)
  const router = useRouter();
  const [username, setUsername] = useState("");
  function handleUsername(e) {
    setUsername(e.target.value);
  }
  const [password, setPassword] = useState("");
  const [isAlert, setAlert] = useState(false);
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  
  async function handleLogin() {
    setLoading(true)
    http.post(`/login/`, {
      username: username,
      password: password,
    })
      .then((res) => res.data)
      .then((data) => {
        if (data.error == "Unauthorized") {
          console.log(data)
          setAlert(true)
          setLoading(false)
        }
        else {
          console.log(data.token);
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem("access-token", data.token);
          }
          router.push("/manage/mypage");
          // if (typeof window !== 'undefined') {
          //   window.location.pathname = '/manage/mypage'
          // }
          
        }
      })
      .catch((error) => {
        setAlert(true)
        setLoading(false)
      });

  }

  return (

    <main className='flex flex-col h-[90vh] justify-center items-center w-screen'>
      <h1 className='text-center text-3xl font-montserrat block w-3/4'>Chào mừng trở lại</h1>
      <div className='my-2 flex flex-col justify-around items-center w-1/2 max-md:w-full'>
        <input type="text" placeholder="Tên đăng nhập" className='my-2 w-3/4 h-12 border-2 rounded-md pl-2 bg-transparent'
          value={username}
          onChange={handleUsername} />
        <input type="password" placeholder="Mật khẩu" className='my-2 w-3/4 h-12 border-2 rounded-md pl-2 bg-transparent'
          value={password}
          onChange={handlePassword} />
        <div className='w-3/4'>
          <p className='text-right'>Chưa có tài khoản? <Link href='/manage/register' className='text-gray-500'>Đăng ký</Link></p>
        </div>
        <button className='my-2 w-1/4 h-12 rounded-sm pl-2 text-white bg-sky-500 mt-10' onClick={handleLogin}>Đăng nhập</button>
      </div>
      {isAlert && <Alert onClick={() => setAlert(false)} />}
    </main>
  )
}
