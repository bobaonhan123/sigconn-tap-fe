'use client'
import { redirect } from 'next/navigation';
import { http } from '../config/AxiosCFG';
import { useRouter } from "next/navigation";
export default function Manage() {
  const router = useRouter();
  let token = '';
  if (typeof localStorage !== 'undefined') {
    token = localStorage.getItem('access-token');
  }
  http.get("/name/", {
    headers: {
      'Authorization': 'Token ' + token
    }
  }).then((data) => {
    // if (typeof window !== 'undefined') {
    //   window.location.pathname = '/manage/mypage'
    // }
    console.log(data)
    if('username' in data.data) {
    router.push('/manage/mypage');
    }
    else router.push('/manage/login');
  }).catch((error) => {
    // if (typeof window !== 'undefined') {
    //   window.location.pathname = '/manage/login'
    // }
    router.push('/manage/login');
  })
  
}