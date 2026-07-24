import Navbar from "../../common/Navbar/Navbar";
import AboutHero from "../../about/aboutHero/AboutHero";
import Footer from "../../common/footer/Footer";
import Story from "../../about/story/Story"
import VisionMission from "../../about/visionMission/VisionMission"
import Board from "../../about/board/Board"
import Principal from "../../about/principal/Principal"
import Deputies from "../../about/deputies/Deputies"
import Teachers from "../../about/teachers/Teachers"
import SupportStaff from "../../about/supportStaff/SupportStaff"

const About = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
      <Story />
      <VisionMission />
      <Board />
      <Principal />
      <Deputies />
      <Teachers />
      <SupportStaff />
      <Footer />
    </>
  );
};

export default About;