import React, { useState } from 'react'
import Question from "../assets/question.svg"
import Box from "../assets/box.svg"


const TabWidget = () => {

    const [isActive, setIsActive] = useState("aboutme");

    const clicked = (e, active) => {
        setIsActive(active);
    }

    return (
        <div className="h-[50%] w-[100%] bg-[#363c43] rounded-[27px] shadow-lg shadow-black">
            <div className="p-4 flex gap-4">
                <div>
                    <img src={Question} className="" alt="" />
                </div>
                <div className="h-[56px] bg-black rounded-2xl flex justify-evenly items-center font-semibold text-[12px]">
                    <div
                        onClick={(e) => clicked(e, "aboutme")}
                        className={`rounded-xl px-[55px] h-[40px]  ${isActive === "aboutme" ? 'bg-[#28292F] text-white shadow-[5px_23px_38px_4px_black]' : 'text-[#b4aeae]'} 
                        flex justify-center items-center ml-2 hover:cursor-pointer 
                        ${isActive !== "aboutme" && 'hover:rounded-xl hover:bg-[#28292F] hover:duration-500 hover:ease-in-out'}`}>
                        About Me
                    </div>
                    <div
                        onClick={(e) => clicked(e, "exp")}
                        className={`rounded-xl px-[54px] h-[40px] ${isActive === "exp" ? 'bg-[#28292F] text-white shadow-[5px_23px_38px_4px_black]' : 'text-[#b4aeae]'} 
                        flex justify-center items-center ml-2 hover:cursor-pointer   
                        ${isActive !== "exp" && 'hover:rounded-xl hover:bg-[#28292F] hover:duration-500 hover:ease-in-out'}`}>
                        Experiences
                    </div>
                    <div
                        onClick={(e) => clicked(e, "rec")}
                        className={`rounded-xl px-[48px] h-[40px] ${isActive === "rec" ? 'bg-[#28292F] text-white shadow-[5px_23px_38px_4px_black]' : 'text-[#b4aeae]'}
                        flex justify-center items-center ml-2 mr-2 hover:cursor-pointer
                        ${isActive !== "rec" && 'hover:rounded-xl hover:bg-[#28292F] hover:duration-500 hover:ease-in-out'}`}>
                        Recommended
                    </div>
                </div>
            </div>
       
            <div className="flex gap-4 p-2 ml-2.5">
                <div className="mt-5">
                    <img src={Box} alt="" />
                </div>
                <div className="">
                    <p className="text-[#969696]">
                        I'm Aysha Sumina M A, a Full Stack developer skilled in MEARN stack.
                        I've built projects like E-Commerce Website,Weather App and Snake Game for showcasing my expertise in full-stack development.
                        Currently I'm waiting for good Oppurtunity for Start my Career.
                    </p>
                </div>
                <div className="">
                    <div className="h-[48px] w-[6px] bg-gradient-to-t from-[#4A4E54] to-[#888989] rounded-full shadow-[2px_2px_3px_1px_#23222299] "></div>
                </div>
            </div>
        </div>
    )
}

export default TabWidget
