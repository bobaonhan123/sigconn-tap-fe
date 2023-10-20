'use client'
import { redirect } from 'next/navigation';
export default function Manage() {
  if(localStorage.getItem('isLoggedIn'))
    redirect('/manage/mypage', 'replace');
  else 
   redirect('/manage/login');
}
