import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { zoomInVariants, slideUpVariants } from "./animation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { PiPhoneCallLight } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

// Custom toast styles
const toastConfig = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

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
          toast.success("✓ Message sent successfully! We'll reach out soon.", toastConfig);
          setFormData({
            from_name: "",
            email: "",
            contactNo: "",
            message: "",
          });
        },
        (error) => {
          toast.error("✗ Failed to send message. Please try again.", toastConfig);
        }
      );
  };

  return (
    <div id="contact" className="bg-white py-12">
      <div
        className="lg:w-[80%] w-[90%] m-auto py-8 
  flex flex-col lg:flex-row justify-between items-start gap-12"
        id="about"
      >
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={slideUpVariants}
          className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-5"
        >
          <motion.h1
            variants={slideUpVariants}
            className="text-yellow-500 uppercase text-sm font-semibold tracking-wider"
          >
            contact us{" "}
          </motion.h1>
          <motion.h1
            className="text-black uppercase text-4xl font-bold leading-tight"
            variants={slideUpVariants}
          >
            get in touch
          </motion.h1>
          <div className="w-[120px] h-1 bg-yellow-500 rounded"></div>
          <p className="text-lg text-slate-600 leading-relaxed max-w-md">
            Reach out to discuss your next construction, renovation, or design
            project. Our team is ready to provide guidance, answer questions,
            and help you move forward with confidence.
          </p>
          <div className="flex flex-col gap-4 mt-4 w-full">
  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition">
    <PiPhoneCallLight className="text-3xl text-yellow-500 flex-shrink-0" />
    <p className="text-base text-slate-700 font-medium">+94766703034</p>
  </div>
  
  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition">
    <MdEmail className="text-3xl text-yellow-500 flex-shrink-0" />
    <p className="text-base text-slate-700 font-medium break-all">hhmmuneer.eliteeng@gmail.com</p>
  </div>
  
  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition">
    <CiLocationOn className="text-3xl text-yellow-500 flex-shrink-0" />
    <p className="text-base text-slate-700 font-medium">Colombo</p>
  </div>
</div>

        </motion.div>
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={slideUpVariants}
          className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-4"
        >
          {/* form */}
          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView={"visible"}
            variants={zoomInVariants}
            className="flex flex-col justify-center items-start gap-3 w-full bg-slate-50 p-6 rounded-lg shadow-sm"
          >
            <input
              required
              onChange={(e) =>
                setFormData({ ...formData, from_name: e.target.value })
              }
              name="from_name"
              value={formData.from_name}
              type="text"
              placeholder="Full Name"
              className="px-4 py-2.5 border border-slate-300 text-black rounded-lg w-full focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition text-sm"
            />
            <input
              required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              name="email"
              value={formData.email}
              type="email"
              placeholder="Email Address"
              className="px-4 py-2.5 border border-slate-300 text-black rounded-lg w-full focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition text-sm"
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
              placeholder="Phone Number (0xxxxxxxxx)"
              className="px-4 py-2.5 border border-slate-300 text-black rounded-lg w-full focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition text-sm"
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
              placeholder="Your message here..."
              className="px-4 py-2.5 border border-slate-300 text-black rounded-lg w-full focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition text-sm resize-none"
            />
            <motion.button
              type="submit"
              className="duration-300 w-full border-2 border-yellow-500 py-2.5 rounded-lg bg-yellow-500 font-bold text-black hover:bg-yellow-400 hover:border-yellow-400 transition text-sm mt-1"
            >
              SEND MESSAGE
            </motion.button>
          </motion.form>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            style={{ fontSize: "14px" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
