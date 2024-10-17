import React from "react";
import { zoomInVariants, slideUpVariants } from "./animation";
import { motion } from "framer-motion";
import { planning } from "../export";


const Workings = () => {
  return (
    <div id="working" className="w-full bg-white">
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
          step by step
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-black uppercase text-[40px] font-bold text-center"
        >
          how it works
        </motion.h1>
        <motion.div
          variants={slideUpVariants}
          className="w-[120px] h-[6px] bg-yellow-500"
        ></motion.div>
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={zoomInVariants}
          className="w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-start gap-[20px] mt-[30px]"
        >
          {planning.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-5 border-2 border-yellow-500 rounded-md p-6"
            >
              <div>
                <item.icon className="bg-yellow-500 size-[80px] hover:bg-black hover:fill-white p-4 rounded-full duration-300" />
              </div>
              <h1 className="text-2xl font-bold uppercase">{item.title}</h1>
              <p className="text-[20px] text-center text-gray-600">{item.about}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Workings;
