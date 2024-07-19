import { motion } from "framer-motion";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import { fadeInFromLeft } from "../../utils/helpers/Animation/Animation";

const OurServices = () => {
  return (
    <div className="py-20 flex flex-col gap-y-6 items-center">
      {/* <motionh1 className="text-4xl font-semibold uppercase">Our Services</motionh1> */}
      <Heading text="Our Services" />
      <motion.p
        {...fadeInFromLeft()}
        className="text-2xl w-7/12 text-center leading-normal md:w-11/12 md:text-xl"
      >
        At Sweet Mercies Rescue Ranch, we are dedicated to helping animals in
        need get the love and care they deserve.
        <br />
        We offer refuge to animals, as well as lessons and coaching to
        individuals who have experienced trauma or difficult situations.
        <br />
        We are passionate about making sure that people and animals have a safe
        and loving place to heal.
      </motion.p>
      <Button
        text="Learn More"
        className=" bg-black text-white border-white rounded-md text-lg "
      />
    </div>
  );
};

export default OurServices;
