import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import Helmet from "../Helmet/Helmet";
import { motion } from "framer-motion";
import { fadeInFromLeft } from "../../utils/helpers/Animation/Animation";

const Footer = () => {
  return (
    <>
      <footer className="pt-20 bg-primary/85">
        <Helmet className="">
          <div className="grid grid-cols-[1fr_1fr_1fr_1fr] md:grid-cols-2 sm:grid-cols-1 md:gap-y-10">
            <motion.div
              {...fadeInFromLeft()}
              className="text-white flex flex-col flex-wrap content-center md:text-center"
            >
              <h3 className="text-2xl mb-3">Email</h3>
              <a href="mailto:Thegiftedequinefoundation@gmail.com">
                Thegiftedequinefoundation@gmail.com
              </a>
            </motion.div>
            <motion.div
              {...fadeInFromLeft()}
              className="text-white flex flex-col flex-wrap content-center sm:text-center"
            >
              <h3 className="text-2xl">Our Location</h3>
              <address className="not-italic mt-3">Texas & Ohio</address>
            </motion.div>
            <motion.div
              {...fadeInFromLeft(0.2)}
              className="text-white  flex flex-col flex-wrap content-center md:text-center"
            >
              <h3 className="text-2xl">Tax ID</h3>
              <p className="mt-3">
                The Gifted Equine 501c3
                <br />
                Non-Profit Foundation
                <br />
                EIN: 88-3075349
              </p>
            </motion.div>
            <motion.div
              {...fadeInFromLeft(0.4)}
              className="text-white flex flex-col flex-wrap content-center md:text-center"
            >
              <h3 className="text-2xl sm:text-center">Follow Us</h3>
              <div className="flex gap-4 mt-3">
                <a
                  href="https://www.instagram.com/thegiftedequine?igsh=MWp5d3BqYjRhcTh5NA=="
                  className="w-12 h-12 text-2xl rounded-full flex justify-center items-center bg-white text-[#E4405F] hover:text-white hover:bg-[#E4405F] duration-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://m.facebook.com/TheGiftedEquine/"
                  className="w-12 h-12 text-2xl rounded-full flex justify-center items-center bg-white text-[#1877F2] hover:text-white hover:bg-[#1877F2] duration-300"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.tiktok.com/@giftedequine"
                  className="w-12 h-12 text-2xl rounded-full flex justify-center items-center bg-white text-[#EE1D51] hover:text-white hover:bg-[#EE1D51] duration-300"
                >
                  <FaTiktok />
                </a>
              </div>
            </motion.div>
          </div>
        </Helmet>
        <p className="text-center text-lg text-white pb-4 pt-5 mt-10 border-t border-t-white">
          <span className="text-2xl mx-1">
            &copy;
            {new Date().getFullYear()}
          </span>
          Copyrights.All rights are resered by The Gifted Enquine
        </p>
      </footer>
    </>
  );
};

export default Footer;
