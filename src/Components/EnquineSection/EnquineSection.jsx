import Button from "../Button/Button";
import ProductsCard from "../EnquineCards/EnquineCards";
import Heading from "../Heading/Heading";
import Helmet from "../Helmet/Helmet";
import Horses from "../../Data/Horses";
import { Link } from "react-router-dom";

const EnquineSection = (props) => {
  return (
    <div className="py-20 bg-primary enquies">
      <Helmet>
        <Heading text={props.heading} className="text-white" />
        <div className="mt-20 flex flex-wrap justify-center gap-10">
          {Horses.map((item) => {
            return <ProductsCard key={item.id} {...item} />;
          })}
        </div>
        <div className="flex justify-center mt-10">
          <a
            href={"https://www.instagram.com/thegiftedequine/profilecard/"}
            target="_blank"
          >
            <Button
              text={props.btnText}
              className=" bg-black text-white border-white rounded-md text-lg hover:bg-white hover:text-black duration-300 "
            />
          </a>
        </div>
      </Helmet>
    </div>
  );
};

export default EnquineSection;
