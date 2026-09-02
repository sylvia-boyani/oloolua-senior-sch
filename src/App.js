import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Academics from "./components/pages/academics/Academics";
import STEM from "./components/academics/STEM/STEM";
import SocialSciences from "./components/academics/socialSciences/SocialSciences";
import ArtsSports from "./components/academics/artsSports/ArtsSports";
import Navbar from "./components/common/Navbar/Navbar";
import Admissions from "./components/pages/admission/Admissions";
import StudentLife from "./components/pages/studentLife/StudentLife";
import Contact from "./components/pages/contact/Contact";
import Gallery from "./components/pages/gallery/Gallery";
import Footer from "./components/common/footer/Footer";

function App() {
  return (
    <>
    <Navbar />
    <Routes>

      <Route
        path="/"
        element={<Home />} />

      <Route
        path="/about"
        element={<About />} />

      <Route
        path="/academics"
        element={<Academics />} />

      <Route
        path="/academics/stem"
        element={<STEM />} />

      <Route
        path="/academics/social-sciences"
        element={<SocialSciences />} />

      <Route
        path="/academics/arts-sports" element={<ArtsSports />} />

      <Route
        path="/admissions"
        element={<Admissions />} />

      <Route
        path="/student-life"
        element={<StudentLife />} />

      <Route
        path="/gallery"
        element={<Gallery />} />

      <Route
        path="/contact"
        element={<Contact />} />

    </Routes>
    <Footer />
    </>
  );
}

export default App;