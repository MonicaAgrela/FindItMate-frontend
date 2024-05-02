import React from "react";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import OurServices from "../components/OurServices";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <HeroSection></HeroSection>
      <AboutUs></AboutUs>
      <OurServices></OurServices>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
