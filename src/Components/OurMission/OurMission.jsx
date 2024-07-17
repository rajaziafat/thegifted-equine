import Button from "../Button/Button";

const OurMission = () => {
  return (
    <div className="py-20 flex flex-col gap-y-6 items-center">
      <h1 className="text-4xl font-semibold uppercase">Our Mission</h1>
      <p className="text-2xl w-6/12 text-center leading-normal">
        At Sweet Mercies Rescue Ranch, we crave to save as many neglected
        animals as we can. Our goal is to rescue, rehabilitate, and show them
        the love they deserve before finding their forever homes.
      </p>
      <Button
        text="Learn More"
        className=" bg-black text-white border-white rounded-md text-lg hover:bg-white hover:text-black duration-300 hover:border-black border"
      />
    </div>
  );
};

export default OurMission;
