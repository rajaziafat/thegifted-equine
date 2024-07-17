import ContactUs from "../Components/ContactUs/ContactUs";
import NavBar from "../Components/NavBar/NavBar";
import OurMission from "../Components/OurMission/OurMission";
import OurServices from "../Components/OurServices/OurServices";
import ProductsSection from "../Components/ProductsSection/ProductsSection";
import Gallery from "./Gallery";
import Hero from "./Hero";
import RecentStories from "./RecentStories";
const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <OurMission />
      <ProductsSection heading="Meet Our Equines" btnText="Meet All Enquies" />

      <OurServices />
      <ProductsSection heading="Meet Our Dogs" btnText="Meet All Dogs" />
      <RecentStories />
      <ProductsSection heading="Meet Our Animals" btnText="Meet All Animals" />
      <ContactUs />
      <Gallery />
    </>
  );
};

export default Home;
