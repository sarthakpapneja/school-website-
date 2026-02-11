import React from 'react';
import temp1 from '../assets/temp_1.jpeg';
import temp2 from '../assets/temp_2.jpeg';
import temp3 from '../assets/temp_3.jpeg';
import temp4 from '../assets/temp_4.jpeg';
import temp5 from '../assets/temp_5.jpeg';
import temp6 from '../assets/temp_6.jpeg';

const ImagePreview = () => {
    const images = [
        { src: temp1, name: 'temp_1.jpeg' },
        { src: temp2, name: 'temp_2.jpeg' },
        { src: temp3, name: 'temp_3.jpeg' },
        { src: temp4, name: 'temp_4.jpeg' },
        { src: temp5, name: 'temp_5.jpeg' },
        { src: temp6, name: 'temp_6.jpeg' },
    ];

    return (
        <div className="fixed inset-0 z-[100000] overflow-y-auto bg-white p-10">
            <h1 className="text-3xl text-black mb-10 font-bold">Image Identification</h1>
            <div className="grid grid-cols-2 gap-10">
                {images.map((img) => (
                    <div key={img.name} className="border-2 border-red-500 p-4">
                        <h2 className="text-xl text-black mb-2 font-mono font-bold">{img.name}</h2>
                        <img src={img.src} alt={img.name} className="w-full h-auto object-contain max-h-[500px]" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImagePreview;
