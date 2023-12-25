import React, { useEffect, useState } from 'react';
import { imgBaseUrl, httpFile } from '@/app/config/AxiosCFG';
import { useProfile } from '@/app/store';
export default function Avatar() {
    const editImg = useProfile((state) => state.editImg);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);

    };
    useEffect(() => {
        const uploadFile = (file) => {
            if (file) {
                const formData = new FormData();
                formData.append('image', file);
                httpFile.post('/', formData)
                    .then((response) => {
                        console.log('File uploaded successfully:', response.data);
                        editImg(response.data.url);

                    })
                    .catch((error) => {
                        console.error('Error uploading file:', error);
                    });
            }
        };
        uploadFile(selectedFile);
    }, [selectedFile]);

    return (
        <div className='h-[90%] w-full p-4 pl-8'>
            <h1 className='text-4xl font-semibold'>Upload ảnh</h1>
            <input
                type='file'
                className='hidden'
                id='file'
                onChange={handleFileChange}
            />
            <label
                htmlFor="file"
                className='mt-16 h-12 font-semibold w-64 h-64 rounded-xl bg-[#cfefff] flex items-center justify-center text-2xl'
            >
                Choose a file
            </label>
        </div>
    );
}