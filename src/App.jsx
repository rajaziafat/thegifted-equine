import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./Fonts/Fonts.css";
import Router from "./Router/Router";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
