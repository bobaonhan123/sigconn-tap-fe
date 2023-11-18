'use client'
import { useRouter } from "next/navigation";
import { useNamePopupStore } from "../store";
export default function LogoutComponent() {
    const router=useRouter()
    function handleLogout() {
        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem("access-token");
            router.push('/manage')
        }
    }
    const handleChangeName = useNamePopupStore((state) => state.toggle)

    return (
        <div className='flex flex-col h-9 absolute w-full
        '>
            <div className='
            bg-[#ebebeb]
            py-4
            my-1
            text-lg
            text-center
            rounded-md
            mx-auto
            w-[98.5%]
            hover:bg-[#3b3b3bf6]
            cursor-pointer
            transition-colors
            '
                onClick={handleChangeName}>
                Đổi tên
            </div>
            <div className='
            bg-[#ebebeb]
            py-4
            my-1
            text-lg
            text-center
            rounded-md
            mx-auto
            w-[98.5%]
            hover:bg-[#3b3b3bf6]
            cursor-pointer
            transition-colors
            '
                onClick={handleLogout}>
                Đăng xuất
            </div>
        </div>
    )
}
