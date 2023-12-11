'use client'
import { Dosis } from "next/font/google";
import Avatar from "./editComponent/Avatar";
import Name from "./editComponent/Name";
import Slogan from "./editComponent/Slogan";
import { useProfile } from "../store";
import ContactEdit from "./editComponent/ContactEdit";
import { useState, useEffect } from "react";
const dosis = Dosis({ subsets: ["latin"] });
export default function EditPanel({ setKeyMapping,keyMapping }) {
    const [mapping, setMapping] = useState({
        img: <Avatar />,
        name: <Name />,
        slogan: <Slogan />,
    });
    const contact = useProfile((state) => state.contact);
    useEffect(() => {
        const newMapping = { ...mapping };
        contact.forEach((item, index) => {
            console.log(index);
            newMapping[index.toString()] = <ContactEdit key={index} indexArr={index} />;
        });

        setMapping(newMapping);
    }, [contact]);
    return (
        <div className={dosis.className+` h-full
        w-full
        flex flex-col
        max-md:fixed
        max-md:left-0
        max-md:bg-[#ffffff]
        max-md:border-2
        max-md:rounded-md
        max-md:w-[95vw]
        max-md:left-[2%]
        max-md:h-[80%]
        `}>
            <div className='
            h-10%
            text-right
            text-2xl
            pr-6
            pt-2
            cursor-pointer
            font-bold
            '
                onClick={() => setKeyMapping((keyMapping) => '-1')}
            >x</div>
            {mapping[keyMapping]}
        </div>
    )
}
