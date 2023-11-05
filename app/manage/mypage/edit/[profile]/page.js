"use client";
import { Dosis } from "next/font/google";
import Contact from "@/app/components/Contact";
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
      <div className=" w-[50%] mx-[4%] my-[5%] h-full">
        <div
          className={
            dosis.className +
            " h-[80%] w-[60%] bg-white border-2 border-black rounded-2xl"
          }
        >
          <div className="mb-5">
            <img
              src={info.img}
              className='rounded-full
                          h-32 
                          w-32 
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
                  // {<Contact key={index} data={item} />}
                  <></>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="w-[50%] m-4 h-full">
        <div></div>
      </div>
    </div>
  );
}
