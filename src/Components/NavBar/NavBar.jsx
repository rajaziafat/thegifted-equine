import { CiMenuFries } from "react-icons/ci";
import { Logo } from "../../utils/Icons/Icons";
const NavBar = () => {
  return (
    <>
      <nav className="flex justify-center items-center h-24">
        <div className="flex justify-between w-11/12">
          <span className="">
            <Logo height="100px" width="200px" />
          </span>
          <button className="text-2xl">
            <CiMenuFries />
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
