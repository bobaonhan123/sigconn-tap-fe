'use client'
import { useNamePopupStore } from "../store"
export default function NamePopup() {
    const handleClose = useNamePopupStore((state) => state.toggle)
    return (<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-1000"
    onClick={handleClose}
    >

        <div className="bg-white p-8 rounded shadow-lg">
            <button
                className="absolute top-2 right-2 text-gray-600"
                
            >
                X
            </button>
            <h1 className="text-2xl mb-4">Hello, I'm a Pop-up!</h1>
            <p>This is some content inside the pop-up.</p>
        </div>
    </div>
    )
}