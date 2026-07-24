import Navbar from "../../common/Navbar/Navbar";
import AboutHero from "../../about/aboutHero/AboutHero";
import Footer from "../../common/footer/Footer";
import Story from "../../about/story/Story"
import VisionMission from "../../about/visionMission/VisionMission"

const About = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
      <Story />
      <VisionMission />
      <Footer />
    </>
  );
};

export default About;