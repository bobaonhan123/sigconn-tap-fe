'use client'
export default function LogoutComponent() {
    function handleLogout() {
        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem("access-token");
        }
    }
    return (
        <div className='
            bg-[#ebebeb]
            py-4
            my-1
            text-lg
            text-center
            rounded-md
            mx-auto
            w-[98.5%]
            absolute
            hover:bg-[#3b3b3bf6]
            cursor-pointer
            transition-colors
            '
            onClick={handleLogout}>
            Đăng xuất
        </div>
    )
}
