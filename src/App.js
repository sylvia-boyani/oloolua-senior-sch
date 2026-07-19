import "./App.css";
import Navbar from "./components/common/Navbar/Navbar";
import Hero from "./components/home/Hero/Hero";
import Welcome from "./components/home/welcome/Welcome";
import WhyChoose from "./components/home/whyChoose/WhyChoose";
import Excellence from "./components/home/Excellence/Excellence";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <WhyChoose />
      <Excellence />
    </>
  );
}

export default App;