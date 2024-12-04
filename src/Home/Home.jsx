import ContactUs from "../Components/ContactUs/ContactUs";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import OurMission from "../Components/OurMission/OurMission";
import EnquineSection from "../Components/EnquineSection/EnquineSection";
import AboutUs from "./AboutUs";
import Donate from "./Donate";
import Gallery from "./Gallery";
import Hero from "./Hero";
import HowCanYouHelp from "./HowCanYouHelp";
import MeetOurTeam from "./MeetOurTeam";
import Video from "./Video";
import Counter from "./Counter";
const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Video />
      <Counter />
      <AboutUs />
      <OurMission />
      <EnquineSection heading="Meet Our Equines" btnText="Meet All Equines" />
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
