import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../sections/animation.js";

const About = () => {
  return (
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
          welcome to
        </motion.h1>
        <motion.h1
          className="text-white uppercase text-[40px] font-bold"
          variants={slideUpVariants}
        >
          Elite engineering
        </motion.h1>
        <div className="w-[120px] h-[6px] bg-yellow-500"></div>
        <p className="text-3xl text-gray-50 mt-[60px]">
          Elite Engineering is a rapidly growing construction company in Sri
          Lanka, specializing in the design and construction of dream homes and
          business establishments.
        </p>
        <div className="flex flex-col lg:flex-row gap-5 ">
          <div className="bg-yellow-500 flex flex-col px-10 py-2 rounded">
            <p className="text-black font-extrabold text-center text-[40px]">
              50+
            </p>
            <span className="text-[20px] text-center">Undertaken Projects</span>
          </div>
          <div className="bg-yellow-500 flex flex-col px-10 py-2 rounded">
            <p className="text-black font-extrabold text-center text-[40px]">
              20+
            </p>
            <span className="text-[20px] text-center">Satisfied Clients</span>
          </div>
          <div className="bg-yellow-500 flex flex-col px-10 py-2 rounded">
            <p className="text-black font-extrabold text-center text-[40px]">
              5+
            </p>
            <span className="text-[20px] text-center">Years of Experience</span>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        variants={slideUpVariants}
        className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6"
      >
        <p className="text-white text-lg text-justify">
          Established in 2019, Elite Engineering is a forward-thinking
          construction company founded by Mr. Muneer, a dynamic young
          entrepreneur with a mission to make dream homes and business
          establishments a reality at an affordable cost.
          <p className="text-white text-lg text-justify py-2">
            Our expert team manages every aspect of the construction process,
            ensuring seamless execution from concept to completion. We are
            committed to delivering high-quality projects that exceed client
            expectations, with customer satisfaction at the heart of everything
            we do.
          </p>
          Operating nationwide, Elite Engineering caters to individuals and
          businesses seeking reliable and innovative construction solutions for
          homes and commercial spaces.
        </p>
        <motion.button
          variants={zoomInVariants}
          className="bg-yellow-500 hover:bg-white hover:text-black rounded-lg px-10 py-3 font-bold duration-300"
        >
          READ MORE
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
