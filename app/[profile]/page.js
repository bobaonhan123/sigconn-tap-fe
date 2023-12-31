import Contact from "../components/Contact";
import { Dosis } from "next/font/google";
import { serverAxios } from "../config/AxiosCFG";
const dosis=Dosis({ subsets: ['latin'] });


export async function getData(params) {
  // Fetch data from external API
  const res = await serverAxios.get(`/profile/list/${params.profile}`)
  return res.data;
}

export default async function Page({ params }) {
  let info = await getData(params);
  
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