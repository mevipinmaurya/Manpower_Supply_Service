import React from 'react';
import electrician from "../assets/electrician.jpg";
import cleaner from "../assets/cleaner.jpg";
import mechanic from "../assets/mechanic.png";
import plumber from "../assets/plumber.jpg";

const features = [
    { id: 1, img: electrician, title: "Skilled & Trained Workforce", description: "Access a pool of qualified professionals tailored to your industry needs." },
    { id: 2, img: cleaner, title: "Flexible Hiring Options", description: "Temporary, permanent, and contract-based staffing to suit business demands." },
    { id: 3, img: plumber, title: "Industry-Specific Expertise", description: "Manpower solutions for construction, IT, healthcare, manufacturing, and more." },
    { id: 4, img: mechanic, title: "24/7 Support & Assistance", description: "Dedicated support to ensure smooth workforce management." },
    { id: 5, img: electrician, title: "Cost-Effective Solutions", description: "Reduce hiring costs while maintaining workforce quality and efficiency." },
    { id: 6, img: mechanic, title: "Compliance & Documentation", description: "We handle all legal formalities, background checks, and contracts." },
];

const Features = () => {
    return (
        <div className='flex w-full justify-center items-center flex-col mt-20 px-4'>
            <div className='w-full max-w-2xl mb-10 text-center'>
                <h1 className='text-4xl font-bold text-[#2563EB]'>Features & Benefits</h1>
                <p className='text-lg text-gray-600 mt-4'>Empowering businesses with skilled, reliable, and flexible manpower solutions to drive efficiency, productivity, and success!</p>
            </div>
            <div className='w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                {features.map(feature => (
                    <div key={feature.id} className='flex flex-col items-center bg-white shadow rounded-2xl hover:scale-105 p-6'>
                        <div className='bg-white rounded-full p-1'>
                            <div className='bg-white rounded-full'>
                                <img src={feature.img} alt={feature.title} className='w-[100px] h-[100px] rounded-full p-1' />
                            </div>
                        </div>
                        <h2 className='mt-4 text-lg font-semibold'>{feature.title}</h2>
                        <p className='text-center text-gray-600 mt-2'>{feature.description}</p>
                        <button className='mt-4 px-4 py-2 text-[#2563EB] font-bold cursor-pointer'>Learn More</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;