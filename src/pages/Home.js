// Home.js
import ServicesSection from './ServicesSection';
import WhyUsSection from '../components/WhyUsSection';
import ClientLinkedinTestimonials from "../components/ClientLinkedinTestimonials";

import Hero from '../components/Hero';



const Home = () => {
  return (
    <>
      <Hero />
      <div id="services">
  <ServicesSection />
</div>
<WhyUsSection />
      <ClientLinkedinTestimonials />
   
    </>
  );
};

export default Home;
