import React, { useState, useRef } from 'react'
import Question from "../assets/question.svg"
import Box from "../assets/box.svg"
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa6";

const GalleryWidget = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState([
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.jpg",
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/orange-flower-the-highest-quality.jpg",
        "https://thumbs.dreamstime.com/b/yellow-orange-starburst-flower-starburst-flower-yellow-orange-nature-jpg-yellow-orange-starburst-flower-starburst-flower-yellow-192959427.jpg",
        "https://t4.ftcdn.net/jpg/08/32/56/79/360_F_832567973_WMnqZql7Eu8s1VJtLxVgL0AqxsuW2aQK.jpg",
        "https://images.all-free-download.com/images/thumbjpg/beautiful_akelei_columbine_217624.jpg",
        "https://www.shutterstock.com/image-photo/my-beautiful-purple-lotus-600nw-2469625835.jpg",
    ]);

    const fileInputRef = useRef(null);


    const handleNext = () => {
        if (currentIndex < images.length - 3) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImages([...images, reader.result]);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="h-[50%] w-[100%] bg-[#363C43] rounded-[27px] shadow-lg shadow-black">
            {/* first half */}
            <div className="p-4 flex gap-4">
                <div>
                    <img src={Question} className="" alt="" />
                </div>
                <div className="w-full flex justify-between items-center">
                    <div>
                        <button
                            className="h-[90%] bg-[#171717] px-8 py-3 rounded-2xl text-white text-lg
                                        shadow-inner shadow-black font-medium"
                        >
                            Gallery
                        </button>
                    </div>
                    <div>
                        <div className='flex gap-4 px-4'>
                            <div className="shadow-[6px_7px_5px_1px_#1f1f1fab] rounded-full">
                                <button
                                    className="px-4 py-3 rounded-full bg-[#FFFFFF08] text-white font-semibold text-xs
                                flex justify-center items-center gap-1 shadow-inner shadow-[#a7a4a4b5]"
                                    onClick={() => fileInputRef.current.click()}
                                >
                                    <FaPlus className="w-[10px] mb-[1.4px]" /> ADD IMAGE
                                </button>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                />
                            </div>
                            <div className="flex gap-3 text-[#6F787C] px-2">
                                <div
                                    className="rounded-full
                                                shadow-[0px_0px_20px_6px_#6a8897]
                                                active:scale-[0.8] z-0"
                                >
                                    <button
                                        className="rounded-full bg-gradient-to-t from-[#303439] to-[#161718] p-3
                                                    shadow-[2px_8px_22px_5px_black]"
                                        onClick={handlePrev}
                                    >
                                        <FaArrowLeft />
                                    </button>
                                </div>
                                <div
                                    className="rounded-full
                                                shadow-[0px_0px_20px_6px_#6a8897]
                                                active:scale-[0.8] z-0"
                                >
                                    <button
                                        className="rounded-full bg-gradient-to-t from-[#303439] to-[#161718] p-3
                                                    shadow-[2px_8px_22px_5px_black]"
                                        onClick={handleNext}
                                    >
                                        <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* second half */}
            <div className="flex gap-4 p-2 ml-2.5">
                <div className="mt-5 w-[19px]">
                    <img src={Box} alt="" />
                </div>
                <div className="grid grid-cols-3 gap-6 justify-center items-center px-2">
                    {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
                        <div key={index} className="relative">
                            <img
                                src={image}
                                className="h-[150px] w-[170px] rounded-2xl transition-transform duration-500 
                                transform hover:scale-110 hover:-rotate-[2deg] hover:opacity-100 opacity-25 "
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GalleryWidget
