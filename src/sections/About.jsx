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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
          doloribus?
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        variants={slideUpVariants}
        className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6"
      >
        <p className="text-white text-lg text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure eius ex
          accusamus totam odit vel nisi laudantium, tempora perspiciatis in
          dolore ab vero blanditiis voluptatem magnam delectus ut molestiae
          ipsum expedita asperiores fuga necessitatibus id facilis laborum.
          Corrupti quae ea tenetur illo unde ipsam fugiat debitis libero in
          voluptate, sint quas maiores porro impedit magni id reprehenderit,
          accusamus ullam dolore numquam eius voluptatem deleniti? Fugit
          repellendus quae officiis fuga totam commodi doloremque ex voluptates
          provident facilis! Velit qui dolorum neque et, sequi asperiores quod
          officiis magnam obcaecati? Dolores, perferendis laboriosam? Nam magnam
          unde, placeat quibusdam pariatur vitae esse facilis illum!
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
