import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Faq from './pages/Faq'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App