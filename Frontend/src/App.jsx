import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs.jsx'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop.jsx'
import { Toaster } from "react-hot-toast"
import Blog from './pages/Blog.jsx'
import BlogPreview from './components/BlogPreview.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/blog' element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPreview />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App