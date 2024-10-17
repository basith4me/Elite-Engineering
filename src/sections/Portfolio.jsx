import React from "react";
import { projects } from "../export";
import { slideUpVariants, zoomInVariants } from "./animation";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div id="projects" className="w-full">
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
          Portfolio
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-[40px] font-bold text-center"
        >
          our best projects
        </motion.h1>
        <motion.div
          variants={slideUpVariants}
          className="w-[120px] h-[6px] bg-yellow-500"
        ></motion.div>
      </motion.div>
      <motion.div
        className="w-ful m-auto grid lg:grid-cols-4 grid-cols-1 "
        initial="hidden"
        whileInView={"visible"}
        variants={zoomInVariants}
      >
        {projects.map((item, index) => (
          <img
            src={item.image}
            alt="projects"
            key={index}
            className="h-[250px] w-full p-1"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;
