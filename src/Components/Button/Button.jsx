import { motion } from "framer-motion";
import { fadeInFromLeft } from "../../utils/helpers/Animation/Animation";

const Button = (props) => {
  return (
    <motion.button
      {...fadeInFromLeft(props.delay)}
      className={`h-[50px] min-w-[200px] ${props.className}`}
    >
      {props.text}
    </motion.button>
  );
};

export default Button;
