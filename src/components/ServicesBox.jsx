import React from 'react'
import electrician from "../assets/electrician.jpg";
import cleaner from "../assets/cleaner.jpg";
import mechanic from "../assets/mechanic.png";
import plumber from "../assets/plumber.jpg";

const ServicesBox = () => {
    return (
        <div className='w-[28%] gap-10'>
            <div className='flex justify-center items-center'>
                <img src={electrician} alt="Electrician" className='w-[100px] h-[100px] rounded-full' />
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eveniet consectetur nemo vitae dicta sequi molestias eligendi quod nesciunt debitis.</p>
                <button className='btn '>Learn More</button>
            </div>
        </div>
    )
}

export default ServicesBox