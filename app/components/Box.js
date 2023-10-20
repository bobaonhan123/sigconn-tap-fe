'use client'
export default function Box(props) {
    const { img, name, id } = props.data;

    return (
      <div className="h-[35vh] bg-[#cfefff] mx-6 rounded-3xl cursor-pointer">
        <img src={img} alt={name} className='h-[75%] w-full object-cover rounded-3xl'/>
        <div className="h-[20%] w-[100%] px-4 mt-2">
          <h2 className="text-gray-800 font-semibold text-lg p-0">{name}</h2>
          <p className="text-gray-500 text-sm p-0">{window.location.hostname+'/'+id}</p>
        </div>
      </div>
    );
  }
  