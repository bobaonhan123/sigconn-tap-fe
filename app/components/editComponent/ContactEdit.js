'use client'
export default function ContactEdit({indexArr}) {
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
            '/>
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
            '/>
        </div>
    )
}
