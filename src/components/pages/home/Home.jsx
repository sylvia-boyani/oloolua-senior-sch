import "./Home.css";
import Navbar from "../../../components/common/Navbar/Navbar";
import Hero from "../../../components/home/Hero/Hero";
import Welcome from "../../../components/home/welcome/Welcome";
import WhyChoose from "../../../components/home/whyChoose/WhyChoose";
import Excellence from "../../../components/home/Excellence/Excellence";
import Principal from "../../../components/home/principal/Principal";
import StudentLife from "../../../components/home/studentLife/StudentLife";
import Achievements from "../../../components/home/achievements/Achievements"
import Testimonials from "../../../components/home/testimonials/Testimonials"
import CTA from "../../../components/home/cta/CTA"
import Footer from "../../../components/common/footer/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <WhyChoose />
      <Excellence />
      <Principal />
      <StudentLife />
      <Achievements />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default App;