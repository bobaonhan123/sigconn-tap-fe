'use client'
import Box from "@/app/components/Box";
const data = [
  {
    id:1,
    name:"Hồ Sỹ Bảo Nhân",
    slogan:"Một thằng IT biết cài win và sửa mạng",
    img:"https://www.w3schools.com/tags/img_girl.jpg",
    contact: [
      {
        name:"Facebook",
        url:"https://www.facebook.com/hosybaonhan"
      },{
        name:"Github",
        url:"https://github.com/bobaonhan123"
      }
    ]
  }
];

export default function MyPage() {
    
    return (
      <main className='pt-16 px-12'>
        <h1 className='text-3xl font-medium font-montserrat'>Danh thiếp của bạn</h1>
        <hr className='h-[1px] border-none bg-slate-900 rounded-sm relative bottom-[-1.3rem] z-0 mt-6'/>
        <button className='bg-[#cfefff] py-2 px-10 rounded-full z-10 relative mb-6'>Tạo mới</button>
        <div className="grid grid-cols-3">
          {data.map((item,index)=> {
            return (
            <Box key={index} data={item}/>
          )})}
        </div>
      </main>
    )
  }
  