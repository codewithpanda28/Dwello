import React from 'react'

import Hero from './components/Hero'
import HelpandFooter from './components/help-and-footer'
import Testimonials from './components/testimonials'
import HeroSection from './components/hero-section'
import WhyChooseUs from './components/why-choose-us'
import PopularResidences from './components/popular-residences'
import Navbar from './components/Navbar'

const Home = () => {
  return (
        <main className="max-w-[1220px] mx-auto min-h-screen bg-white">
          <Navbar/>
          <Hero/>
          <HeroSection />
          <WhyChooseUs />
          <PopularResidences />
          <Testimonials />
          <HelpandFooter />
        </main>
      )
    }

export default Home
