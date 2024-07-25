import "./App.css";
import "./Fonts/Fonts.css";
import { ParallaxProvider } from "react-scroll-parallax";
import Home from "./Home/Home";
import { Toaster } from "sonner";
const App = () => {
  return (
    <>
      <ParallaxProvider>
        <Toaster position="top-right" richColors={true} />
        <Home />
      </ParallaxProvider>
    </>
  );
};

export default App;
