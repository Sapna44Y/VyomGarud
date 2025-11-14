import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Capabilities from '../components/Capabilities'
import Highlights from '../components/Highlights'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Capabilities />
      <Highlights />
      <Contact />
      <Footer/>
    </>
  )
}

export default Home