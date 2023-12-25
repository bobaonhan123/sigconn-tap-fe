"use client";
import { Dosis } from "next/font/google";
import ContactEdit from "@/app/components/ContactEdit";
import { useProfile } from "@/app/store";
import { useEffect, useState } from "react";
import { imgBaseUrl } from "@/app/config/AxiosCFG";
import EditPanel from "@/app/components/EditPanel";

const dosis = Dosis({ subsets: ["latin"] });
const data = [
  {
    id: 1,
    name: "Hồ Sỹ Bảo Nhân",
    slogan: "Một thằng IT biết cài win và sửa mạng",
    img: "default.jpg",
    contact: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/hosybaonhan",
      },
      {
        name: "Github",
        url: "https://github.com/bobaonhan123",
      },
    ],
  },
  {
    id: 2,
    name: "Hồ Sỹ Bảo Nhân",
    slogan: "Một thằng IT biết cài win và sửa mạng",
    img: "default.jpg",
    contact: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/hosybaonhan",
      },
      {
        name: "Github",
        url: "https://github.com/bobaonhan123",
      },
    ],
  },
  {
    id: 3,
    name: "Hồ Sỹ Bảo Nhân",
    slogan: "Một thằng IT biết cài win và sửa mạng",
    img: "default.jpg",
    contact: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/hosybaonhan",
      },
      {
        name: "Github",
        url: "https://github.com/bobaonhan123",
      },
    ],
  },
  {
    id: 4,
    name: "Hồ Sỹ Bảo Nhân",
    slogan: "Một thằng IT biết cài win và sửa mạng",
    img: "default.jpg",
    contact: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/hosybaonhan",
      },
      {
        name: "Github",
        url: "https://github.com/bobaonhan123",
      },
    ],
  },
];
export default function Page({ params }) {
  const id = useProfile((state) => state.id);
  const name = useProfile((state) => state.name);
  const img = useProfile((state) => state.img);
  const slogan = useProfile((state) => state.slogan);
  const contact = useProfile((state) => state.contact);
  const addContact = useProfile((state) => state.addContact);
  const updateState = useProfile((state) => state.updateState);
  const handleAdd = () => {
    const newContact = { name: '<Nhập>', url: '' };
    addContact(newContact);
  }
  useEffect(() => {
    const newData = data[parseInt(params.profile)];
    updateState(newData);
    console.log(name);
  }, [params.profile, updateState]);
  const handleSave = () => {
    const info = {
      name: name,
      slogan: slogan,
      img: img,
      contact: contact,
    };
    console.log(info);
  }
  const [keyMapping, setKeyMapping] = useState('-1');
  return (
    <div className="h-[90vh] flex">
      <div className=" w-[40%] ml-[4%] mt-[5%] h-full max-md:w-full">
        <div
          className={
            dosis.className +
            ` h-[80%] w-[80%] bg-white border-2 border-black rounded-2xl overflow-auto max-md:fixed 
            max-md:w-[90vw]
            max-md:left-[5%]`
          }
        >
          <div className="mb-5">
            <img
              src={imgBaseUrl+'/?filename='+img}
              className='rounded-full
                          h-26 
                          w-26 
                          object-cover 
                          w-20 
                          h-20 mx-auto 
                          mt-10'
              onClick={() => setKeyMapping((keyMapping) => 'img')}
            />
            <h1
              className='
              text-xl text-center
              mt-4
              text-gray-700
              font-semibold
              uppercase
              '
              onClick={() => setKeyMapping((keyMapping) => 'name')}
            >
              {name}
            </h1>
            <h2
              className='
              text-center
              font-semibold
              text-gray-500
              '
              onClick={() => setKeyMapping((keyMapping) => 'slogan')}
            >
              {slogan}
            </h2>
          </div>
          <div>
            {
              contact.map((item, index) => {
                return (
                  <ContactEdit key={index} data={item} onClick={() => setKeyMapping((keyMapping) => `${index}`)} />
                )
              })
            }
            <div className='
            bg-[#a8b8ff]
            py-4
            my-1
            text-lg
            text-center
            rounded-md
            mx-auto
            w-[98.5%]
            cursor-pointer
            '
              onClick={handleAdd}
            >
              +
            </div>
          </div>
        </div>
      </div>
      <div className="w-[60%] m-4 h-full flex flex-col">
        <div className='
        w-full
        h-[85%]
        
        '>
          {keyMapping != '-1' && <EditPanel keyMapping={keyMapping} setKeyMapping={setKeyMapping} />}
        </div>
        <button className='
        bg-[#939cf1]
        text-white
        text-lg
        py-1
        px-14
        rounded-full
        mr-6
        ml-auto
        max-md:fixed
        max-md:bottom-2
        max-md:left-[30vw]
        '
        onClick={handleSave}>LƯU</button>
      </div>
    </div >
  );
}
