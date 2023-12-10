'use client'
import { Dosis } from "next/font/google";
import Avatar from "./editComponent/avatar";
import Name from "./editComponent/name";
import Slogan from "./editComponent/slogan";
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
        flex flex-col`}>
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
