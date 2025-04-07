import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo1.svg";
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className='w-full p-2 bg-white text-black'>
      <div className='flex justify-between items-center max-w-6xl mx-auto'>
        {/* Logo */}
        <div className='text-xl font-bold'>
          <Link to={'/'} className='font-bold text-3xl text-[#2161F5] font-sans'>ManPower</Link>
        </div>

        {/* Desktop Menu (Hidden on Small Screens) */}
        <ul className='hidden md:flex text-md md:text-lg gap-6 items-center'>
          <Link to={'/about'} className={`cursor-pointer ${location.pathname === '/about' ? 'bg-[#2161F5] text-white font-bold p-2 rounded' : 'text-black'}`}>About Us</Link>
          <Link to={'/services'} className={`cursor-pointer ${location.pathname === '/services' ? 'bg-[#2161F5] text-white font-bold p-2 rounded' : 'text-black'}`}>Services</Link>
          <Link to={'/pricing'} className={`cursor-pointer ${location.pathname === '/pricing' ? 'bg-[#2161F5] text-white font-bold p-2 rounded' : 'text-black'}`}>Pricing</Link>
          {
            location.pathname === '/' ?
              <Link to={'/about'} className={`cursor-pointer ${location.pathname === '/about' ? 'bg-[#2161F5] text-white font-bold p-2 rounded' : 'text-black'}`}> <ScrollLink to="faq" smooth={true} duration={500}>FAQs</ScrollLink></Link>
              : <></>
          }
          <Link to={'/contact'} className={`cursor-pointer ${location.pathname === '/contact' ? 'bg-[#2161F5] text-white font-bold p-2 rounded' : 'text-black'}`}>Contact Us</Link>
          <Link to={'/blog'} className={`cursor-pointer ${location.pathname === '/blog' ? 'bg-[#2161F5] text-white font-bold p-2 rounded' : 'text-black'}`}>Blogs</Link>
          <Link to={'/login'}>
            <button className={`rounded-4xl w-[100px] p-2 cursor-pointer font-bold ${location.pathname === '/login' ? 'bg-[#2161F5] text-white' : 'bg-gray-300 text-black'}`}>Login</button>
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
          <Link to={'/about'} className={`cursor-pointer ${location.pathname === '/about' ? 'bg-[#2161F5] text-white font-bold p-2 rounded' : 'text-black'}`}>About Us</Link>
          <Link to={'/services'} className={`cursor-pointer ${location.pathname === '/services' ? 'bg-[#2161F5] text-white font-bold p-2 rounded' : 'text-black'}`}>Services</Link>
          <Link to={'/pricing'} className={`cursor-pointer ${location.pathname === '/pricing' ? 'bg-[#2161F5] text-white font-bold p-2 rounded' : 'text-black'}`}>Pricing</Link>
          {
            location.pathname === '/'?
            <Link to={'/about'} className={`cursor-pointer ${location.pathname === '/about' ? 'bg-[#2161F5] text-white font-bold p-2 rounded' : 'text-black'}`}> <ScrollLink to="faq" smooth={true} duration={500}>FAQs</ScrollLink></Link>
            :<></>
          }
          <Link to={'/contact'} className={`cursor-pointer ${location.pathname === '/contact' ? 'bg-[#2161F5] text-white font-bold p-2 rounded' : 'text-black'}`}>Contact Us</Link>
          <Link to={'/blog'} className={`cursor-pointer ${location.pathname === '/blog' ? 'bg-[#2161F5] text-white font-bold p-2 rounded' : 'text-black'}`}>Blogs</Link>
          <Link to={'/login'}>
            <button className={`rounded-4xl w-[100px] p-2 cursor-pointer font-bold ${location.pathname === '/login' ? 'bg-[#2161F5] text-white' : 'bg-gray-300 text-black'}`}>Login</button>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;