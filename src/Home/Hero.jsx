import { motion } from "framer-motion";
import Button from "../Components/Button/Button";
import NavBar from "../Components/NavBar/NavBar";
import { fadeInFromLeft } from "../utils/helpers/Animation/Animation";

const Hero = () => {
  return (
    <div className="min-h-screen bg-[url('/hero.jpg')] w-full bg-cover bg-center relative flex justify-start items-center pb-10 pl-20 pt-20">
      <div className="absolute top-0 left-0 w-full z-30">
        <NavBar />
      </div>
      <div className="absolute top-0 left-0 min-h-screen bg-black/25 w-full"></div>
      <div className="relative z-20 flex flex-col items-start gap-y-7 w-[700px]">
        <motion.h1
          {...fadeInFromLeft(0.3)}
          className="text-white font-semibold text-6xl uppercase"
        >
          We Make Miracles
        </motion.h1>
        <motion.h2 {...fadeInFromLeft(0.5)} className="text-xl text-white ">
          Have you ever wanted to rescue an abused horse? Shower a neglected
          mini with love? Adopt a thoroughbred whose racing days are long past?
        </motion.h2>
        <Button
          delay={0.5}
          text="Get Involved"
          className="text-white hover:border-black hover:bg-black duration-300  rounded-md text-lg border border-white "
        />
      </div>
    </div>
  );
};

export default Hero;
