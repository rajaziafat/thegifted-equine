import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineInsertComment } from "react-icons/md";

const StoriesCard = (props) => {
  return (
    <div className="border border-black h-[600px] w-[320px] rounded-md">
      <img src={props.img} alt="" />
      <div className="flex flex-col items-center gap-y-1 pt-5 px-4">
        <h4 className="text-sm">{props.author}</h4>
        <h4 className="text-sm">{props.date}</h4>
        <h3 className="text-xl text-center mb-2">{props.title}</h3>
        <p className="text-sm">{props.description.slice(0, 120)}..</p>
        <div className="flex justify-end w-full border-t pt-2 mt-3 border-t-black pr-4  items-center gap-3">
          <span className="flex gap-1">
            <IoEyeOutline />
            <span className="text-sm">{props.views}</span>
          </span>
          <span className="flex gap-1  items-center">
            <MdOutlineInsertComment />
            <span className="text-sm">{props.comments}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default StoriesCard;
