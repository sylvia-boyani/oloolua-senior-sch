import "./App.css";
import Navbar from "./components/common/Navbar/Navbar";
import Hero from "./components/home/Hero/Hero";
import Welcome from "./components/home/welcome/Welcome";
import WhyChoose from "./components/home/whyChoose/WhyChoose";
import Excellence from "./components/home/Excellence/Excellence";
import Principal from "./components/home/principal/Principal";
import StudentLife from "./components/home/studentLife/StudentLife";

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
    </>
  );
}

export default App;