import React from "react";
import Header from "../components/home/Header";
import PopularServices from "../components/home/PopularServices";
import TrustedCabService from "../components/home/TrustedCabService";
import Services from "../components/home/Services";
import Faqs from "../components/home/Faqs";
import Testimonials from "../components/home/Testimonials";
import CarRentalStats from "../components/home/CarRentalStats";
import Working from "../components/home/Working";
import WhyUs from "../components/home/WhyUs";
import Download from "../components/home/Download";

const Home = () => {
  return (
    <div>
      <Header />
      <TrustedCabService />
      <CarRentalStats />
      <Services />
      <Testimonials />
      <PopularServices />
      <Faqs />
      {/* <Working /> */}
      {/* <WhyUs /> */}
      {/* <Download /> */}
    </div>
  );
};

export default Home;
