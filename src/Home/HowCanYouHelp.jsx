import Heading from "../Components/Heading/Heading";
import Helmet from "../Components/Helmet/Helmet";

const HowCanYouHelp = () => {
  return (
    <div className="py-20">
      <Helmet>
        <Heading text="How Can You help" />
        <div className="flex gap-0 w-10/12 mx-auto mt-20">
          <div className="text-xl mt-10 w-1/2 ">
            <p className="text-center">
              We could not provide our vital services without YOU. We are
              dedicated to providing rehabilitation and adoption services for
              abused, neglected, abandoned and unwanted horses. Help us spread
              the word about these horses in need.{" "}
            </p>
            <ul className="flex flex-col gap-y-5 mt-10 list-disc">
              <li>
                Caring for these precious souls is financially taxing and we are
                always in need of funding for feed, medical, farrier care, and
                supplies.
              </li>
              <li>
                The Gifted Equine is funded by donations and fundraisers. We
                could not exist nor function without the support of our amazing
                donors.
              </li>
              <li>
                Monetary donations are always appreciated as well as gifts of
                feed and equipment or supplies.
              </li>
            </ul>
          </div>
          <div className="w-1/2 flex justify-center">
            <img src="./howcanyouhelp.jpg" className="h-[400px]" alt="" />
          </div>
        </div>
      </Helmet>
    </div>
  );
};

export default HowCanYouHelp;
