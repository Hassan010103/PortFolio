import React from "react";
import { SiPython, SiSolidity, SiReact, SiFlask } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function PortFolio() {
  const cardItem = [
    {
      id: 100,
      logo: <img src="/public/node.png" alt="Node.js" style={{ width: 56, height: 56, borderRadius: '50%' }} />,
      name: "Smart Health Care",
      description: "Architected a scalable MERN application for online medical consultations and AI-driven symptom analysis. Enhanced system to accommodate 10,000+ users, 1,000+ appointments, and 200–500 concurrent API users. Implemented admin dashboard and responsive UI for seamless management of doctors and appointments.",
      link: "https://smart-health-care-virid.vercel.app/",
      video: "",
      tech: "MERN Stack (MongoDB, Express.js, React.js, Node.js), TypeScript, JWT, WebRTC, Socket.io, Razorpay, Joi, Winston, Vercel",
      github: "https://github.com/Hassan010103/Smart-Health-Care"
    },
    {
      id: 0,
      logo: <SiFlask color="#000000" size={90} />,
      name: "FirePulse",
      description: "FirePulse reinvents the Fire TV experience with social, interactive, and AI-powered features: friends' likes, watch parties, movie matcher, contextual recommendations, picture-in-picture, smart AI recaps, cross-platform dashboard, and more. Built for the Enhanced Fire TV Experience hackathon.",
      link: "https://fire-pulse.vercel.app/",
      video: "https://www.youtube.com/results?search_query=FirePulse+Fire+TV+Demo",
      tech: "React (TypeScript), Vite, Tailwind CSS, Node.js, Express.js, MongoDB, JWT, Python (Flask, AI/ML), OMDB, Gemini API, Vercel",
      github: "https://github.com/Hassan010103/FireTV-Oopsie-operators"
    },
    {
      id: 2,
      logo: <SiSolidity color="#363636" size={90} />,
      name: "Blockchain Voting DApp",
      description: "Authored Solidity smart contracts on Polygon, supporting 1,000+ votes with 20% gas savings. React/Web3.js UI with MetaMask logins, 98% uptime.",
      link: "https://block-chain-voting-system.vercel.app/",
      video: "",
      tech: "Solidity, React, Web3.js, Polygon",
      github: "https://github.com/Hassan010103/BlockChain-Voting-System"
    },
    {
      id: 4,
      logo: <SiReact color="#61DAFB" size={90} />,
      name: "Portfolio Website",
      description: "Built a responsive React/Tailwind site with performance optimizations (Lighthouse score 95+), integrated contact form (Netlify functions) to generate 50+ leads/month.",
      link: "https://hassan010103.netlify.app/",
      video: "",
      tech: "React, Tailwind CSS, Netlify",
      github: "https://github.com/Hassan010103/PortFolio"
    },
    {
      id: 1,
      logo: <SiPython color="#3776AB" size={90} />,
      name: "Real-Time Bidding System",
      description: "Developed a bidding engine with LightGBM and Flask API, processing 1M+ auctions/day at sub-200ms latency. Improved AUC to 0.902 and reduced latency by 15%.",
      link: null,
      video: "",
      tech: "Python, Flask, LightGBM",
      github: "https://github.com/Hassan010103/Real-Time-Bidding-Adobe-DevCraft"
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className="underline font-semibold dark:text-gray-200">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8">
          {cardItem.map(({ id, logo, name, description, link, video, tech, github }) => (
            <div
              className="card-glow flex flex-col border-[2px] border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-8 bg-white dark:bg-gray-800 hover:scale-[1.03] duration-300 min-h-[380px] justify-between"
              key={id}
            >
              <div className="flex flex-col items-center mb-4">
                <span className="w-[90px] h-[90px] p-2 rounded-full border-[2px] mb-4 bg-white dark:bg-gray-900 flex items-center justify-center text-6xl">{logo}</span>
                <div className="font-bold text-2xl mb-2 text-gray-900 dark:text-gray-100 text-center">{name}</div>
              </div>
              <div className="text-gray-700 dark:text-gray-300 text-base mb-4 text-left">{description}</div>
              <div className="text-gray-500 dark:text-gray-400 text-sm mb-4">{tech}</div>
              <div className="flex flex-wrap gap-4 mt-6">
                {name !== "Real-Time Bidding System" && link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition duration-200"
                  >
                    Live Demo
                  </a>
                )}
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white rounded-lg shadow transition duration-200 p-2"
                    style={{ width: '44px', height: '44px' }}
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
