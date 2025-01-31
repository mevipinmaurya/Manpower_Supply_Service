import React from 'react'
import HeroSection from '../components/HeroSection'
import ServicesHome from '../components/ServicesHome'
import Features from '../components/Features'
import HomeBanner from '../components/HomeBanner'
import WhyChooseUs from '../components/WhyChooseUs'
const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesHome />
      <HomeBanner />
      <Features />
      <WhyChooseUs />
    </div>
  )
}

export default Home