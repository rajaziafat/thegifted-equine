import Button from "../Components/Button/Button";

const Hero = () => {
  return (
    <div className="min-h-screen bg-[url('/Hero.webp')] w-full bg-cover relative flex justify-center items-center">
      <div className="absolute top-0 left-0 min-h-screen bg-black/25 w-full"></div>
      <div className="relative z-20 flex flex-col items-center gap-y-7">
        <h2 className="text-5xl text-white sm:text-center">
          Sweet Mercies Rescue Ranch
        </h2>
        <Button
          text="Get Involved"
          className="text-white hover:border-black hover:bg-black duration-300  rounded-md text-lg border border-white "
        />
      </div>
    </div>
  );
};

export default Hero;
