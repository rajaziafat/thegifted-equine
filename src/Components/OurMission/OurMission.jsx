import { motion } from "framer-motion";
import Helmet from "../Helmet/Helmet";
import {
  fadeInFromLeft,
  fadeInFromRight,
} from "../../utils/helpers/Animation/Animation";

const OurMission = () => {
  return (
    <div className="py-20 flex flex-col gap-y-6 items-center sm:pt-0 ">
      <motion.h1
        {...fadeInFromLeft(0.3)}
        className="text-4xl font-semibold uppercase text-primary"
      >
        Our Mission
      </motion.h1>
      <Helmet>
        <div className="flex gap-10 md:flex-col my-10 items-center">
          <div className="w-1/2 md:w-full">
            <motion.p
              {...fadeInFromLeft(0.4)}
              className="text-2xl w-full text-center leading-normal md:w-11/12 md:text-xl sm:w-full"
            >
              At Sweet Mercies Rescue Ranch, we crave to save as many neglected
              animals as we can. Our goal is to rescue, rehabilitate, and show
              them the love they deserve before finding their forever homes.
            </motion.p>
          </div>
          <motion.div {...fadeInFromRight(0.6)} className="w-1/2 md:w-full">
            <img src="./mission.jpg" className="rounded-md" alt="" />
          </motion.div>
        </div>
      </Helmet>
    </div>
  );
};

export default OurMission;
