import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo1.svg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='w-full p-3 bg-[#176ABC] fixed top-0 left-0 z-20'>
      <div className='flex justify-between items-center max-w-6xl mx-auto'>
        {/* Logo */}
        <div className='text-xl font-bold'>
          <Link to={"/"}><img src={logo} alt="" /></Link>
        </div>

        {/* Desktop Menu (Hidden on Small Screens) */}
        <ul className='hidden md:flex text-md md:text-lg gap-6 items-center'>
          <Link to={"/about"} className='cursor-pointer text-white'>About Us</Link>
          <li className='cursor-pointer text-white'>Services</li>
          <li className='cursor-pointer text-white'>Pricing</li>
          <li className='cursor-pointer text-white'>FAQs</li>
          <li className='cursor-pointer text-white'>Contact Us</li>
          <li className='cursor-pointer text-white'>Blog</li>
          <Link to={"/login"}>
            <button className='rounded-4xl w-[80px] p-2 font-semibold bg-white cursor-pointer text-[#176ABC]'>Login</button>
          </Link>
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
          <Link to={"/about"} className='cursor-pointer text-white'>About Us</Link>
          <li className='cursor-pointer text-white'>Services</li>
          <li className='cursor-pointer text-white'>Pricing</li>
          <li className='cursor-pointer text-white'>FAQs</li>
          <li className='cursor-pointer text-white'>Contact Us</li>
          <li className='cursor-pointer text-white'>Blog</li>
          <Link to={"/login"}>
            <button className='rounded-4xl w-[80px] p-2 font-semibold bg-white cursor-pointer text-[#176ABC]'>Login</button>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
