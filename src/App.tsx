import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderLayout from "./layouts/HeaderLayout";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderLayout>
        <Routes>
          <Route path="*" element={<Homepage />} />
        </Routes>
      </HeaderLayout>
    </BrowserRouter>
  );
};

export default App;
