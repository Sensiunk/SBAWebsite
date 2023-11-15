import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/footer & header/header";
import Footer from "./components/footer & header/footer";
import Heropage from "./components/pages/heropage";
import Events from "./components/pages/events";
import AboutUs from "./components/pages/aboutus";
import Contact from "./components/pages/contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Heropage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
