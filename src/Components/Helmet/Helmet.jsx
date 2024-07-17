const Helmet = (props) => {
  return (
    <div className={`w-11/12 mx-auto max-w-[1400px] ${props.styles}`}>
      {props.children}
    </div>
  );
};

export default Helmet;
