import { motion } from "framer-motion";
import Helmet from "../Components/Helmet/Helmet";
import { fadeInFromLeft } from "../utils/helpers/Animation/Animation";
import Heading from "../Components/Heading/Heading";

const MeetOurTeam = () => {
  return (
    <div className="py-20 team sm:pt-0">
      <Heading text="Meet Our Team" />
      <Helmet>
        <div className="flex flex-wrap mt-10 gap-16 justify-center">
          <TeamsCard
            img={`./t1.jpg`}
            name="Haley V"
            desig="Founder | Director"
            delay={0.1}
          />
          <TeamsCard
            img={`./t2.jpg`}
            name="Savanah Rae"
            desig="Lead Advisor"
            delay={0.2}
          />
          <TeamsCard
            img={`./t3.jpeg`}
            name="Heather C"
            desig="Farm Manager"
            delay={0.3}
          />
          <TeamsCard
            img={`./t4.png`}
            name="Hayden B"
            desig="Logistics + Operations"
            delay={0.4}
          />
          <TeamsCard
            img={`./t5.jpg`}
            name="Kiersten R"
            desig="Team "
            delay={0.5}
          />
          <TeamsCard
            img={`./t6.jpg`}
            name="Brittany L"
            desig="Team "
            delay={0.6}
          />
        </div>
      </Helmet>
    </div>
  );
};

const TeamsCard = (props) => {
  return (
    <motion.div
      {...fadeInFromLeft(props.delay)}
      className="w-[320px] h-[430px]"
    >
      <div className="h-[360px]">
        <img
          src={props.img}
          alt=""
          className="rounded-md w-full h-full object-cover hover:scale-105 duration-300"
        />
      </div>
      <div className="flex items-center flex-col py-6 bg-gray-100 shadow-lg w-10/12 mx-auto rounded-xl -translate-y-10">
        <h3 className="text-xl font-bold">{props.name}</h3>
        <h5 className="text-[#a55513] font-semibold">{props.desig}</h5>
      </div>
    </motion.div>
  );
};
export default MeetOurTeam;
