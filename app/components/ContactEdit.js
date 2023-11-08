'use client'
export default function ContactEdit(props) {
    const { name, url } = props.data;
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
            '>
                {name}
            </div>
    )
}
