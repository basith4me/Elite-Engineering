import React, { useState } from "react";
import { motion } from "framer-motion";
import { zoomInVariants, slideUpVariants } from "./animation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    message: "",
  });

  const handleSubmit = () => {};
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
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={slideUpVariants}
          className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6 "
        >
          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView={"visible"}
            variants={zoomInVariants}
            className="flex flex-col justify-center items-start gap-4 w-full"
          >
            <input
              name="name"
              value={formData.name}
              type="text"
              placeholder="Name"
              className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-6 py-3 border-[2px] border-black text-black rounded-lg w-full"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className=" focus:border-yellow-500 px-6 py-3 border-[2px] border-black text-black rounded-lg w-full"
            />
            <textarea
              name=""
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
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
