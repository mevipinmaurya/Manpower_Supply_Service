import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { toast } from 'react-hot-toast';

const BlogLists = () => {
    const URL = 'http://localhost:3000';
    const [list, setList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [filter, setFilter] = useState('');

    const fetchAPI = async () => {
        try {
            const res = await axios.get(`${URL}/api/v1/admin/getblog`);
            if (res.data.success) {
                setList(res.data.message);
                setFilteredList(res.data.message);
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            toast.error("Failed to fetch blogs");
        }
    };

    const handleFilterChange = (value) => {
        setFilter(value);
        let sorted = [...list];
        switch (value) {
            case 'date':
                sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                break;
            case 'name':
                sorted.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'category':
                sorted.sort((a, b) => a.category.localeCompare(b.category));
                break;
            default:
                break;
        }
        setFilteredList(sorted);
    };

    const deleteBlog  = async (id)=>{
        const res = await axios.post(`${URL}/api/v1/admin/delblog`, {id : id})
        await fetchAPI()
        if(res.data.success){
            toast.success(res.data.message)
        }else{
            toast.error(res.data.message)
        }
    }

    useEffect(() => {
        fetchAPI();
    }, []);

    return (
        <div className="w-full min-h-screen bg-gray-50 px-4 py-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center bg-white shadow rounded-lg p-4">
                    <h3 className="text-2xl font-semibold mb-2 sm:mb-0">List of Blogs</h3>
                    <select
                        value={filter}
                        onChange={(e) => handleFilterChange(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md text-sm cursor-pointer outline-none"
                    >
                        <option value="">Filter</option>
                        <option value="date">SORT BY DATE</option>
                        <option value="name">SORT BY NAME</option>
                        <option value="category">SORT BY CATEGORY</option>
                    </select>
                </div>

                <div className="mt-6 space-y-4">
                    {filteredList.length === 0 ? (
                        <p className="text-center text-gray-500">No blogs available.</p>
                    ) : (
                        filteredList.map((blog, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-sm hover:shadow-md transition-all duration-300 rounded-lg p-4 flex flex-col lg:flex-row justify-between gap-4"
                            >
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-2/3">
                                    <p className="font-medium">{index + 1}.</p>
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-28 h-20 object-cover rounded-md"
                                    />
                                    <div className="flex flex-col gap-1">
                                        <p className="text-lg font-semibold">{blog.title}</p>
                                        <p className="text-sm text-gray-600">Date: {blog.createdAt.substring(0, 10)}</p>
                                        <p className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded w-fit">{blog.category}</p>
                                    </div>
                                </div>

                                <div className="flex justify-start lg:justify-end items-center gap-4 w-full lg:w-1/3">
                                    <button title="Edit">
                                        <FaEdit className="text-xl cursor-pointer hover:scale-115 text-indigo-600 hover:text-indigo-800 transition" />
                                    </button>
                                    <button title="Delete">
                                        <MdDelete onClick={()=> deleteBlog(blog._id)} className="text-xl cursor-pointer hover:scale-115 text-red-600 hover:text-red-800 transition" />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogLists;
