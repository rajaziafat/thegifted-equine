import Button from "../Button/Button";
import ProductsCard from "../ProductsCard/ProductsCard";
import Heading from "../Heading/Heading";
import Helmet from "../Helmet/Helmet";

const ProductsSection = (props) => {
  return (
    <div className="py-20 bg-[#634832]">
      <Helmet>
        <Heading text={props.heading} className="text-white" />
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
            text={props.btnText}
            className=" bg-black text-white border-white rounded-md text-lg hover:bg-white hover:text-black duration-300 "
          />
        </div>
      </Helmet>
    </div>
  );
};

export default ProductsSection;
