import { Link } from "react-scroll";
import Button from "../Components/Button/Button";
import EnquineCards from "../Components/EnquineCards/EnquineCards";
import Heading from "../Components/Heading/Heading";
import Helmet from "../Components/Helmet/Helmet";
import AdoptableHorses from "../Data/AdoptableHorses";

const AvailableForAdoption = () => {
  return (
    <div className="py-20 bg-primary adoption">
      <Helmet>
        <Heading text="Available for Adoption" className="text-white" />
        <div className="mt-20 flex flex-wrap justify-center gap-10">
          {AdoptableHorses.map((item) => {
            return <EnquineCards key={item.id} {...item} />;
          })}
        </div>
        <div className="flex justify-center mt-10">
          <Link to="contact" smooth={true} offset={-100}>
            <Button
              text="Contact us for more information on adoptions"
              className="bg-black text-white border-white rounded-md text-lg hover:bg-white hover:text-black duration-300 px-6 sm:h-auto sm:py-3"
            />
          </Link>
        </div>
      </Helmet>
    </div>
  );
};

export default AvailableForAdoption;
