export default function Contact(props) {
    const { name,url } = props.data;
    return (
        <a href={url} target='_blank' className='p-0'>
            <div className={`
            bg-[#ebebeb]
            py-5
            my-1
            text-lg
            text-center
            rounded-md
            mx-auto
            w-[98.5%]
            `}>
                {name}
            </div>
        </a>
    )
  }
  