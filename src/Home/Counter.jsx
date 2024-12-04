import CountUp from "react-countup";
import Helmet from "../Components/Helmet/Helmet";
import { Donkey, Horse } from "../utils/Icons/Icons";

// import VisibilitySensor from "react-visibility-sensor";
const Counter = () => {
  return (
    <div>
      <Helmet>
        <div className="w-full grid grid-cols-3 md:grid-cols-1 md:gap-y-9 gap-5">
          <CounterCard
            title="Horses & Donkeys Rescued"
            number={48}
            icon={<Horse width={"w-20"} />}
          />
          <CounterCard
            title="Horses & Donkeys Adopted"
            number={35}
            icon={<Donkey width={"w-20"} />}
          />
          <CounterCard title="Sanctuary Horses" number={5} />
        </div>
      </Helmet>
    </div>
  );
};

const CounterCard = (props) => {
  return (
    <div className="flex flex-col items-center ">
      <span className="text-4xl lg:text-3xl">
        <CountUp
          start={0}
          end={props.number}
          enableScrollSpy
          suffix="+"
          scrollSpyOnce
          duration={3}
        />
      </span>
      {/* {props.icon} */}
      <h4 className="text-3xl lg:text-2xl">{props.title}</h4>
    </div>
  );
};
export default Counter;
