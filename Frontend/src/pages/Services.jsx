import React, { useState } from 'react';
import { BlogPosts } from '../components/BlogPosts';
import { Link } from 'react-router-dom';
import '../components/Blog.css';
import { GiThornedArrow } from "react-icons/gi";
import { MdStars } from "react-icons/md";
import { GiVacuumCleaner } from "react-icons/gi";
import { GiMechanicGarage } from "react-icons/gi";
import { MdOutlinePlumbing } from "react-icons/md";
import { MdOutlineElectricalServices } from "react-icons/md";



const Services = () => {
  const [selectedTag, setSelectedTag] = useState('All');

  const categories = ['All', 'Happy Homes', 'Interior', 'Wellness', 'Beauty'];

  const filteredPosts =
    selectedTag === 'All'
      ? BlogPosts
      : BlogPosts.filter((post) => post.tag === selectedTag);

  return (
    <div className='w-full h-auto lg:h-screen overflow-hidden px-4'>
      <div className='max-w-[1200px] mx-auto flex flex-col gap-4 mt-5 h-full'>

        <div className='w-full flex flex-col lg:flex-row gap-5 h-full'>

          {/* Left Column - Insights */}
          <div className='border h-fit border-gray-300 p-3 w-full lg:w-[20%] order-1 rounded-md'>
            <div>
              <h1 className='text-xl font-semibold mb-4 flex items-center gap-2 text-gray-500'>Select a service <GiThornedArrow /></h1>
              <div className='text-gray-500 space-y-2 w-full'>
                <div className='hover:text-black cursor-pointer flex gap-3 items-center text-lg'>
                  <GiVacuumCleaner className='text-3xl text-black font-bold' />
                  <p>Cleaner</p>
                </div>
                <div className='hover:text-black cursor-pointer flex gap-3 items-center text-lg'>
                  <MdOutlineElectricalServices className='text-3xl text-black font-bold' />
                  <p>Electrician</p>
                </div>
                <div className='hover:text-black cursor-pointer flex gap-3 items-center text-lg'>
                  <GiMechanicGarage className='text-3xl text-black font-bold' />
                  <p>Mechanic</p>
                </div>
                <div className='hover:text-black cursor-pointer flex gap-3 items-center text-lg'>
                  <MdOutlinePlumbing className='text-3xl text-black font-bold' />
                  <p>Plumber</p></div>
              </div>
            </div>
          </div>

          {/* Middle Column - Blog List (scrollable on lg+) */}
          <div
            className='w-full border border-gray-300 p-3 lg:w-[50%] order-2 pr-2 lg:overflow-y-auto scrollbar-hidden'
            style={{ height: 'auto', maxHeight: 'none' }}
          >
            <div className='lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto scrollbar-hidden'>
              <h2 className='font-semibold text-gray-950 text-3xl md:text-4xl mb-3 sticky top-0 bg-white z-10'>
                {selectedTag === 'All' ? 'Cleaner' : `${selectedTag}`}
              </h2>

              {filteredPosts.length === 0 ? (
                <p className='text-gray-500'>No posts found for "{selectedTag}".</p>
              ) : (
                filteredPosts.map((items, index) => (
                  <div
                    key={index}
                    className='w-full mt-2 md:mt-3 flex flex-col md:flex-row items-center justify-center gap-5 py-5'
                  >
                    <div className='w-full flex flex-col md:flex-row'>

                      <div className='md:w-3/4 p-3 flex flex-col'>
                        <h2 className='font-semibold text-md sm:text-lg md:text-xl'>{items.title}</h2>
                        <p className='flex items-center'><MdStars className='text-yellow-600 text-lg' />&nbsp;(1.4M Reviews)</p>
                        <p>₹ 400.00</p>
                        <p
                          className='text-[#2161F5] w-fit border-b-[1px] text-bold text-md cursor-pointer mt-2'
                        >
                          View Details
                        </p>
                      </div>

                      <div className='md:w-1/4 flex justify-center'>
                        <img
                          src={items.image}
                          alt='Blog'
                          className='w-full max-w-sm mt-4 rounded md:max-w-full h-auto'
                        />
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right Column - Categories */}
          <div className='w-full lg:w-[30%] order-3'>
            <div>
              <h1 className='text-xl font-semibold mb-4'>Categories</h1>
              <ul className='flex flex-row lg:flex-col flex-wrap gap-4 text-gray-500'>
                {categories.map((category) => (
                  <li
                    key={category}
                    className={`w-fit cursor-pointer hover:border-b-[1px] hover:text-gray-900 font-medium ${selectedTag === category ? 'text-black font-semibold border-b-[1px]' : ''
                      }`}
                    onClick={() => setSelectedTag(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
