import React from 'react'

const AddBlog = () => {
    return (
        <div className='w-[90%] md:w-[50%] h-fit flex justify-center flex-col'>
            <h2 className='text-2xl font-bold mb-5'>Add Blog</h2>
            <div className='w-full gap-3 flex justify-center items-center flex-col'>
                <div className='w-full flex gap-2 flex-col'>
                    <label htmlFor="">Category</label>
                    <select className='border p-2 rounded-md border-gray-300'>
                        <option value="all">All</option>
                        <option value="happyHomes">Happy Homes</option>
                        <option value="interior">Interior</option>
                        <option value="wellness">Wellness</option>
                        <option value="beauty">Beauty</option>
                    </select>
                </div>
                <div className='w-full flex gap-2 flex-col'>
                    <label htmlFor="">Title</label>
                    <input className='border p-2 rounded-md border-gray-300' type="text" />
                </div>
                <div className='w-full flex gap-2 flex-col'>
                    <label htmlFor="">Description</label>
                    <textarea className='border p-2 rounded-md resize-none border-gray-300' rows="5" cols="10"></textarea>
                </div>
                <div className='w-full flex gap-2 flex-col'>
                    <label htmlFor="">Image</label>
                    <input className='border p-2 rounded-md border-gray-300' type="file" />
                </div>
                <div className='w-full flex flex-col'>
                    <button className='p-2 bg-[#6E42E5] text-white rounded-md cursor-pointer'>Add Blog</button>
                    
                </div>
            </div>
        </div>
    )
}

export default AddBlog