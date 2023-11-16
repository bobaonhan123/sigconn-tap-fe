'use client'
import NamePopup from "@/app/components/NamePopup";
import Sidebar from "@/app/components/Sidebar";
import { useNamePopupStore } from "@/app/store";
export default function MyPageLayout({ children }) {

  const isVisible = useNamePopupStore((state)=>state.isVisible)
  return (
      <div className='pl-[21vw]'>
        <Sidebar />
        {isVisible && <NamePopup />}
        {children}
      </div>
    
  )
}
