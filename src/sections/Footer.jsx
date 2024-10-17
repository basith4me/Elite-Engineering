import React from "react";
import { FaCopyright } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-center text-white bg-black gap-2 p-5">
        <FaCopyright className="fill-yellow-500 lg:size-5 size-8" />
        <p className="text-lg text-center">
          Copyright 2024 , all rights reserved to elite engineering
        </p>
        <div className="bg-yellow-500 text-black p-3 rounded-full hover:bg-black hover:text-white cursor-pointer lg:bottom-6 fixed bottom-6 right-6">
          <Link to="hero" spy={true} offset={-100} smooth={true}>
            <FaArrowUp className="size-6" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
