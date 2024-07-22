import "./App.css";
import "./Fonts/Fonts.css";
import { ParallaxProvider } from "react-scroll-parallax";
import Home from "./Home/Home";
const App = () => {
  return (
    <>
      <ParallaxProvider>
        <Home />
      </ParallaxProvider>
    </>
  );
};

export default App;
