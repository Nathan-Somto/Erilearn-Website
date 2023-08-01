import React from "react";
import Head from "next/head";
import Link from "next/link";
import data from "@/data/contact.json";
import { Formik } from "formik";
import{motion} from 'framer-motion';
import ContactSchema from "@/schema/contact";
import { sendMail } from "@/services/axiosClient";
type Props = {};
//@TODO: Test Email endpoint, add Loading state and Error State.
const ContactPage = (props: Props) => {
  const { contact } = data;
  const fill = "#F7A6A4";
  return (
    <>
      <Head>
        <title>Erilearn | Contact Us</title>
        <meta name="description" content="Get in touch with Erilearn - Your Pathway to a Tech Career in Just 3 Months. Contact our team to learn more about our courses and how we can help you transition to the tech industry successfully." />
        <meta name="keywords" content="Erilearn, contact us, tech career, 3 months, technology, courses, instructors" />
      </Head>
      <div className="min-h-[calc(100vh+96px)] -mb-[50px] bg-[#FDF5F5] -mt-[96px] pt-[96px]">
        <header className="text-secondary text-center mx-auto overflow-hidden h-[300px] space-y-8 max-w-[600px] flex flex-col justify-center">
          <motion.h1 initial={{y:350,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.55, ease:"easeIn"}} className="xl:text-[72px] text-[35px] sm:text-5xl">
            {contact.heading1}
          </motion.h1>
          <motion.p initial={{opacity:0,scale: 0}} animate={{opacity:1, scale:1}} transition={{delay:0.75,duration:0.55, ease:"easeIn"}} className="opacity-80 text-[1.2rem] w-[80%] font-medium font-poppins mx-auto leading-[35px]">
            {contact.para}
          </motion.p>
        </header>
        <main>
          <section className="flex items-center mt-[100px] gap-[50px] justify-center flex-wrap">
            {contact.card.map((item, index) => (
              <motion.div
                initial={{scale: 0, opacity:0}}
                whileInView ={{scale: 1, opacity: 1}}
                transition={{delay:0.15 * index + 0.25, duration: 0.45}}
                key={item.id}
                viewport={{once: true}}
                className="flex hover:scale-110 ease-out duration-300 transition-all text-secondary text-center justify-center bg-white flex-col h-[350px] gap-8 w-[80%] max-w-[350px] px-8 py-4 rounded-[8px] shadow-[1px_4px_12px_rgba(200,200,200,0.5)]"
              >
                <div className="text-[#F7A6A4]  bg-[#FFF3F3] mx-auto w-[52px] h-[52px] rounded-[50%]  flex items-center justify-center">
                  {item.id === "1" ? (
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="headset"
                      role="img"
                      height="28"
                      width="28"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"
                      ></path>
                    </svg>
                  ) : item.id === "2" ? (
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="envelope-open-text"
                      height="28"
                      width="28"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M215.4 96H144 107.8 96v8.8V144v40.4 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3V96c0-26.5 21.5-48 48-48h76.6l49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48H416c26.5 0 48 21.5 48 48v44.3l22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4v-89V144 104.8 96H404.2 368 296.6 215.4zM0 448V242.1L217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1V448v0c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v0zM176 160H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="map-location-dot"
                      height="28"
                      width="28"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                      ></path>
                    </svg>
                  )}
                </div>
                <h2 className="text-[1.5rem] sm:text-[1.8rem] lg:text-[2.5rem]">{item.heading}</h2>
                <div>
                  <p className="opacity-80 font-medium">{item.para}</p>
                  <Link
                    href={item.href}
                    className="underline text-[14px] text-[#ffa2a0] font-semibold"
                  >
                    {item.linkText}
                  </Link>
                </div>
              </motion.div>
            ))}
          </section>
          <Formik
            initialValues={{
              email: "",
              name: "",
              subject: "",
              phoneNumber: 123456,
              message: "",
            }}
            validationSchema={ContactSchema}
            onSubmit={async (values) => {
              try{
                const response = await sendMail(values);
              }catch(err){

              }
            }}
          >
            {({ errors, touched,handleChange,handleSubmit,values, handleBlur,isValid }) => (
              <form onSubmit={handleSubmit} className=" text-secondary mt-[150px] pb-[50px] max-w-[800px] w-[80%] mx-auto ">
                <div className="w-full">
                  <h1 className="text-center mb-[50px]">
                    {" "}
                    {contact.form.heading}
                    <span>{contact.form.span}</span>
                  </h1>
                  <div className="flex flex-col md:flex-row w-full  md:gap-[5%] justify-center mb-10 items-center ">
                    <div className="md:w-[48.5%] mb-5 md:mb-0 w-full flex-shrink-0">
                      <label
                        htmlFor="email"
                        className="text-left font-semibold  w-full "
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={`input w-full mt-3 ${(touched.email && errors.email)? 'input-error':""}`}
                        placeholder="Email Address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      {(touched.email && errors.email) && (
                        <small className="text-primary">{errors.email}</small>
                      )}
                    </div>
                    <div className="md:w-[48.5%] w-full flex-shrink-0">
                      <label
                        htmlFor="name"
                        className="text-left font-semibold   w-full  "
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className={`input w-full mt-3 ${(touched.name && errors.name)? 'input-error':""}`}
                        placeholder="Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      {touched.name && errors.name && (
                        <small className="text-primary">{errors.name}</small>
                      )}
                    </div>
                  </div>
                  <div className="flex w-full flex-col md:flex-row  md:gap-[5%] justify-center items-center ">
                    <div className="md:w-[48.5%] mb-5 md:mb-0 w-full flex-shrink-0">
                      <label
                        htmlFor="phoneNumber"
                        className="text-left font-semibold   w-full "
                      >
                        Phone Number
                      </label>
                      <input
                        type="number"
                        className={`input w-full mt-3 ${(touched.phoneNumber && errors.phoneNumber)? 'input-error':""}`}
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="Phone Number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phoneNumber}
                      />
                      {touched.phoneNumber && errors.phoneNumber && (
                        <small className="text-primary">{errors.phoneNumber}</small>
                      )}
                    </div>
                    <div className="md:w-[48.5%] w-full flex-shrink-0">
                      <label
                        htmlFor="subject"
                        className="text-left font-semibold    w-full "
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        className={`input w-full mt-3 ${(touched.subject && errors.subject)? 'input-error':""}`}
                        placeholder="Subject"
                        id="subject"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.subject}
                      />
                      {touched.subject && errors.subject && (
                        <small className="text-primary">{errors.subject}</small>
                      )}
                    </div>
                  </div>

                  <div className="mt-10 flex flex-col w-full mx-auto">
                    <label
                      htmlFor="message"
                      className="text-left font-semibold    w-full "
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      cols={20}
                      rows={10}
                      placeholder="Your Message"
                      className="resize-none mt-3 input w-full"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                    ></textarea>
                  </div>
                  <button type="submit" disabled={!isValid} className=" disabled:opacity-50 primary-btn w-full  mt-[50px] text-[1.1rem] font-medium">
                    {" "}
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </main>
      </div>
    </>
  );
};

export default ContactPage;
