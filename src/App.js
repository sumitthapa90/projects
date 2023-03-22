import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Services from "./pages/Services/Services";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Portfoliyo from "./pages/Portfoliyo/Portfoliyo";
import Footer from "./component/Footer/Footer"

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfoliyo" element={<Portfoliyo />} />
        </Routes>
        <Footer/>
      </>
    </div>
  );
}

export default App;
