import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Academics from "./components/pages/academics/Academics";

function App() {
  return (
    <Routes>

      <Route 
        path="/"
        element={<Home />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/academics"
        element={<Academics />}
      />

    </Routes>
  );
}

export default App;