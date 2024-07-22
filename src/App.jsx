import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./Fonts/Fonts.css";
import Router from "./Router/Router";
import { ParallaxProvider } from "react-scroll-parallax";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <ParallaxProvider>
          <Router />
        </ParallaxProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
