import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderLayout from "./layouts/HeaderLayout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Track from "./pages/Track";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderLayout>
        <Routes>
          <Route path="*" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/track" element={<Track />} />
        </Routes>
      </HeaderLayout>
    </BrowserRouter>
  );
};

export default App;
