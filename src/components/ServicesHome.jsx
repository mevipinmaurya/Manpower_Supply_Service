import React from 'react';
import electrician from "../assets/electrician.jpg";
import cleaner from "../assets/cleaner.jpg";
import mechanic from "../assets/mechanic.png";
import plumber from "../assets/plumber.jpg";

const services = [
    { id: 1, img: electrician, title: "Electrician", description: "Professional electrical services for your home and business." },
    { id: 2, img: cleaner, title: "Cleaner", description: "Top-notch cleaning services for a sparkling clean home." },
    { id: 3, img: mechanic, title: "Mechanic", description: "Expert car repair and maintenance services." },
    { id: 4, img: plumber, title: "Plumber", description: "Expert Plumber repair and tap services." },
];

const ServicesHome = () => {
    return (
        <div className='flex w-full justify-center items-center flex-col mt-16 px-4'>
            <div className='w-full max-w-2xl mb-10 text-center'>
                <h1 className='text-4xl font-bold text-[#2563EB]'>Our <span className='text-[#2563EB]'>Services</span></h1>
                <p className='text-lg text-gray-600 mt-4'>Empowering Your Workforce, Elevating Your Business</p>
            </div>
            <div className='w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
                {services.map(service => (
                    <div key={service.id} className='flex flex-col items-center bg-gray-50 shadow rounded-lg p-6'>
                        <img src={service.img} alt={service.title} className='w-[100px] h-[100px] rounded-full' />
                        <h2 className='mt-4 text-xl font-semibold'>{service.title}</h2>
                        <p className='text-center text-gray-600 mt-2'>{service.description}</p>
                        <button className='mt-4 px-4 py-2 bg-[#2563EB] text-white rounded-lg hover:bg-[#2563EB] cursor-pointer'>Learn More</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesHome;