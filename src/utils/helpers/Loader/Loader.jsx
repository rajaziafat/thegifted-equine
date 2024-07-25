import "ldrs/ring";
const Loader = (props) => {
  return (
    <l-ring
      size="30"
      stroke="2"
      bg-opacity="0"
      speed="2"
      color={props.isHover ? "black" : "white"}
    ></l-ring>
  );
};

export default Loader;
