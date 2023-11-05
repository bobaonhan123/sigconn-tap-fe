import Contact from "../components/Contact";
import { Dosis } from "next/font/google";
const dosis=Dosis({ subsets: ['latin'] });
const data = [
  {
    id: 1,
    name: "Hồ Sỹ Bảo Nhân",
    slogan: "Một thằng IT biết cài win và sửa mạng",
    img: "https://www.w3schools.com/tags/img_girl.jpg",
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
    img: "https://www.w3schools.com/tags/img_girl.jpg",
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
    img: "https://www.w3schools.com/tags/img_girl.jpg",
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
    img: "https://www.w3schools.com/tags/img_girl.jpg",
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

export default function Page({ params }) {
  const info = data[params.profile]

  return <div className={dosis.className}>
    <div className="mb-5">
      
      <img src={info.img} className={`rounded-full
      h-32 
      w-32 
      object-cover 
      max-md:w-20 
      max-md:h-20 mx-auto 
      mt-10`} />
      <h1 className={`
      text-xl text-center
      mt-4
      text-gray-700
      font-semibold
      uppercase
      
      `}
      >{info.name}</h1>
      <h2 className={`
      text-center
      font-semibold
      text-gray-500
      `}>{info.slogan}</h2>
    </div>
    <div>
      {
        info.contact.map((item, index) => {
          return (
            <Contact key={index} data={item} />
          )
        })
      }
    </div>
  </div>
}