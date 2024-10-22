import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { zoomInVariants, slideUpVariants } from "./animation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { PiPhoneCallLight } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    contactNo: "",
    message: "",
  });
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_lnj8fjr", "template_lo213tu", form.current, {
        publicKey: "RBNpPBoP1tnoXRM2c",
      })
      .then(
        () => {
          toast.success("We will Reach you soon 😊");
        },
        (error) => {
          toast.error("server error");
        }
      );

    setFormData({
      from_name: "",
      email: "",
      contactNo: "",
      message: "",
    });
  };

  return (
    <div id="contact" className="bg-white">
      <div
        className="lg:w-[80%] w-[90%] m-auto py-[60px] 
  flex flex-col lg:flex-row justify-between items-start gap-[50px]"
        id="about"
      >
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={slideUpVariants}
          className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6 "
        >
          <motion.h1
            variants={slideUpVariants}
            className="text-yellow-500 uppercase"
          >
            contact us{" "}
          </motion.h1>
          <motion.h1
            className="text-black uppercase text-[40px] font-bold"
            variants={slideUpVariants}
          >
            get in touch
          </motion.h1>
          <div className="w-[120px] h-[6px] bg-yellow-500"></div>
          <p className="text-2xl text-slate-700 italic">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
            incidunt quaerat repellendus accusamus suscipit voluptatibus magnam?
            Corporis autem ducimus ea!
          </p>
          <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-6 p-4">
  <div className="flex items-center space-x-3">
    <PiPhoneCallLight className="text-3xl" />
    <p className="text-lg lg:text-xl">+94766703034</p>
  </div>
  
  <div className="flex items-center space-x-3">
    <MdEmail className="text-3xl" />
    <p className="text-lg lg:text-xl">test@testy.com</p>
  </div>
  
  <div className="flex items-center space-x-3">
    <CiLocationOn className="text-3xl" />
    <p className="text-lg lg:text-xl">Colombo</p>
  </div>
</div>

        </motion.div>
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={slideUpVariants}
          className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6 "
        >
          {/* form */}
          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView={"visible"}
            variants={zoomInVariants}
            className="flex flex-col justify-center items-start gap-4 w-full"
          >
            <input
              required
              onChange={(e) =>
                setFormData({ ...formData, from_name: e.target.value })
              }
              name="from_name"
              value={formData.from_name}
              type="text"
              placeholder="Name"
              className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full"
            />
            <input
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              name="email"
              value={formData.email}
              type="email"
              placeholder="Email"
              className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full"
            />
            <input
              required
              pattern="^0[0-9]{9}$"
              title="please enter a valid phone number"
              onChange={(e) =>
                setFormData({ ...formData, contactNo: e.target.value })
              }
              name="contactNo"
              value={formData.contactNo}
              type="text"
              placeholder="Phone Number"
              className=" focus:border-yellow-500 px-6 py-3 border-[2px] border-black text-black rounded-lg w-full"
            />
            <textarea
              required
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              name="message"
              value={formData.message}
              id=""
              rows="4"
              placeholder="your message"
              className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full focus:border-yellow-500"
            />
            <motion.button
              type="submit"
              className="duration-300 w-full border-[2px] border-black py-3 rounded-lg bg-yellow-500 font-bold hover:bg-yellow-400"
            >
              SEND
            </motion.button>
          </motion.form>
          <ToastContainer />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
