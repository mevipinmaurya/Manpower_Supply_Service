import React from 'react'

const ContactUs = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-[600px] bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 ">Contact Us</h2>
        <form className="space-y-5">
          <div className="flex flex-col">
            <label htmlFor="fullName" className="mb-1 text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              className="p-3 border rounded-lg focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="p-3 border rounded-lg focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-1 text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="number"
              id="phone"
              placeholder="Enter your phone number"
              className="p-3 border rounded-lg focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              className="p-3 border rounded-lg resize-none focus:outline-none focus:ring-0"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-[#6E42E5] text-white py-3 rounded-lg text-lg font-semibold transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
