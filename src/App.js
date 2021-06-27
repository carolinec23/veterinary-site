import React, { useState } from 'react';
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
import DropdownMenu from './components/DropdownMenu';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Navbar toggle={toggle} />
      <DropdownMenu isOpen={isOpen} toggle={toggle} />
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
