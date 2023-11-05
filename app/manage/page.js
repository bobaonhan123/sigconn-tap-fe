'use client'
import { redirect } from 'next/navigation';
import { http } from '../config/AxiosCFG';
import { data } from 'autoprefixer';
import { useRouter } from "next/navigation";
import { useEffect } from 'react';
export default function Manage() {
  const router = useRouter();
  let token;
  useEffect(() => {
  token = localStorage.getItem('access-token');
  }, [])
  http.get("auth/name",{headers:{
    'Authorization': 'bearer ' + token
  }}).then((data)=>{
    router.push('/manage/mypage');
  }).catch((error)=> {
    router.push('/manage/login');
  } )
   
}
