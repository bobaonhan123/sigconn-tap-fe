'use client'
import { useProfile } from "@/app/store"
export default function Slogan() {
    const slogan = useProfile((state) => state.slogan);
    const updateSlogan= useProfile((state) => state.updateSlogan);
    const sloganchange = (e) => {
        updateSlogan(e.target.value)
    }
    return (
        <div className='h-[90%]
        w-full
        p-4
        pl-8
        '>
            <h1 className='text-4xl
            font-semibold
            '>Slogan</h1>
            <input type='text' className='
            mt-16
            h-12
            pl-4
            font-semibold
            w-[80%]
            rounded-xl
            bg-[#cfefff]
            max-md:w-full
            '
            value={slogan}
            onChange={sloganchange}
            />
        </div>
    )
}
