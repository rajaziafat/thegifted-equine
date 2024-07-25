import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Heading from "../Heading/Heading";
import Helmet from "../Helmet/Helmet";
import { motion } from "framer-motion";
import { fadeInFromLeft } from "../../utils/helpers/Animation/Animation";
import { Parallax } from "react-scroll-parallax";
import { send } from "@emailjs/browser";
import { toast } from "sonner";
import { useState } from "react";
import Loader from "../../utils/helpers/Loader/Loader";

const ContactUs = () => {
  // Validation schema
  const ContactSchema = Yup.object().shape({
    fName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
  });

  // Form Submit

  const [Loading, setLoading] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const handleSubmit = (values, onSubmitProps) => {
    setLoading(true);

    onSubmitProps.setSubmitting(false);
    //Email Js Send Data To Email
    send(
      "service_g581w9o",
      "template_8ldezsn",
      {
        to: "Thegiftedequinefoundation@gmail.com",
        from: values?.email,
        message: `${values?.message}`,
        to_name: "The Gifted Enquine",
        from_name: `${values?.fName} ${values?.lName}`,
        reply_to: values?.email,
        from_email: values?.email,
      },
      "KLecKLgXh5oEqLAeY"
    )
      .then((val) => {
        setLoading(false);
        onSubmitProps.setSubmitting(true);
        toast.success("Your Message  has been successfully submitted");
      })
      .catch((err) => {
        onSubmitProps.setSubmitting(true);

        setLoading(false);
        toast.error("Something went wrong! try again");
      });
    setTimeout(() => {
      onSubmitProps.resetForm();
    }, 2000);
  };

  return (
    <div className="py-20 contact">
      <Helmet>
        <Heading text="Contact Us" />
        <div className="flex gap-10">
          <div className="w-5/12 flex relative lg:hidden">
            <Parallax translateY={[-10, 30]}>
              <img
                src="./contact1.png"
                className="w-[300px] object-contain rounded-2xl"
                alt=""
              />
            </Parallax>
            <div className="absolute right-0 top-1/3">
              <Parallax translateY={[20, -10]}>
                <img
                  src="./contact2.jpg"
                  className="w-[300px] object-contain rounded-2xl "
                  alt=""
                />
              </Parallax>
            </div>
          </div>
          <div className="flex justify-center  my-10 flex-col items-center w-7/12 mx-auto shadow-[0px_2px_20px_0px_rgba(0,0,0,0.05)] border border-[#D9D9D9] rounded-2xl md:w-full py-10 lg:w-9/12 lg:px-10 sm:px-3">
            <Formik
              initialValues={{
                fName: "",
                lName: "",
                email: "",
                phone: "",
                message: "",
              }}
              validationSchema={ContactSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form className="w-[600px] md:w-full">
                  <div className="flex w-full gap-4 sm:flex-col">
                    <motion.div
                      {...fadeInFromLeft()}
                      className="flex w-full flex-col gap-y-2"
                    >
                      <label htmlFor="fName">First Name</label>
                      <Field
                        name="fName"
                        className="border border-black outline-none pl-3 rounded-md py-2"
                      />
                      {errors.fName && touched.fName ? (
                        <div className="text-red-500">{errors.fName}</div>
                      ) : null}
                    </motion.div>
                    <motion.div
                      {...fadeInFromLeft(0.2)}
                      className="flex w-full flex-col gap-y-2"
                    >
                      <label htmlFor="lName">Last Name</label>
                      <Field
                        name="lName"
                        className="border border-black outline-none pl-3 rounded-md py-2"
                      />
                      {errors.lName && touched.lName ? (
                        <div className="text-red-500">{errors.lName}</div>
                      ) : null}
                    </motion.div>
                  </div>
                  <motion.div
                    {...fadeInFromLeft(0.4)}
                    className="flex w-full flex-col gap-y-2 mt-4"
                  >
                    <label htmlFor="email">Email</label>
                    <Field
                      name="email"
                      className="border border-black outline-none pl-3 rounded-md py-2"
                    />
                    {errors.email && touched.email ? (
                      <div className="text-red-500">{errors.email}</div>
                    ) : null}
                  </motion.div>
                  <motion.div
                    {...fadeInFromLeft(0.6)}
                    className="flex w-full flex-col gap-y-2 mt-4"
                  >
                    <label htmlFor="phone">Phone Number</label>
                    <Field
                      name="phone"
                      className="border border-black outline-none pl-3 rounded-md py-2"
                    />
                    {errors.phone && touched.phone ? (
                      <div className="text-red-500">{errors.phone}</div>
                    ) : null}
                  </motion.div>
                  <motion.div
                    {...fadeInFromLeft(0.8)}
                    className="flex w-full flex-col gap-y-2 mt-4"
                  >
                    <label htmlFor="message">Your Message</label>
                    <Field
                      as="textarea"
                      name="message"
                      className="border h-28 resize-none border-black outline-none pl-3 rounded-md py-2"
                    />
                    {errors.message && touched.message ? (
                      <div className="text-red-500">{errors.message}</div>
                    ) : null}
                  </motion.div>

                  <button
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    className=" bg-black text-white border-white rounded-md text-lg hover:bg-white hover:text-black duration-300 hover:border-black border mt-5 h-12 w-32 flex justify-center items-center"
                    type="submit"
                  >
                    {Loading ? <Loader isHover={isHover} /> : "Submit"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Helmet>
    </div>
  );
};

export default ContactUs;
