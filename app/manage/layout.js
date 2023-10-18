'use client'
import Header from "@/app/components/Header";

export default function LoginLayout({ children }) {
    return (
        
        <div className='pt-16'>
            <Header />
            {children}
        </div>
      
    )
  }
  