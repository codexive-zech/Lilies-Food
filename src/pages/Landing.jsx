import React from "react";
import {
  Hero,
  NavBarSection,
  Sidebar,
  SpecialMeal,
  Newsletter,
  Footer,
} from "../components";

const Landing = () => {
  return (
    <>
      <NavBarSection />
      <Sidebar />
      <Hero />
      <SpecialMeal />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Landing;
