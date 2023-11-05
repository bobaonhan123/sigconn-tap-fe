'use client'
import Sidebar from "@/app/components/Sidebar";

export default function MyPageLayout({ children }) {
  return (
    
      <div className='pl-[21vw]'>
        <Sidebar />
        {children}
      </div>
    
  )
}
