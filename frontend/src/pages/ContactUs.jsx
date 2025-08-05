import ContactForm from "../components/contact/ContactForm.jsx";
import Map from "../components/contact/Map.jsx";
import Header from "../components/Header.jsx"
const ContactUs = () => {
  return (
    <div>
      <Header name="Contact Us" title="Contact" />
      <ContactForm />
      <Map />
    </div>
  );
};

export default ContactUs;
