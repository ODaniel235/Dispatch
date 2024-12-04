import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderLayout from "./layouts/HeaderLayout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderLayout>
        <Routes>
          <Route path="*" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HeaderLayout>
    </BrowserRouter>
  );
};

export default App;
