import React from 'react'
import { Link } from 'react-router-dom'
import { PiArticleNyTimesFill } from "react-icons/pi";
import { GrServices } from "react-icons/gr";


const Sidebar = () => {
    return (
        <div className='w-full flex flex-col justify-center gap-5'>

            <div className='hidden md:block'>
                <Link to={'/addservice'} className='mt-5 text-xl p-3 hover:bg-gray-100 border-b text-gray-600 flex items-center gap-2'>Add Services <GrServices className='text-[#6E42E5]' /> </Link>
                <Link to={'/addblog'} className='text-xl p-3 hover:bg-gray-100 border-b text-gray-600 flex items-center gap-2'>Add Blogs <PiArticleNyTimesFill className='text-[#6E42E5]' /></Link>
            </div>

            <div className='block md:hidden'>
                <Link to={'/addservice'} className='mt-5 text-xl p-3 hover:bg-gray-100 border-b text-gray-600 flex items-center gap-2'><GrServices className='text-[#6E42E5]' /> </Link>
                <Link to={'/addblog'} className='text-xl p-3 hover:bg-gray-100 border-b text-gray-600 flex items-center gap-2'><PiArticleNyTimesFill className='text-[#6E42E5]' /></Link>
            </div>
        </div>
    )
}

export default Sidebar