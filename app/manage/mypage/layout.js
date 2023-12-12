'use client'
import NamePopup from "@/app/components/NamePopup";
import Sidebar from "@/app/components/Sidebar";
import WriteTag from "@/app/components/WriteTag";
import Success from "@/app/components/Success";
import { useNamePopupStore, useTagPopupStore, useSuccess } from "@/app/store";
export default function MyPageLayout({ children }) {

  const isNamePopUpVisible = useNamePopupStore((state) => state.isVisible)
  const isWritePopUpVisible = useTagPopupStore((state) => state.isVisible)
  const isSuccessVisible = useSuccess((state) => state.isVisible)
  return (
    <div className='pl-[21vw] max-md:pl-0'>
      <Sidebar />
      {isNamePopUpVisible && <NamePopup />}
      {isWritePopUpVisible && <WriteTag />}
      {isSuccessVisible && <Success />}
      {children}
    </div>

  )
}
