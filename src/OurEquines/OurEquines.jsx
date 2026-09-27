import { useEffect } from "react";
import EnquineSection from "../Components/EnquineSection/EnquineSection";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";

const OurEquines = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <EnquineSection heading="Meet Our Equines" btnText="Meet All Equines" />
      <Footer />
    </>
  );
};

export default OurEquines;
