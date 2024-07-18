import { Field, Form, Formik } from "formik";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Helmet from "../Helmet/Helmet";

const ContactUs = () => {
  return (
    <div className="py-20">
      <Helmet>
        <Heading text="Contact Us" />
        <div className="flex w-full justify-center  my-10 flex-col items-center">
          <Formik className="w-full">
            {(formik) => {
              return (
                <Form className="w-[600px] md:w-full">
                  <div className="flex w-full gap-4 sm:flex-col">
                    <div className="flex w-full flex-col gap-y-2">
                      <label htmlFor="">First Name</label>
                      <Field
                        name="fName"
                        className="border border-black outline-none pl-3 rounded-md py-2"
                      />
                    </div>
                    <div className="flex w-full flex-col gap-y-2">
                      <label htmlFor="">Last Name</label>
                      <Field
                        name="fName"
                        className="border border-black outline-none pl-3 rounded-md py-2"
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col gap-y-2 mt-4">
                    <label htmlFor="">Email</label>
                    <Field
                      name="fName"
                      className="border border-black outline-none pl-3 rounded-md py-2"
                    />
                  </div>
                  <div className="flex w-full flex-col gap-y-2 mt-4">
                    <label htmlFor="">Phone Number</label>
                    <Field
                      name="fName"
                      className="border border-black outline-none pl-3 rounded-md py-2"
                    />
                  </div>
                  <div className="flex w-full flex-col gap-y-2 mt-4">
                    <label htmlFor="">Your Message</label>
                    <Field
                      as="textarea"
                      name="fName"
                      className="border h-28 resize-none border-black outline-none pl-3 rounded-md py-2"
                    />
                  </div>
                </Form>
              );
            }}
          </Formik>

          <Button
            text="Send"
            className=" bg-black text-white border-white rounded-md text-lg hover:bg-white hover:text-black duration-300 hover:border-black border mt-5"
          />
        </div>
      </Helmet>
    </div>
  );
};

export default ContactUs;
