import React from 'react'
import header_img from "../assets/hero1.png"


const HeroSection = () => {
    return (
        <div className='flex w-full mt-[36px]'>
            <div className='w-full h-[650px] bg-no-repeat bg-cover bg-center relative bg-blend-overlay bg-black/60' style={{ backgroundImage: `url(${header_img})` }}>
                <div className='w-full h-full flex items-center rounded-lg text-left float-left justify-center md:items-center md:text-center flex-col absolute'>
                    <div className='md:w-[80%] w-[95%]'>
                        <h2 className='text-5xl md:text-6xl lg:text-7xl pl-10 pr-10 text-gray-200 font-bold '>Reliable, Professional <span className='text-[#FF6900]'>Manpower</span> Services at your doorstep</h2>

                        <button className='btn w-[200px] bg-[#FF6900] ml-10 hover:bg-[#ff5e00] text-white border-none rounded-full md:mt-8 mt-5 p-3 cursor-pointer align-center text-md'>Get Started Today</button>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default HeroSection