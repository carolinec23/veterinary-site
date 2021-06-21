import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Quote from './components/Quote';
import Slider from './components/Slider';
import { PhotoSliderData } from './data/PhotoSliderData';
import TwoColumns from './components/TwoColumns';
import Benefits from './components/Benefits';
import { BenefitsData } from './data/BenefitsData';
import Staff from './components/Staff';
import { StaffData } from './data/StaffData';
import Stats from './components/Stats';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Quote text={"All Paws Veterinary has an amazing approach to both the pet and their owner."} author={"Lexi the Boxer Dog"} />
      <Slider slides={PhotoSliderData} />
      <TwoColumns />
      <Benefits items={BenefitsData} />
      <Staff items={StaffData}/>
      <Stats />
      <Footer />
    </div>
  )
}

export default App
