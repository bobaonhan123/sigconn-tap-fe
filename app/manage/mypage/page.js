'use client'
import Box from "@/app/components/Box";
import { useState } from "react";
import { useLoadingStore } from "../../store";

const data = [
  {
    id: 1,
    name: "Hồ Sỹ Bảo Nhân",
    slogan: "Một thằng IT biết cài win và sửa mạng",
    img: "default.jpg",
    contact: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/hosybaonhan"
      }, {
        name: "Github",
        url: "https://github.com/bobaonhan123"
      }
    ]
  }, {
    id: 2,
    name: "Hồ Sỹ Bảo Nhân",
    slogan: "Một thằng IT biết cài win và sửa mạng",
    img: "default.jpg",
    contact: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/hosybaonhan"
      }, {
        name: "Github",
        url: "https://github.com/bobaonhan123"
      }
    ]
  }, {
    id: 3,
    name: "Hồ Sỹ Bảo Nhân",
    slogan: "Một thằng IT biết cài win và sửa mạng",
    img: "default.jpg",
    contact: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/hosybaonhan"
      }, {
        name: "Github",
        url: "https://github.com/bobaonhan123"
      }
    ]
  }, {
    id: 4,
    name: "Hồ Sỹ Bảo Nhân",
    slogan: "Một thằng IT biết cài win và sửa mạng",
    img: "default.jpg",
    contact: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/hosybaonhan"
      }, {
        name: "Github",
        url: "https://github.com/bobaonhan123"
      }
    ]
  }
];

export default function MyPage() {
  const setLoading = useLoadingStore((state) => state.setLoading)
  const [option, setOption] = useState(-1);
  setLoading(false)
  console.log(option)
  return (
    <main className='pt-16 px-12' onClick={() => { setOption(-1) }}>
      <h1 className='text-3xl font-medium font-montserrat'>Danh thiếp của bạn</h1>
      <hr className='h-[1px] border-none bg-slate-900 rounded-sm relative bottom-[-1.3rem] z-0 mt-6' />
      <button className='bg-[#cfefff] py-2 px-10 rounded-full relative mb-6'>Tạo mới</button>
      <div className="grid grid-cols-3 gap-y-10 max-md:grid-cols-1">
        {data.map((item, index) => {
          return (
            <Box key={index} data={item} isSelected={index !== option} click={(e) => {
              e.stopPropagation()
              setOption(index);
            }} />
          )
        })}
      </div>
    </main>
  )
}
