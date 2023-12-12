'use client'
import LoadingScreen from "@/app/components/LoadingScreen";
import { useLoadingStore } from "@/app/store"
export default function LoginLayout({ children }) {
  const loading = useLoadingStore((state) => state.loading);
  return (
      
      <div>
      {loading && <LoadingScreen />}
        {children}</div>
    
  )
}
