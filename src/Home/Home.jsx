import ContactUs from "../Components/ContactUs/ContactUs";
import NavBar from "../Components/NavBar/NavBar";
import OurMission from "../Components/OurMission/OurMission";
import ProductsSection from "../Components/ProductsSection/ProductsSection";
import AboutUs from "./AboutUs";
import Gallery from "./Gallery";
import Hero from "./Hero";
import HowCanYouHelp from "./HowCanYouHelp";
import MeetOurTeam from "./MeetOurTeam";
import RecentStories from "./RecentStories";
const Home = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Hero />
      <AboutUs />
      <OurMission />
      <ProductsSection heading="Meet Our Equines" btnText="Meet All Enquies" />
      <HowCanYouHelp />

      {/* <RecentStories /> */}
      <Gallery />
      <ContactUs />
      <MeetOurTeam />
    </>
  );
};

export default Home;
