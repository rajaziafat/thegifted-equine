import { CiMenuFries } from "react-icons/ci";
import { IoBagHandleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import useScrollLock from "../../Hooks/UseScrollLock";
import { useRef, useState } from "react";
import useClickOutsideDetector from "../../Hooks/useClickOutsideDetector";
import { AiOutlineClose } from "react-icons/ai";
const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useScrollLock(isSidebarOpen);
  const ref = useRef();

  useClickOutsideDetector(ref, () => {
    setIsSidebarOpen(false);
  });
  return (
    <>
      <nav className="flex justify-center items-center h-24">
        <div className="flex justify-between w-11/12">
          <span className="">
            <img src="./Logo.png" className="w-20 h-20 object-contain" alt="" />
          </span>
          <div className="flex items-center gap-5 text-2xl">
            {/* <IoPersonCircleOutline className="text-3xl" /> */}
            <Link className="flex sm:hidden items-center gap-2 bg-black text-white rounded-3xl h-[45px] w-[130px] justify-center hover:bg-white hover:border-black border-2 duration-300 hover:text-black">
              <span className="text-base">Log In</span>
            </Link>
            {/* <button className="text-3xl">
              <IoBagHandleSharp />
            </button> */}
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <CiMenuFries />
            </button>
          </div>
        </div>
        {/* Slide Menu */}

        <div
          className={`fixed inset-0   bg-black/65  duration-300 ${
            isSidebarOpen ? "z-30 opacity-100" : "-z-10 opacity-0"
          }`}
        >
          <div
            className={`absolute top-0 right-0 h-full bg-white overflow-y-scroll duration-300 w-[400px] ${
              isSidebarOpen ? "-translate-x-0" : "translate-x-[400px]"
            }`}
            ref={ref}
          >
            <button
              className="text-2xl absolute top-5 right-5"
              onClick={() => setIsSidebarOpen(false)}
            >
              <AiOutlineClose />
            </button>
            <ul className="flex flex-col gap-y-8 items-center w-full justify-center h-full">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Donate</Link>
              </li>
              <li>
                <Link>Gallery</Link>
              </li>
              <li>
                <Link>How You can help</Link>
              </li>
              <li>
                <Link>Meet Our Team</Link>
              </li>
              <li>
                <Link className="flex items-center gap-2 bg-black text-white rounded-3xl h-[45px] w-[130px] justify-center hover:bg-white border-black border-2 duration-300 hover:text-black">
                  Merch
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-2 bg-black text-white rounded-3xl h-[45px] w-[180px] justify-center hover:bg-white border-black border-2 duration-300 hover:text-black">
                  Enquies Enquies
                </Link>
              </li>
              <li className="hidden sm:block">
                <Link className="flex items-center gap-2 bg-black text-white rounded-3xl h-[45px] w-[130px] justify-center hover:bg-white hover:border-black border-2 duration-300 hover:text-black">
                  <span className="text-base">Log In</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
