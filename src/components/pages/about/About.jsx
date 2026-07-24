import Navbar from "../../common/Navbar/Navbar";
import AboutHero from "../../about/aboutHero/AboutHero";
import Footer from "../../common/footer/Footer";
import Story from "../../about/story/Story"
import VisionMission from "../../about/visionMission/VisionMission"
import Board from "../../about/board/Board"

const About = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
      <Story />
      <VisionMission />
      <Board />
      <Footer />
    </>
  );
};

export default About;