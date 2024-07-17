const Heading = (props) => {
  return (
    <h2
      className={`text-4xl font-semibold text-center uppercase ${props.className}`}
    >
      {props.text}
    </h2>
  );
};

export default Heading;
