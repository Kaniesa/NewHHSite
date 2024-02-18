import Image from "next/image";
import './App.css';
import React, { useEffect } from 'react';
import Header from '../components/Header';
import AOS from 'aos'
import 'aos/dist/aos.css';
import Hero from '../components/Hero'
import About from '../components/About'
import Pricing from '../components/Pricing'
import Subject from '../components/Subject'
import Events from '../components/Events'
import Donate from '../components/Donate'
import Sponsors from '../components/Sponsors'
import News from '../components/News'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'

export default function Home() {
  const data = {
    studentCount: 1931,
    tutorCount: 1090,
    hoursCount: 11586,
    totalMembers: 3000,
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
      <Header />
      <Hero h1="Welcome to"/>
      <main id="main">
          <About data={data}/>
          <Pricing />
          <Subject />
          <Events />
          <Donate />
          <Sponsors />
          <News />
          <Testimonials />
          <Faq />
      </main>
  </>
  );
}
