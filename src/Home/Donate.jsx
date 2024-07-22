import Heading from "../Components/Heading/Heading";
import Helmet from "../Components/Helmet/Helmet";

const Donate = () => {
  return (
    <div className="py-10 mb-10 donate">
      <Helmet>
        <Heading text="Thank you for your contributions - “to us you’re more than a number”" />
        <div className="flex mt-16 flex-wrap gap-10 justify-center">
          <DonateCard img={1} link="" title="Paypal" />
          <DonateCard img={2} link="" title="Venmo" />
          <DonateCard img={3} link="" title="Patreon" />
          <DonateCard img={4} link="" title="Stripe" />
          <DonateCard img={5} link="" title="Amazon Wishlist" />
          <DonateCard img={6} link="" title="Donor Box" />
        </div>
      </Helmet>
    </div>
  );
};

const DonateCard = (props) => {
  return (
    <div className="flex flex-col gap-y-6 items-center p-8 sm:p-6 sm:w-[300px] shadow-lg rounded-xl border">
      <img
        src={`d${props.img}.png`}
        className="w-36 h-36 sm:w-32 sm:h-32 object-contain"
        alt=""
      />
      <h3 className="text-2xl">{props.title}</h3>
      <a
        href={props.link}
        className="h-9 flex w-28 justify-center items-center border-black bg-black text-white border rounded-md text-lg hover:bg-white hover:text-black duration-300 "
      >
        Select
      </a>
    </div>
  );
};
export default Donate;
