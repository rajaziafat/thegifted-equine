import Heading from "../Components/Heading/Heading";
import Helmet from "../Components/Helmet/Helmet";

const AboutUs = () => {
  return (
    <div className="py-20 about">
      <Helmet>
        <Heading text="About Us" />
        <p className="text-xl text-center leading-relaxed px-20 mt-10 sm:px-0">
          At The Gifted Equine (501c3 Nonprofit), we are dedicated to saving
          horses from the slaughter pipeline and other neglectful situations and
          providing them with the respect and high-quality care they deserve. We
          spend quality time with each individual horse; ensuring their physical
          and mental health receives the attention it requires. In order to
          create the best chances for these horses to be successfully rehomed,
          we provide essential veterinary care, basic horsemanship handling, and
          tailored training and riding capabilities. We strive to find the
          perfect home for each animal, ensuring they will be cherished and
          receive the attention and love they deserve, whether they are a
          companion, a therapy animal, or a riding prospect.— join us in our
          mission to provide a loving home for every horse.
        </p>
      </Helmet>
    </div>
  );
};

export default AboutUs;
