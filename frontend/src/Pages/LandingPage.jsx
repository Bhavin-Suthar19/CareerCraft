import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import RoadmapSection from '../components/RoadmapSection'
import TestimonialsSection from '../components/TestimonialsSection'
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const LandingPage = () => {
    useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <>
    <HeroSection/>
    <FeatureSection />
    <RoadmapSection />
    <TestimonialsSection />
    <HowItWorks />
    <Footer />
    </>
  )
}

export default LandingPage