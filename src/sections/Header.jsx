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
    <nav className="flex w-full bg-white justify-between items-center lg:px-16 py-2 px-6 sticky top-0 z-50 shadow-md">
      <div className="h-[70px] flex items-center">
        <img
          src={logo}
          alt="logo"
          className="h-full max-h-[120px] object-contain"
        />
      </div>
      <div className="lg:flex bg-slate-100 px-4 py-1.5 rounded-lg hidden">
        <ul className="lg:flex justify-center items-center gap-4 hidden">
          {navMenus.map(({ link, path }) => (
            <Link
              key={path}
              className="text-black uppercase font-semibold p-2 rounded-lg hover:bg-yellow-500 hover:text-black text-sm duration-300 cursor-pointer"
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
        } w-full h-fit bg-yellow-500 p-3 absolute top-[78px] left-0 shadow-md`}
        onClick={closeMenu}
      >
        <ul className="flex flex-col justify-center items-center gap-1 w-full">
          {navMenus.map(({ link, path }) => (
            <Link
              key={path}
              className="text-black uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white w-full text-center text-sm"
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
