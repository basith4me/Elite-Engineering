import React from "react";
import { zoomInVariants, slideUpVariants } from "./animation";
import { motion } from "framer-motion";
import { clients } from "../export";

const Testimonials = () => {
  return (
    <div id="clients" className="w-full ">
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl uppercase"
        >
          testimonials
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-[40px] font-bold text-center"
        >
          what they saying
        </motion.h1>
        <motion.div
          variants={slideUpVariants}
          className="w-[120px] h-[6px] bg-yellow-500"
        ></motion.div>
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={zoomInVariants}
          className="lg:w-full w-[90%] grid lg:grid-cols-3 grid-cols-1 justify-center items-start mt-[30px] gap-8"
        >
          {clients.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center "
            >
              <div className="border-2 border-white hover:bg-zinc-800 hover:border-white pb-[100px] pt-[30px] rounded-md duration-300">
                <p className="text-white text-lg text-center">{item.about}</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-[5px]">
                <img src={item.image} alt="client image" className="mt-[-50px]"/>
                <h1 className="text-white font-semibold text-[27px]">{item.name}</h1>
                <h1 className="text-yellow-500 text-[22px]">{item.post}</h1>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
