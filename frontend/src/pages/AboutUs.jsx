import Header from "../components/Header";
import TrustedCabService from "../components/home/TrustedCabService";
import HowWorks from "../components/AboutUs/HowWorks";
import Drivers from "../components/AboutUs/Drivers";
import GetApp from "../components/AboutUs/GetApp";

const About1 = () => {
  return (
    <>
      <Header name="About Us" title="About" />
      <TrustedCabService />
      <HowWorks />
      <Drivers />
      <GetApp />
    </>
  );
};

export default About1;
