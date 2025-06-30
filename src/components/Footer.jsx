import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <footer className="py-10 bg-transparent">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide text-green-700 dark:text-green-300 mb-2">Hassan's Portfolio</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} Hassan</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
