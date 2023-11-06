'use client'
export default function Alert({onClick}) {
    return (
        <div className="fixed bottom-2 left-2 w-60 h-10 z-100 bg-red-600 rounded-lg text-white flex items-center justify-center" onClick={onClick}>
            Thất bại!
       </div>
    )
  }
  