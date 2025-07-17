import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import RoadmapSection from '../components/RoadmapSection'
import TestimonialsSection from '../components/TestimonialsSection'

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
    </>
  )
}

export default LandingPage