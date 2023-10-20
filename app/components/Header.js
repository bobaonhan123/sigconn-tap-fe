import logo from "@/app/img/logo.png";
import name from "@/app/img/name.png";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
    return (
    <>
        <header className='flex items-center bg-[#cfefff] h-[9vh] fixed top-[2px] left-[2px] right-[2px] rounded-lg'>
            <Link href="/manage" className='h-full flex items-center ml-5'>
            <div className='h-3/4 flex items-center'>
                <Image src={logo} alt="logo" className='h-3/4 w-auto mx-1'/>
                <Image src={name} alt="name" className='h-1/2 w-auto'/>
            </div>
            </Link>
        </header>
    </>
    )
  }
  