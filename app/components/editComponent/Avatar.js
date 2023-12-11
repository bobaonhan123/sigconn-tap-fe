'use client'
export default function Avatar() {
    return (
        <div className='h-[90%]
        w-full
        p-4
        pl-8
        '>
            <h1 className='text-4xl
            font-semibold
            '>Upload ảnh</h1>
            <input type='file' className='hidden'
                id='file'
            />
            <label for="file"
                className='
            mt-16
            h-12
            font-semibold
            w-64
            h-64
            rounded-xl
            bg-[#cfefff]
            flex
            items-center
            justify-center
            text-2xl
            '
            >Choose a file</label>
        </div>
    )
}
