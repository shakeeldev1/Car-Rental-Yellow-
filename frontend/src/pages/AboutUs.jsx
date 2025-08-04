// import Intro from "../components/AboutUs/Intro";
import Services from "../components/AboutUs/Services";
import Accordian from "../components/AboutUs/Accordian";
import Header from "../components/Header";
import TrustedCabService from "../components/home/TrustedCabService";

const About1 = () => {
  return (
    <>
      <Header name="About Us" title="About" />
      <TrustedCabService />
      {/* <Intro /> */}
      <Services />
      <Accordian />
    </>
  );
};

export default About1;
