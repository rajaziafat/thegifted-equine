import ContactUs from "../Components/ContactUs/ContactUs";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import OurMission from "../Components/OurMission/OurMission";
import ProductsSection from "../Components/ProductsSection/ProductsSection";
import AboutUs from "./AboutUs";
import Donate from "./Donate";
import Gallery from "./Gallery";
import Hero from "./Hero";
import HowCanYouHelp from "./HowCanYouHelp";
import MeetOurTeam from "./MeetOurTeam";
const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutUs />
      <OurMission />
      <ProductsSection heading="Meet Our Equines" btnText="Meet All Enquies" />
      <HowCanYouHelp />
      <Donate />
      <Gallery />
      <ContactUs />
      <MeetOurTeam />
      <Footer />
    </>
  );
};

export default Home;
