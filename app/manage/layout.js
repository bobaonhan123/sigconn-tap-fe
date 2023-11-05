import Header from "@/app/components/Header";

export default function LoginLayout({ children }) {
    return (
        
        <div className='pt-[9.1vh]'>
            <Header />
            {children}
        </div>
      
    )
  }
  