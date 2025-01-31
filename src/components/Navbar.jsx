import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo1.svg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='w-full p-5'>
      <div className='flex justify-between items-center max-w-6xl mx-auto'>
        {/* Logo */}
        <div className='text-xl font-bold'>
          <Link><img src={logo} alt="" /></Link>
        </div>

        {/* Desktop Menu (Hidden on Small Screens) */}
        <ul className='hidden md:flex text-md md:text-lg gap-6'>
          <li className='cursor-pointer hover:text-orange-400'>About Us</li>
          <li className='cursor-pointer hover:text-orange-400'>Services</li>
          <li className='cursor-pointer hover:text-orange-400'>Pricing</li>
          <li className='cursor-pointer hover:text-orange-400'>FAQs</li>
          <li className='cursor-pointer hover:text-orange-400'>Contact Us</li>
          <li className='cursor-pointer hover:text-orange-400'>Login</li>
        </ul>

        {/* Mobile Menu Toggle (Visible on Small Screens) */}
        <div className='md:hidden flex ml-auto'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className='md:hidden flex flex-col items-center gap-4 mt-4 p-4 rounded-lg shadow-lg'>
          <li className='cursor-pointer'>About Us</li>
          <li className='cursor-pointer'>Services</li>
          <li className='cursor-pointer'>Pricing</li>
          <li className='cursor-pointer'>FAQs</li>
          <li className='cursor-pointer'>Contact Us</li>
          <li className='cursor-pointer'>Login</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
