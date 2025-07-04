import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";
import reactjs from "../../public/reactjs.png";
import { SiNodedotjs, SiPython, SiCplusplus, SiTypescript, SiSolidity, SiAngular, SiNextdotjs, SiFlask, SiMysql, SiDocker, SiGithubactions, SiFigma, SiMongodb, SiCss3, SiJavascript, SiReact } from "react-icons/si";

function Experiance() {
  const cardItem = [
    { id: 1, logo: <SiMongodb color="#47A248" size={80} />, name: "MongoDB", type: 'icon' },
    { id: 2, logo: <SiCss3 color="#1572B6" size={80} />, name: "CSS", type: 'icon' },
    { id: 3, logo: <SiJavascript color="#F7DF1E" size={80} />, name: "JavaScript", type: 'icon' },
    { id: 4, logo: <SiReact color="#61DAFB" size={80} />, name: "React.js", type: 'icon' },
    { id: 5, logo: <SiNodedotjs color="#339933" size={80} />, name: "Node.js", type: 'icon' },
    { id: 6, logo: <SiPython color="#3776AB" size={80} />, name: "Python", type: 'icon' },
    { id: 7, logo: <SiCplusplus color="#00599C" size={80} />, name: "C++", type: 'icon' },
    { id: 8, logo: <SiTypescript color="#3178C6" size={80} />, name: "TypeScript", type: 'icon' },
    { id: 9, logo: <SiSolidity color="#363636" size={80} />, name: "Solidity", type: 'icon' },
    { id: 11, logo: <SiNextdotjs color="#000000" size={80} />, name: "Next.js", type: 'icon' },
    { id: 12, logo: <SiFlask color="#000000" size={80} />, name: "Flask", type: 'icon' },
    { id: 13, logo: <SiMysql color="#4479A1" size={80} />, name: "MySQL", type: 'icon' },
    ];
  return (
    <div
      name="Experience"
      className="max-w-6xl mx-auto px-6 md:px-16 py-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 dark:text-gray-100">Experience</h1>
        <p className="text-gray-700 dark:text-gray-300">
          I'm gaining hands on experience on the following technologies
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7 my-3 justify-items-center">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="card-glow flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700 rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300 bg-white dark:bg-gray-800"
              key={id}
            >
              <span className="flex items-center justify-center mb-2">{logo}</span>
              <div className="text-gray-800 dark:text-gray-100 text-center">{name}</div>
            </div>
          ))}
        </div>
        <div className="card-glow rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/60 backdrop-blur-md p-10 mt-10 mx-auto max-w-3xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
          <h2 className="text-green-700 dark:text-green-300 font-extrabold text-3xl mb-4 text-center tracking-wide">Internship Experience</h2>
          <div className="text-gray-700 dark:text-gray-200 text-lg font-medium text-center mb-2">Remote MERN Intern, Physics Wallah <span className="text-gray-500 dark:text-gray-400 font-normal">(July 1, 2025–Present)</span></div>
          <ul className="list-disc list-inside space-y-3 text-base md:text-lg text-gray-700 dark:text-gray-200 mt-4 pl-2 md:pl-6 text-left">
            <li>Contributed to <b>Smart Health Care</b>, a full-stack MERN platform designed for online consultations, wellness encyclopedia, and AI-powered symptom checking, <b>capable of supporting 200–500 concurrent API users</b>.</li>
            <li>Implemented <b>JWT-based authentication</b>, doctor search/filter, and real-time appointment booking with conflict checking, designed to handle <b>10,000+ registered users</b> and <b>1,000+ daily appointments</b>.</li>
            <li>Enabled secure video & chat consultations (WebRTC, Socket.io), e-prescriptions, reviews, and wellness content, supporting <b>100–200 concurrent chat/video sessions</b>.</li>
            <li>Integrated <b>Razorpay payments</b> and designed admin CRUD for doctors, treatments, users, and appointments.</li>
            <li>Followed best practices: <b>modular TypeScript</b>, input validation (Joi), logging (Winston), and automated testing on multiple modules.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experiance;
