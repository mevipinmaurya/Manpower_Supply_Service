import React, { useState } from 'react';
import '../components/Blog.css';
import { GiThornedArrow } from "react-icons/gi";
import { MdStars } from "react-icons/md";
import { GiVacuumCleaner } from "react-icons/gi";
import { GiMechanicGarage } from "react-icons/gi";
import { MdOutlinePlumbing } from "react-icons/md";
import { MdOutlineElectricalServices } from "react-icons/md";
import { RiPsychotherapyFill } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";



import ServicePosts from '../utils/ServicesPosts';


const Services = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [serviceId, setServiceId] = useState(0);

  // 2. Function to handle opening the modal
  const openModal = (id) => {
    setIsModalOpen(true);
    setServiceId(id);
  };

  // 3. Function to handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };


  const [selectedService, setSelectedSerice] = useState('Cleaner')
  const serviceCat = ['Cleaner', 'Electrician', 'Plumber', 'Mechanic', 'Therapist'];
  const categoryIcons = {
    Cleaner: <GiVacuumCleaner className="text-3xl text-black" />,
    Mechanic: <GiMechanicGarage className="text-3xl text-black" />,
    Plumber: <MdOutlinePlumbing className="text-3xl text-black" />,
    Electrician: <MdOutlineElectricalServices className="text-3xl text-black" />,
    Therapist: <RiPsychotherapyFill className="text-3xl text-black" />,
  };

  const filteredServices =
    selectedService === 'Cleaner'
      ? ServicePosts
      : ServicePosts.filter((post) => post.category === selectedService);


  return (
    <div className='w-full h-auto lg:h-screen overflow-hidden px-4'>
      <div className='max-w-[1200px] mx-auto flex flex-col gap-4 mt-5 h-full'>

        <div className='w-full flex flex-col lg:flex-row gap-5 h-full'>

          {/* Left Column - Insights */}
          <div className='h-fit p-3 w-full lg:w-[20%] order-1 rounded-md'>
            <div>
              <h1 className='text-xl font-semibold mb-4 flex items-center gap-2 text-gray-500'>Select a service <GiThornedArrow /></h1>

              <div>
                <ul className='flex flex-row lg:flex-col flex-wrap gap-4 text-gray-500'>
                  {serviceCat.map((category) => (
                    <li
                      key={category}
                      className={`w-fit flex items-center gap-2 cursor-pointer hover:text-gray-900 font-medium ${selectedService === category ? 'text-black font-semibold' : ''
                        }`}
                      onClick={() => setSelectedSerice(category)}
                    >
                      {categoryIcons[category]}{category}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Middle Column - Blog List (scrollable on lg+) */}
          <div
            className='w-full p-3 lg:w-[50%] order-2 pr-2 lg:overflow-y-auto scrollbar-hidden'
            style={{ height: 'auto', maxHeight: 'none' }}
          >
            <div className='lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto scrollbar-hidden'>
              <h2 className='font-semibold flex items-center  text-lg md:text-xl mb-3 sticky top-0 bg-white z-10 text-amber-800'>
                Service <IoIosArrowRoundForward /> {selectedService === 'Cleaner' ? 'Cleaner' : `${selectedService}`}
              </h2>

              {filteredServices.length === 0 ? (
                <p className='text-gray-500'>No posts found for "{selectedService}".</p>
              ) : (
                filteredServices.map((items, index) => (
                  <div
                    key={index}
                    className='w-full mt-2 md:mt-3 flex flex-col md:flex-row items-center justify-center gap-5 py-5'
                  >
                    <div className='w-full flex flex-col md:flex-row'>

                      <div className='md:w-3/4 p-3 flex flex-col'>
                        <h2 className='font-semibold text-md sm:text-lg md:text-xl'>{items.title}</h2>
                        <p className='flex items-center'><MdStars className='text-yellow-600 text-lg' />&nbsp;({items.review} Reviews)</p>
                        <p>₹ {items.price}</p>
                        {/* <p>{items.detail}</p> */}
                        <div className='w-full gap-4 flex items-center justify-between'>
                          <div>
                            <p
                              className='text-[#2161F5] w-fit border-b-[1px] text-bold text-md cursor-pointer mt-2'
                              onClick={() => openModal(items.id)}
                            >
                              View Details
                            </p>
                          </div>

                          <div className='flex items-center gap-2'>
                            <p className='text-3xl font-bold text-[#2161F5] cursor-pointer'><IoIosRemoveCircleOutline /></p>
                            <p className='text-3xl font-bold text-[#2161F5] cursor-pointer'><IoIosAddCircleOutline /></p>
                          </div>

                        </div>
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

          {isModalOpen && (
            <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
              <div className="bg-gray-100 w-[95%] md:1/2 lg:w-1/3 p-5 rounded-lg shadow-lg relative">
                <button
                  onClick={closeModal}
                  className="absolute top-2 cursor-pointer right-2 text-gray-600 hover:text-black text-3xl"
                >
                  &times;
                </button>
                {
                  filteredServices.filter(post => post.id === serviceId).map((items, index) => (
                    <div className='w-full flex justify-center  flex-col'>
                      <img src={items.image} alt="" className='w-[50%] h-[50%] flex justify-center m-auto' />
                      <h1 className='font-semibold text-xl mt-4'>{items.title}</h1>
                      <p className='flex items-center mt-2'><MdStars className='text-yellow-600 text-lg' />&nbsp;({items.review} Reviews)</p>
                      <p className='mt-2'><span className='text-yellow-700'>Price</span> : ₹ {items.price}</p>
                      <p className='mt-2 text-sm'>{items.detail}</p>

                      {/* <button className='text-left bg-[#2161F5] p-2 mt-3 cursor-pointer rounded-md text-white w-fit'>Book Service</button> */}
                    </div>
                  ))
                }
              </div>
            </div>
          )}

          {/* Right Column - Categories */}
          <div className='w-full lg:w-[30%] order-3'>
            <div>

              <p>I am right side</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
