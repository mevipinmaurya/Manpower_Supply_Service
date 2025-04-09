import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AddServices from '../Components/AddServices'
import AddBlog from '../Components/AddBlog'
import Sidebar from '../Components/Sidebar'

const Admin = () => {
    return (
        <div className='w-full flex'>
            <div className='w-1/6 border-r h-screen border-gray-300'>
                <Sidebar />
            </div>
            <div className='w-5/6 flex justify-center'>
                <Routes>
                    <Route path='/addservice' element={<AddServices />} />
                    <Route path='/addblog' element={<AddBlog />} />
                </Routes>
            </div>
        </div>
    )
}

export default Admin