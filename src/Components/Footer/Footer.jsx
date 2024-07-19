import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import Helmet from "../Helmet/Helmet";
import { motion } from "framer-motion";
import { fadeInFromLeft } from "../../utils/helpers/Animation/Animation";

const Footer = () => {
  return (
    <>
      <footer className="pt-20 bg-primary/85">
        <Helmet className="">
          <div className="grid grid-cols-[1fr_300px_1fr] sm:grid-cols-1 sm:gap-y-10">
            <motion.div
              {...fadeInFromLeft()}
              className="text-white flex flex-col flex-wrap content-center sm:text-center"
            >
              <h3 className="text-2xl">Our Location</h3>
              <address className="not-italic mt-3">Glen Rose, Texas</address>
            </motion.div>
            <motion.div
              {...fadeInFromLeft(0.2)}
              className="text-white sm:text-center"
            >
              <h3 className="text-2xl">Tax ID</h3>
              <p className="mt-3">
                Tax ID Number 88-2489192 <br /> Sweet Mercies Rescue Ranch is a
                501(c)(3) nonprofit organization.
              </p>
            </motion.div>
            <motion.div
              {...fadeInFromLeft(0.4)}
              className="text-white flex flex-col flex-wrap content-center"
            >
              <h3 className="text-2xl sm:text-center">Follow Us</h3>
              <div className="flex gap-4 mt-3">
                <a
                  href="#"
                  className="w-12 h-12 text-2xl rounded-full flex justify-center items-center bg-white text-[#E4405F] hover:text-white hover:bg-[#E4405F] duration-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 text-2xl rounded-full flex justify-center items-center bg-white text-[#1877F2] hover:text-white hover:bg-[#1877F2] duration-300"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 text-2xl rounded-full flex justify-center items-center bg-white text-[#EE1D51] hover:text-white hover:bg-[#EE1D51] duration-300"
                >
                  <FaTiktok />
                </a>
              </div>
            </motion.div>
          </div>
        </Helmet>
        <p className="text-center text-white pb-4 pt-5 mt-10 border-t border-t-white">
          &copy; {new Date().getFullYear()} Copyright.All rights are resered.
        </p>
      </footer>
    </>
  );
};

export default Footer;
