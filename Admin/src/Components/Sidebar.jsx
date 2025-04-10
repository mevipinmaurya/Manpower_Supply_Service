import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PiArticleNyTimesFill } from "react-icons/pi";
import { GrServices } from "react-icons/gr";


const Sidebar = () => {
    const location = useLocation();
    return (
        <div className='w-full flex flex-col justify-center gap-5'>

            <div className='hidden md:block'>
                <Link to={'/'} className={`mt-5 text-xl p-3 hover:bg-gray-100 border-b  flex items-center gap-2 ${location.pathname === '/' ? 'bg-gray-100 text-[#6E42E5]' : 'text-gray-600'}`}>Add Services <GrServices className='text-[#6E42E5]' /> </Link>
                <Link to={'/addblog'} className={`mt-5 text-xl p-3 hover:bg-gray-100 border-b  flex items-center gap-2 ${location.pathname === '/addblog' ? 'bg-gray-100 text-[#6E42E5]' : 'text-gray-600'}`}>Add Blogs <PiArticleNyTimesFill className='text-[#6E42E5]' /></Link>
            </div>

            <div className='block md:hidden'>
                <Link to={'/'} className={`mt-5 text-xl p-3 justify-center hover:bg-gray-100 border-b  flex items-center gap-2 ${location.pathname === '/' ? 'bg-gray-100 text-[#6E42E5]' : 'text-gray-600'}`}><GrServices className='text-[#6E42E5] text-2xl' /> </Link>
                <Link to={'/addblog'} className={`mt-5 text-xl p-3 justify-center hover:bg-gray-100 border-b  flex items-center gap-2 ${location.pathname === '/addblog' ? 'bg-gray-100 text-[#6E42E5]' : 'text-gray-600'}`}><PiArticleNyTimesFill className='text-[#6E42E5] text-2xl' /></Link>
            </div>
        </div>
    )
}

export default Sidebar