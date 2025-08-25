 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Apartments from "./pages/Apartments";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16"> {/* Adjust padding if Navbar is fixed */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/apartments" element={<Apartments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
