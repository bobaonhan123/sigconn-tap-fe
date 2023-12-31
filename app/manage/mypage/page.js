'use client'
import Box from "@/app/components/Box";
import { useEffect, useState } from "react";
import { useLoadingStore, useReloadBoxes } from "../../store";
import { http } from "@/app/config/AxiosCFG";
import { headers } from "@/next.config";

export default function MyPage() {
  const [data, setData] = useState([]);
  let token = '';
  if (typeof localStorage !== 'undefined') {
    token = localStorage.getItem("access-token");
  }
  const isReload=useReloadBoxes((state)=>state.isChanged)
  useEffect(() => {
    http.get('/profile/all',{headers:{
      Authorization: 'Token ' + token
    }}).then((res) => {
      setData(res.data)
    })
  }, [isReload])
  const handleCreate = () => {
    http.post('/profile/create_profile/',{
        "name": "Nhập tên",
        "slogan": "Nhập Slogan",
        "img": "default.jpg",
        "contact": [
          
        ]
    },{
      headers:{
        Authorization: 'Token ' + token
      }
    }).then((res) => {
      setData([...data,res.data])
    })
  }
  const setLoading = useLoadingStore((state) => state.setLoading)
  const [option, setOption] = useState(-1);
  setLoading(false)
  console.log(option)
  return (
    <main className='pt-16 px-12' onClick={() => { setOption(-1) }}>
      <h1 className='text-3xl font-medium font-montserrat'>Danh thiếp của bạn</h1>
      <hr className='h-[1px] border-none bg-slate-900 rounded-sm relative bottom-[-1.3rem] z-0 mt-6' />
      <button className='bg-[#cfefff] py-2 px-10 rounded-full relative mb-6' onClick={handleCreate}>Tạo mới</button>
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
