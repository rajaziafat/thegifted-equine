import { motion } from "framer-motion";
import { fadeInFromLeft } from "../../utils/helpers/Animation/Animation";

const ProductsCard = (props) => {
  return (
    <motion.div
      {...fadeInFromLeft(props.id * 0, 1)}
      className="h-[400px] w-[300px] rounded-md border-2 overflow-hidden shadow-[0px_0px_15px_-3px_rgba(255,255,255,1)] border-white flex flex-col"
    >
      <div className="h-[350px] overflow-hidden w-full">
        <img
          src={props.img}
          alt=""
          className="h-[350px] w-full duration-300 hover:scale-110"
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

export default ProductsCard;
