import React from "react";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28 font-sans bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl md:text-2xl font-semibold tracking-wide text-gray-800 dark:text-gray-100 mb-2 block">Welcome to My Portfolio</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1 className="dark:text-gray-100 font-extrabold tracking-wide">Hello, I'm </h1>
              <ReactTyped
                className="text-green-600 dark:text-green-400 font-extrabold tracking-wide"
                strings={["Mohd Hassan", "a Developer", "a Programmer", "a Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-200 font-medium mb-4">
              Hi, I'm <span className="font-bold text-green-700 dark:text-green-400">Mohd Hassan</span> – a web developer and tech enthusiast currently studying <span className="font-semibold">B.Tech in IT</span> (DR 2, IT Department) at <span className="font-semibold">Delhi Technological University (2023–2027)</span>.<br/>
              I specialize in <span className="font-semibold">web development</span> (React.js, Node.js, MongoDB, Express.js), and have built impactful projects like a <span className="font-semibold">Real-Time Bidding System</span>, <span className="font-semibold">Blockchain Voting DApp</span>, and a <span className="font-semibold">Blood Bank Management System</span>.<br/>
              My goal is to combine clean, efficient code with user-centered design to solve meaningful problems.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-2 md:space-y-0 mb-6">
              <span className="font-semibold text-gray-800 dark:text-gray-200">Email:</span> <a href="mailto:shamsihassan002@gmail.com" className="text-blue-700 dark:text-blue-400 underline font-medium">shamsihassan002@gmail.com</a>
              <span className="font-semibold text-gray-800 dark:text-gray-200">Phone:</span> <a href="tel:+919899472584" className="text-blue-700 dark:text-blue-400 underline font-medium">+91 9899472584</a>
            </div>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-semibold text-xs md:text-sm uppercase tracking-widest text-center text-gray-700 dark:text-gray-300 mb-1">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://github.com/Hassan010103" target="_blank" rel="noopener noreferrer">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6 dark:invert" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/mohd-hassan-89617629b/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-2xl cursor-pointer dark:text-blue-400" />
                    </a>
                  </li>
                  <li>
                    <a href="https://leetcode.com/u/Hassan_010103/" target="_blank" rel="noopener noreferrer">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="w-6 h-6 dark:invert" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-semibold text-xs md:text-sm uppercase tracking-widest text-center text-gray-700 dark:text-gray-300 mb-1">Currently Working On</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer dark:text-green-400 dark:border-green-400" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer dark:text-gray-200 dark:border-gray-400" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer dark:text-blue-400 dark:border-blue-400" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer dark:text-green-300 dark:border-green-300" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 flex justify-center items-center">
            <div className="card-glow rounded-full">
              <img
                src="/photo.avif"
                alt="profile"
                className="rounded-full w-64 h-64 md:w-[450px] md:h-[450px] object-cover border-4 border-green-400 shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-300 dark:border-gray-700" />
    </>
  );
}

export default Home;
