import { motion } from "framer-motion";
import Helmet from "../Components/Helmet/Helmet";
import { fadeInFromLeft } from "../utils/helpers/Animation/Animation";
import Heading from "../Components/Heading/Heading";

const MeetOurTeam = () => {
  return (
    <div className="py-20">
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
            desig="Tem "
            delay={0.5}
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
          className="rounded-md w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center flex-col py-6">
        <h3 className="text-xl font-medium">{props.name}</h3>
        <h5 className="text-[#a55513]">{props.desig}</h5>
      </div>
    </motion.div>
  );
};
export default MeetOurTeam;
