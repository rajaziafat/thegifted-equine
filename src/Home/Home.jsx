import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import ContactUs from "../Components/ContactUs/ContactUs";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
// import OurMission from "../Components/OurMission/OurMission";
import AboutUs from "./AboutUs";
import AvailableForAdoption from "./AvailableForAdoption";
import Donate from "./Donate";
import Gallery from "./Gallery";
import Hero from "./Hero";
import HowCanYouHelp from "./HowCanYouHelp";
import MeetOurTeam from "./MeetOurTeam";
import Video from "./Video";
import Counter from "./Counter";
const Home = () => {
  const location = useLocation();

  // Nav links on other pages send visitors here with a section to jump to.
  // Late-loading content (like the Donorbox form resizing itself) can move
  // sections after the jump, so keep the section aligned until the page
  // settles or the visitor starts scrolling.
  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;

    const align = () =>
      scroller.scrollTo(target, { offset: location.state.offset });
    align();

    const observer = new ResizeObserver(align);
    observer.observe(document.body);
    const stop = () => observer.disconnect();
    const timer = setTimeout(stop, 8000);
    const inputs = ["wheel", "touchstart", "keydown", "mousedown"];
    inputs.forEach((e) => window.addEventListener(e, stop));

    return () => {
      stop();
      clearTimeout(timer);
      inputs.forEach((e) => window.removeEventListener(e, stop));
    };
  }, [location]);

  return (
    <>
      <NavBar />
      <Hero />
      <Video />
      <Counter />
      <AboutUs />
      {/* <OurMission /> */}
      <AvailableForAdoption />
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
