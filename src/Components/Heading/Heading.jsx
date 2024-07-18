const Heading = (props) => {
  return (
    <h2
      className={`text-4xl font-semibold text-center uppercase md:text-3xl ${props.className}`}
    >
      {props.text}
    </h2>
  );
};

export default Heading;
