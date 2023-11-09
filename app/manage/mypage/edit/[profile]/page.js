"use client";
import { Dosis } from "next/font/google";
import Contact from "@/app/components/Contact";
import ContactEdit from "@/app/components/ContactEdit";
const dosis = Dosis({ subsets: ["latin"] });
const data = [
  {
    id: 1,
    name: "Hồ Sỹ Bảo Nhân",
    slogan: "Một thằng IT biết cài win và sửa mạng",
    img: "https://www.w3schools.com/tags/img_girl.jpg",
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
    img: "https://www.w3schools.com/tags/img_girl.jpg",
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
    img: "https://www.w3schools.com/tags/img_girl.jpg",
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
    img: "https://www.w3schools.com/tags/img_girl.jpg",
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
  const info = {
    id: 3,
    name: "Hồ Sỹ Bảo Nhân",
    slogan: "Một thằng IT biết cài win và sửa mạng",
    img: "https://www.w3schools.com/tags/img_girl.jpg",
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
  }
  return (
    <div className="h-[90vh] flex">
      <div className=" w-[40%] ml-[4%] mt-[5%] h-full">
        <div
          className={
            dosis.className +
            " h-[80%] w-[80%] bg-white border-2 border-black rounded-2xl overflow-auto"
          }
        >
          <div className="mb-5">
            <img
              src={info.img}
              className='rounded-full
                          h-26 
                          w-26 
                          object-cover 
                          w-20 
                          h-20 mx-auto 
                          mt-10'
            />
            <h1
              className='
              text-xl text-center
              mt-4
              text-gray-700
              font-semibold
              uppercase
              
              '
            >
              {info.name}
            </h1>
            <h2
              className='
              text-center
              font-semibold
              text-gray-500
              '
            >
              {info.slogan}
            </h2>
          </div>
          <div>
            {
              info.contact.map((item, index) => {
                return (
                  <ContactEdit key={index} data={item} />
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
            '>
              +
            </div>
          </div>
        </div>
      </div>
      <div className="w-[60%] m-4 h-full flex flex-col">
        <div className='
        w-full
        h-[85%]
        bg-white
        '>
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
        '>LƯU</button>
      </div>
    </div>
  );
}
