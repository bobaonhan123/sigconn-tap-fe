'use client'
import { useProfile } from "@/app/store";
export default function ContactEdit({indexArr}) {
    const name = useProfile((state) => state.contact[indexArr].name);
    const url = useProfile((state) => state.contact[indexArr].url);
    const editContactName = useProfile((state) => state.editContactName)
    const namechange=(e)=>{
        editContactName(indexArr,e.target.value)
    }
    const editContactUrl = useProfile((state) => state.editContactUrl)
    const urlchange = (e) => {
        editContactUrl(indexArr, e.target.value)
    }
    return (
        <div className='h-[90%]
        w-full
        p-4
        pl-8
        '>
            <h1 className='text-4xl
            font-semibold
            mb-16
            '>Thông tin</h1>
            <h3>Tiêu đề</h3>
            <input type='text' className='
            mb-6
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
            <h3>Liên kết</h3>
            <input type='text' className='
            mb-16
            h-12
            pl-4
            font-semibold
            w-[80%]
            rounded-xl
            bg-[#cfefff]
            underline
            max-md:w-full
            '
            value={url}
            onChange={urlchange}
            />
        </div>
    )
}
