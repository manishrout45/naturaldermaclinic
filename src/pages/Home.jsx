import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import HeroSection from "../components/HeroSection";
import useScrollFade from "../hooks/useScrollFade";
import AntiAgingSection from "../components/AntiAgingSection";
import Testimonial from "../components/Testimonial";
import GallerySection from "../components/GallerySection";
import ContactSection from "../components/ContactSection";
import SkinTreatmentSection from "../components/SkinTreatmentSection";

const Home = () => {
  useScrollFade(); // default class "fade-up"

  return (
    <>
      <HeroSection className="fade-up" />
      <AboutSection className="fade-right" />
      <ServiceSection className="fade-left" />
      <SkinTreatmentSection className="fade-right" />
      <AntiAgingSection className="fade-up" />
      <Testimonial className="fade-right" />
      <GallerySection className="fade-left" />
      <ContactSection className="fade-up" />



    </>
  );
};

export default Home;