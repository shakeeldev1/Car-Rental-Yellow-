import React from "react";
import Header from "../components/home/Header";
import Working from "../components/home/Working";
import WhyUs from "../components/home/WhyUs";
import PopularServices from "../components/home/PopularServices";
import Download from "../components/home/Download";
import TrustedCabService from "../components/home/TrustedCabService";
import Services from "../components/home/Services";
import Faqs from "../components/home/Faqs";

const Home = () => {
  return (
    <div>
      <Header />
      <TrustedCabService />
      <Services />
      <PopularServices />
      <Faqs />
      {/* <Working /> */}
      {/* <WhyUs /> */}
      {/* <Download /> */}
    </div>
  );
};

export default Home;
