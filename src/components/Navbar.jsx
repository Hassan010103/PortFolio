import React, { useState, useEffect } from "react";
import pic from "../../public/photo.avif";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));

  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 fixed top-0 left-0 right-0 z-50 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border-b border-gray-200 dark:border-gray-700/60 shadow-lg font-sans transition-colors duration-300">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3 bg-white/80 dark:bg-gray-800/80 rounded-xl px-3 py-1 shadow">
            <img src={pic} className="h-12 w-12 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900" alt="" />
            <div className="flex flex-col">
              <span className="font-semibold text-xl cursor-pointer text-gray-900 dark:text-gray-100 leading-tight">
                Hassa<span className="text-green-500 dark:text-green-300 text-2xl">N</span>
              </span>
              <span className="text-xs text-gray-700 dark:text-gray-300">Web Developer</span>
            </div>
          </div>
          {/* desktop navbar */}
          <div>
            <ul className="hidden md:flex space-x-14">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer text-gray-900 dark:text-gray-100 hover:underline hover:text-green-500 dark:hover:text-green-300 font-medium tracking-wide text-lg px-2"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden text-gray-900 dark:text-gray-100">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
          <button
            onClick={() => setDark((d) => !d)}
            className="ml-4 p-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-yellow-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        {/* mobile navbar */}
        {menu && (
          <div className="bg-white dark:bg-gray-900">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-medium tracking-wide text-lg cursor-pointer text-gray-900 dark:text-gray-100 hover:underline hover:text-green-500 dark:hover:text-green-300 px-2"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
