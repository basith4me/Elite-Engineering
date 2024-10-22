import React, { useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";
import logo from "../assets/elitelogo3.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navMenus = [
    {
      link: "Home",
      path: "hero",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Projects",
      path: "projects",
    },
    {
      link: "Services",
      path: "services",
    },
    {
      link: "Contact",
      path: "contact",
    },
    
  ];

  return (
    <nav className="flex w-full bg-white justify-between items-center lg:px-16 py-4 px-6 sticky top-0 z-50">
      <div className="h-[115px] flex items-center">
        <img
          src={logo}
          alt="logo"
          className="h-full max-h-[200px] object-contain" // Limit logo height within navbar
        />
      </div>
      <div className="lg:flex bg-slate-100 px-5 py-2 rounded-lg hidden">
        <ul className="lg:flex justify-center items-center gap-6 hidden">
          {navMenus.map(({ link, path }) => (
            <Link
              key={path}
              className="text-black uppercase font-bold p-3 rounded-full hover:bg-yellow-500 hover:text-black text-[15px] duration-300 cursor-pointer"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
      {/* mobile menu */}

      <div
        className="flex justify-between lg:hidden items-center mt-3"
        onClick={toggleMenu}
      >
        <div>
          {isMenuOpen ? (
            <FaXmark className="text-yellow-500 text-3xl cursor-pointer" />
          ) : (
            <FaBars className="text-yellow-500 text-3xl cursor-pointer" />
          )}
        </div>
      </div>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } w-full h-fit bg-yellow-500 p-4 absolute top-[72px] left-0 `}
        onClick={closeMenu}
      >
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navMenus.map(({ link, path }) => (
            <Link
              key={path}
              className="text-black uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white w-full text-center"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
