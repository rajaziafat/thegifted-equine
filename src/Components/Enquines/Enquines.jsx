import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Helmet from "../Helmet/Helmet";
import ProductsCard from "../ProductsCard/ProductsCard";

const Enquines = () => {
  return (
    <div className="py-20 bg-[#634832]">
      <Helmet>
        <Heading text="Meet Our Equines" className="text-white" />
        <div className="mt-20 flex flex-wrap justify-center gap-10">
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
        </div>
        <div className="flex justify-center mt-10">
          <Button
            text="Meet All Enquies"
            className=" bg-black text-white border-white rounded-md text-lg "
          />
        </div>
      </Helmet>
    </div>
  );
};

export default Enquines;
