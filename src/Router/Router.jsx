import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Footer from "../Components/Footer/Footer";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
