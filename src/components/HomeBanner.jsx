import React from 'react'

const HomeBanner = () => {
    return (
        <div className='w-full flex justify-center mt-20 items-center'>
            <div className='w-[91%] gap-4 rounded-2xl p-14 flex flex-col bg-[#2563EB] justify-center items-center'>
                <h1 className='text-white text-3xl text-center font-bold'>Need Custom ManPower Solutions?</h1>
                <p className='text-gray-100 text-md text-center'>We offer tailored services to meet your specific requirements</p>
                <button className='p-4 cursor-pointer bg-white font-semibold w-[200px] text-[#2563EB] rounded-4xl'>Request a Quote</button>
            </div>
        </div>
    )
}

export default HomeBanner