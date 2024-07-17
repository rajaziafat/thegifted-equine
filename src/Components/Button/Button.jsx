const Button = (props) => {
  return (
    <button className={`h-[50px] min-w-[200px] ${props.className}`}>
      {props.text}
    </button>
  );
};

export default Button;
