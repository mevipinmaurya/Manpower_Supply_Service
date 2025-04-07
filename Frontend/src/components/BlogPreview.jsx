import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { BlogPosts } from '../utils/BlogPosts';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";


const BlogPreview = () => {
  const { id } = useParams();
  const blog = BlogPosts.find((post) => post.id.toString() === id);

  if (!blog) {
    return <p className='text-center mt-10 text-red-500'>Blog not found.</p>;
  }

  return (
    <div className='max-w-5xl mx-auto mt-10 px-4 mb-10'>
      <div className='w-full gap-6'>
        <div className='w-full flex justify-center items-center mb-6'>
          <img
            src={blog.image}
            alt={blog.title}
            className='w-full md:w-[70%] lg:w-[60%] rounded shadow'
          />
        </div>
        <div className='w-full mb-10 flex flex-col gap-4'>
          <h2 className='text-3xl font-bold'>{blog.title}</h2>
          <p className='bg-amber-100 w-fit px-3 py-1 rounded'>{blog.tag}</p>
          <p className='text-md text-gray-700'>{blog.description}</p>
        </div>
      </div>

      <div className='w-full flex justify-center items-center'>
        {BlogPosts.find((post) => post.id === parseInt(id, 10) - 1) && (
          <Link
            to={`/blog/${parseInt(id, 10) - 1}`}
            className="mr-6 flex justify-center items-center text-lg gap-2 bg-[#2161F5] text-white p-2 rounded-lg"
          >
            <IoIosArrowDropleftCircle /> Prev
          </Link>
        )}

        {BlogPosts.find((post) => post.id === parseInt(id, 10) + 1) && (
          <Link
            to={`/blog/${parseInt(id, 10) + 1}`}
            className="flex justify-center items-center text-lg gap-2 bg-[#2161F5] text-white p-2 rounded-lg"
          >
            Next <IoIosArrowDroprightCircle />
          </Link>
        )}
      </div>
    </div>
  );
};

export default BlogPreview;
