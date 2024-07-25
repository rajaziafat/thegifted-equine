import { motion } from "framer-motion";
import Helmet from "../Helmet/Helmet";
import { fadeInFromLeft } from "../../utils/helpers/Animation/Animation";

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
              The Gifted Equine Foundation equine-therapy program is
              specifically tailored to rescue horses that rescue humans. Program
              supports veterans, current military members seeking R&R after TDY
              or deployments, First Responders and individuals dealing with
              PTSD, anxiety, and other related conditions. This program aims to
              harness the healing power of horses and their unique connection
              with humans to provide a safe and nurturing environment for
              individuals to recover and heal
            </motion.p>
          </div>
          <motion.div {...fadeInFromLeft(0.6)} className="w-1/2 md:w-full">
            <img src="./mission.png" className="rounded-md" alt="" />
          </motion.div>
        </div>
      </Helmet>
    </div>
  );
};

export default OurMission;
