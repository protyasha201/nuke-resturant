import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Staffs from "../Staffs/Staffs";
import "./Home.css";

const Home = () => {
  return (
    <section>
      <Header />
      <About />
      <Services />
      <Staffs />
      <Contact />
    </section>
  );
};

export default Home;
