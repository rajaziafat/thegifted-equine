import { motion } from "framer-motion";
import Button from "../Components/Button/Button";
import NavBar from "../Components/NavBar/NavBar";
import { fadeInFromLeft } from "../utils/helpers/Animation/Animation";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="min-h-screen hero  w-full bg-cover bg-center relative flex justify-start items-center pb-10 pl-20 pt-20 md:pl-0 md:justify-center">
      {/* <div className="min-h-screen bg-[url('/hero.jpg')] w-full bg-cover bg-center relative flex justify-start items-center pb-10 pl-20 pt-20"> */}
      <div className="fixed top-0 left-0 w-full z-30">
        <NavBar />
      </div>
      <video
        src="./Video.mov"
        className="absolute top-0 left-0 w-full h-full object-cover"
        controlsList="nodownload"
        autoPlay
        muted
        loop
        type="video/mp4"
        playsInline
      ></video>
      <div className="absolute top-0 left-0 min-h-screen bg-black/65 w-full"></div>
      <div className="relative z-20 flex flex-col items-center gap-y-7 w-[700px] md:w-11/12 mx-auto  md:text-center">
        <motion.h1
          {...fadeInFromLeft(0.3)}
          className="text-white font-semibold text-6xl sm:text-4xl uppercase"
        >
          We Make Miracles
        </motion.h1>
        <motion.h2 {...fadeInFromLeft(0.5)} className="text-xl text-white ">
          Have you ever wanted to rescue an abused horse? Shower a neglected
          mini with love? Adopt a thoroughbred whose racing days are long past?
        </motion.h2>
        <Link
          offset={-100}
          to="donate"
          smooth={true}
          className="text-white sm:h-[40px] sm:w-32 hover:border-black hover:bg-black duration-300  rounded-md text-lg border border-white w-36 h-12 flex justify-center items-center cursor-pointer"
        >
          Donate
        </Link>
      </div>
    </div>
  );
};

export default Hero;
