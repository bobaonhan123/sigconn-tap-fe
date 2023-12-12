'use client'
export default function Success({ onClick }) {
    return (
        <div className='fixed bottom-2 left-2 w-60 h-10 z-100 bg-green-500 rounded-lg text-white flex items-center justify-center
        z-20' onClick={onClick}>
            Thành công!
        </div>
    )
}
