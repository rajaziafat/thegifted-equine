import { CiMenuFries } from "react-icons/ci";
import { IoBagHandleSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import useScrollLock from "../../Hooks/UseScrollLock";
import { useRef, useState } from "react";
import useClickOutsideDetector from "../../Hooks/useClickOutsideDetector";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInFromLeft } from "../../utils/helpers/Animation/Animation";
import CountUp from "react-countup";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { IoChevronDown } from "react-icons/io5";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  useScrollLock(isSidebarOpen);
  const ref = useRef();

  useClickOutsideDetector(ref, () => {
    setIsSidebarOpen(false);
  });

  useClickOutsideDetector(dropdownRef, () => {
    setIsDropdownOpen(false);
  });

  const closeSideBar = () => {
    setIsSidebarOpen(false);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const equineOptions = [
    { label: "Our Equines", to: "enquies" },
    { label: "Available for Adoption", to: "available-for-adoption" },
    { label: "Adopted Equines", to: "adopted-equines" },
    { label: "In Loving Memory", to: "in-loving-memory" },
  ];

  return (
    <>
      <nav className="flex justify-center items-center h-24 z-40 backdrop-blur-lg shadow-xl bg-[#FFFFFF]  w-full sticky top-0 left-0">
        <div className="flex justify-between w-11/12 max-w-[1400px]">
          <Link to="hero" smooth={true} className="cursor-pointer">
            <motion.img
              {...fadeInFromLeft()}
              src="./Logo.png"
              className="w-20 h-20 object-contain"
              alt=""
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="flex gap-4 items-center lg:hidden ">
            <li>
              <Link
                onClick={closeSideBar}
                to="hero"
                className="cursor-pointer font-bold hover:text-gray-600 duration-300"
                smooth={true}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={closeSideBar}
                to="about"
                className="cursor-pointer font-bold hover:text-gray-600 duration-300"
                smooth={true}
                offset={-100}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={closeSideBar}
                className="cursor-pointer font-bold hover:text-gray-600 duration-300"
                smooth={true}
                to="howcanyouhelp"
                offset={-100}
              >
                How You can help
              </Link>
            </li>
            <li>
              <Link
                onClick={closeSideBar}
                className="cursor-pointer font-bold hover:text-gray-600 duration-300"
                smooth={true}
                to="donate"
                offset={-100}
              >
                Donate
              </Link>
            </li>
            <li>
              <Link
                onClick={closeSideBar}
                className="cursor-pointer font-bold hover:text-gray-600 duration-300"
                smooth={true}
                to="gallery"
                offset={-100}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                onClick={closeSideBar}
                className="cursor-pointer font-bold hover:text-gray-600 duration-300"
                to="team"
                smooth={true}
                offset={-100}
              >
                Meet Our Team
              </Link>
            </li>
            <li>
              <Link
                onClick={closeSideBar}
                className="cursor-pointer font-bold hover:text-gray-600 duration-300"
                smooth={true}
                offset={-100}
                to="contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://thegiftedequine.myshopify.com/collections/all"
                target="_blank"
                onClick={closeSideBar}
                className="flex items-center cursor-pointer gap-2 bg-black text-white rounded-3xl h-[45px] w-[180px] justify-center hover:bg-white border-black border-2 duration-300 hover:text-black"
              >
                Merch
              </a>
            </li>

            {/* Desktop Dropdown */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center cursor-pointer gap-2 bg-black text-white rounded-3xl h-[45px] w-[180px] justify-center hover:bg-white border-black border-2 duration-300 hover:text-black font-bold"
              >
                Meet Our Equines
                <IoChevronDown
                  className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[180px] bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200 z-50"
                  >
                    {equineOptions.map((option, index) => (
                      <li key={index}>
                        <Link
                          onClick={() => {
                            setIsDropdownOpen(false);
                          }}
                          smooth={true}
                          offset={-100}
                          to={option.to}
                          className="block px-4 py-3 text-sm font-bold hover:bg-gray-100 hover:text-gray-600 duration-300 cursor-pointer"
                        >
                          {option.label}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className=" items-center gap-5 text-2xl hidden lg:flex">
            <motion.button
              {...fadeInFromLeft(0.2)}
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <CiMenuFries />
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed h-full top-0 left-0 w-full bg-black/65 duration-300 ${
          isSidebarOpen
            ? "lg:z-40 opacity-100 lg:block"
            : "lg:-z-10 opacity-0 hidden"
        }`}
      ></div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed z-40 top-0 right-0 hidden lg:flex justify-center items-center py-4 overflow-y-auto min-h-screen bg-white duration-300 sm:w-full w-[400px] ${
          isSidebarOpen
            ? "-translate-x-0"
            : "translate-x-[400px] sm:translate-x-full"
        }`}
        ref={ref}
      >
        <button
          className="text-2xl absolute top-5 right-5"
          onClick={() => setIsSidebarOpen(false)}
        >
          <AiOutlineClose />
        </button>
        <ul className="flex flex-col gap-y-8 items-center w-full justify-center min-h-full">
          <li>
            <Link
              onClick={closeSideBar}
              to="hero"
              className="cursor-pointer font-bold hover:text-gray-600 duration-300"
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeSideBar}
              to="about"
              className="cursor-pointer font-bold hover:text-gray-600 duration-300"
              smooth={true}
              offset={-100}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={closeSideBar}
              className="cursor-pointer font-bold hover:text-gray-600 duration-300"
              smooth={true}
              to="howcanyouhelp"
              offset={-100}
            >
              How You can help
            </Link>
          </li>
          <li>
            <Link
              onClick={closeSideBar}
              className="cursor-pointer font-bold hover:text-gray-600 duration-300"
              smooth={true}
              to="donate"
              offset={-100}
            >
              Donate
            </Link>
          </li>
          <li>
            <Link
              onClick={closeSideBar}
              className="cursor-pointer font-bold hover:text-gray-600 duration-300"
              smooth={true}
              to="gallery"
              offset={-100}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              onClick={closeSideBar}
              className="cursor-pointer font-bold hover:text-gray-600 duration-300"
              to="team"
              smooth={true}
              offset={-100}
            >
              Meet Our Team
            </Link>
          </li>
          <li>
            <Link
              onClick={closeSideBar}
              className="cursor-pointer font-bold hover:text-gray-600 duration-300"
              smooth={true}
              offset={-100}
              to="contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <a
              onClick={closeSideBar}
              href="https://thegiftedequine.myshopify.com/collections/all"
              target="_blank"
              className="flex items-center cursor-pointer gap-2 bg-black text-white rounded-3xl h-[45px] w-[130px] justify-center hover:bg-white border-black border-2 duration-300 hover:text-black"
            >
              Merch
            </a>
          </li>

          {/* Mobile Dropdown */}
          <li className="w-full flex flex-col items-center">
            <button
              onClick={toggleDropdown}
              className="flex items-center cursor-pointer gap-2 bg-black text-white rounded-3xl h-[45px] w-[180px] justify-center hover:bg-white border-black border-2 duration-300 hover:text-black font-bold"
            >
              Meet Our Equines
              <IoChevronDown
                className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center gap-y-4 mt-4 overflow-hidden"
                >
                  {equineOptions.map((option, index) => (
                    <li key={index}>
                      <Link
                        onClick={closeSideBar}
                        smooth={true}
                        offset={-100}
                        to={option.to}
                        className="cursor-pointer font-bold hover:text-gray-600 duration-300 text-sm"
                      >
                        {option.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
