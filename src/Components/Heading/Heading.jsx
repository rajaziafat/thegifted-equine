import { motion } from "framer-motion";
import { fadeInFromLeft } from "../../utils/helpers/Animation/Animation";

const Heading = (props) => {
  return (
    <motion.h2
      {...fadeInFromLeft()}
      className={`text-4xl font-semibold text-center uppercase md:text-3xl ${props.className}`}
    >
      {props.text}
    </motion.h2>
  );
};

export default Heading;
