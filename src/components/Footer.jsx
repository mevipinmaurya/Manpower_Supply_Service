import React from "react";
import { FaFacebook, FaLinkedin, FaInstagramSquare, FaPhoneAlt } from "react-icons/fa";
import { FaSquareTwitter, FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="w-full bg-black">
      <div className="w-full text-white p-16">
        {/* Responsive Container */}
        <div className="w-full mt-14 max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap justify-between gap-5">

          {/* Company Info */}
          <div className="w-full md:w-1/4 space-y-3">
            <h1 className="text-2xl font-bold text-white">ManPower</h1>
            <p className="text-gray-300 text-lg leading-6">
              Professional security and housekeeping services for businesses and homes. Available 24/7 with trained and certified staff.
            </p>
            <div className="flex gap-3">
              <FaFacebook className="text-[#2563EB] text-2xl cursor-pointer hover:scale-110 transition" />
              <FaLinkedin className="text-[#2563EB] text-2xl cursor-pointer hover:scale-110 transition" />
              <FaSquareTwitter className="text-[#2563EB] text-2xl cursor-pointer hover:scale-110 transition" />
              <FaInstagramSquare className="text-[#2563EB] text-2xl cursor-pointer hover:scale-110 transition" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/5 space-y-2">
            <h1 className="text-2xl font-bold text-white">Quick Links</h1>
            <p className="text-gray-300 text-lg hover:text-white cursor-pointer">About Us</p>
            <p className="text-gray-300 text-lg hover:text-white cursor-pointer">Our Services</p>
            <p className="text-gray-300 text-lg hover:text-white cursor-pointer">Pricing</p>
            <p className="text-gray-300 text-lg hover:text-white cursor-pointer">FAQs</p>
            <p className="text-gray-300 text-lg hover:text-white cursor-pointer">Contact Us</p>
          </div>

          {/* Our Services */}
          <div className="w-full md:w-1/5 space-y-2">
            <h1 className="text-2xl font-bold text-white">Our Services</h1>
            <p className="text-gray-300 text-lg hover:text-white cursor-pointer">Security Guards</p>
            <p className="text-gray-300 text-lg hover:text-white cursor-pointer">House Keeping</p>
            <p className="text-gray-300 text-lg hover:text-white cursor-pointer">Event Security</p>
            <p className="text-gray-300 text-lg hover:text-white cursor-pointer">Corporate Security</p>
            <p className="text-gray-300 text-lg hover:text-white cursor-pointer">Residential Cleaning</p>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/4 space-y-3">
            <h1 className="text-2xl font-bold text-white">Contact Us</h1>
            <p className="text-gray-300 text-lg flex items-center gap-3">
              <FaLocationDot className="text-[#2563EB]" /> 123 Business Street, Suite 100, New York, NY 10001
            </p>
            <p className="text-gray-300 text-lg flex items-center gap-3">
              <FaPhoneAlt className="text-[#2563EB]" /> +1 (234) 567-890
            </p>
            <p className="text-gray-300 text-lg flex items-center gap-3">
              <IoMail className="text-[#2563EB]" /> info@manpower.com
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-400 mt-14 border-t border-gray-700 pt-5">
          © {new Date().getFullYear()} ManPower. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
