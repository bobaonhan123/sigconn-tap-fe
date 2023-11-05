'use client'
import { redirect } from 'next/navigation';
import { http } from '../config/AxiosCFG';
// import { useRouter } from "next/navigation";
export default function Manage() {
  // const router = useRouter();
  let token='';
  if (typeof localStorage !== 'undefined') {
  token = localStorage.getItem('access-token');
  }
  http.get("auth/name",{headers:{
    'Authorization': 'bearer ' + token
  }}).then((data)=>{
    if (typeof window !== 'undefined') {
      window.location.pathname = '/manage/mypage'
    }
  }).catch((error)=> {
    if (typeof window !== 'undefined') {
      window.location.pathname = '/manage/login'
    }
  } )
   
}
