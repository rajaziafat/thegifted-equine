import { Field, Form, Formik } from "formik";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Helmet from "../Helmet/Helmet";
import { motion } from "framer-motion";
import { fadeInFromLeft } from "../../utils/helpers/Animation/Animation";

const ContactUs = () => {
  return (
    <div className="py-20">
      <Helmet>
        <Heading text="Contact Us" />
        <div className="flex justify-center  my-10 flex-col items-center w-[700px] mx-auto shadow-[0px_2px_20px_0px_rgba(0,0,0,0.05)] border border-[#D9D9D9] rounded-2xl md:w-full py-10">
          <Formik>
            {(formik) => {
              return (
                <Form className="w-[600px] md:w-full">
                  <div className="flex w-full gap-4 sm:flex-col">
                    <motion.div
                      {...fadeInFromLeft()}
                      className="flex w-full flex-col gap-y-2"
                    >
                      <label htmlFor="">First Name</label>
                      <Field
                        name="fName"
                        className="border border-black outline-none pl-3 rounded-md py-2"
                      />
                    </motion.div>
                    <motion.div
                      {...fadeInFromLeft(0.2)}
                      className="flex w-full flex-col gap-y-2"
                    >
                      <label htmlFor="">Last Name</label>
                      <Field
                        name="fName"
                        className="border border-black outline-none pl-3 rounded-md py-2"
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    {...fadeInFromLeft(0.4)}
                    className="flex w-full flex-col gap-y-2 mt-4"
                  >
                    <label htmlFor="">Email</label>
                    <Field
                      name="fName"
                      className="border border-black outline-none pl-3 rounded-md py-2"
                    />
                  </motion.div>
                  <motion.div
                    {...fadeInFromLeft(0.6)}
                    className="flex w-full flex-col gap-y-2 mt-4"
                  >
                    <label htmlFor="">Phone Number</label>
                    <Field
                      name="fName"
                      className="border border-black outline-none pl-3 rounded-md py-2"
                    />
                  </motion.div>
                  <motion.div
                    {...fadeInFromLeft(0.8)}
                    className="flex w-full flex-col gap-y-2 mt-4"
                  >
                    <label htmlFor="">Your Message</label>
                    <Field
                      as="textarea"
                      name="fName"
                      className="border h-28 resize-none border-black outline-none pl-3 rounded-md py-2"
                    />
                  </motion.div>
                </Form>
              );
            }}
          </Formik>

          <Button
            delay={1}
            text="Send"
            className=" bg-black text-white border-white rounded-md text-lg hover:bg-white hover:text-black duration-300 hover:border-black border mt-5"
          />
        </div>
      </Helmet>
    </div>
  );
};

export default ContactUs;
