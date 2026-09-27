import { motion } from "framer-motion";
import { fadeInFromLeft } from "../../utils/helpers/Animation/Animation";

const EnquineCards = (props) => {
  return (
    <motion.div
      {...fadeInFromLeft(props.id * 0, 1)}
      className="h-[400px] w-[300px] rounded-md border-2 overflow-hidden shadow-[0px_0px_15px_-3px_rgba(255,255,255,1)] border-white flex flex-col"
    >
      <div className="h-[350px] overflow-hidden w-full relative">
        {props.fit === "contain" && (
          <img
            src={props.img}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover scale-125 blur-xl brightness-75"
          />
        )}
        <img
          src={props.img}
          alt=""
          style={{ objectPosition: props.position, objectFit: props.fit }}
          className="relative h-[350px] w-full duration-300 object-cover hover:scale-110"
        />
      </div>
      <div className="bg-white h-14 flex justify-center items-center">
        <div className=" text-center text-black text-xl font-semibold ">
          {props.name}
        </div>
      </div>
    </motion.div>
  );
};

export default EnquineCards;
