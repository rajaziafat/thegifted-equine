const ProductsCard = () => {
  return (
    <div className="h-[400px] w-[300px] rounded-md border-2 shadow-[0px_0px_15px_-3px_rgba(255,255,255,1)] border-white flex flex-col">
      <img src="./img.jpg" alt="" className="h-[350px]" />
      <div className="bg-white h-14 flex justify-center items-center">
        <div className=" text-center text-black text-xl font-semibold ">
          Huck
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
