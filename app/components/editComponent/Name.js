'use client'
import { useProfile } from "@/app/store"
export default function Name() {
    const name = useProfile((state) => state.name);
    const updateName=useProfile((state)=>state.updateName);
    const namechange=(e)=> {
        updateName(e.target.value)
    }
    return (
        <div className='h-[90%]
        w-full
        p-4
        pl-8
        '>
            <h1 className='text-4xl
            font-semibold
            '>Tên</h1>
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
            value={name}
            onChange={namechange}
            />
        </div>
    )
}
