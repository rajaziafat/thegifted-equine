import "./App.css";
import "./Fonts/Fonts.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import OurEquines from "./OurEquines/OurEquines";
import { Toaster } from "sonner";
const App = () => {
  return (
    <>
      <ParallaxProvider>
        <Toaster position="top-right" richColors={true} />
        <BrowserRouter>
          <Routes>
            <Route path="/our-equines" element={<OurEquines />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ParallaxProvider>
    </>
  );
};

export default App;
