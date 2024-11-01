import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <h1 className="text-4xl font-extrabold mb-10 text-gray-800 tracking-wide">
        About Me
      </h1>
      <p className="text-lg leading-relaxed mb-10 text-gray-700">
        Hi, I'm Hassan – a web developer and tech enthusiast currently studying IT at Delhi Technological University. I specialize in web development using the MERN stack and Spring Framework, with hands-on experience in creating impactful projects like a Blood Bank Management System, an E-Commerce platform, and a Women’s Safety app that leverages AI for real-world safety features. My goal is to combine clean, efficient code with user-centered design to solve meaningful problems.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Box 1: Education & Training */}
        <div className="box p-6 border border-gray-200 rounded-lg shadow-lg bg-white">
          <h2 className="text-green-700 font-semibold text-2xl mb-4">
            Education & Training
          </h2>
          <p className="text-gray-600 text-md">
            B.Tech in Information Technology <br />
            Delhi Technological University (DTU) <br />
            Expected Graduation: 2027
          </p>
        </div>

        {/* Box 2: Skills & Expertise */}
        <div className="box p-6 border border-gray-200 rounded-lg shadow-lg bg-white">
          <h2 className="text-green-700 font-semibold text-2xl mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 text-md">
            Proficient in MERN Stack <br />
            Strong foundation in Data Structures and Algorithms (DSA)
          </p>
        </div>

        {/* Box 3: Professional Experience */}
        <div className="box p-6 border border-gray-200 rounded-lg shadow-lg bg-white">
          <h2 className="text-green-700 font-semibold text-2xl mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-600 text-md">
            Junior Web Developer Intern <br />
            Physics Wallah (PW) <br />
            Working on a learning project to build a website
          </p>
        </div>
      </div>

      {/* Centered second row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center mt-6">
        {/* Box 4: Achievements & Awards */}
        <div className="box p-6 border border-gray-200 rounded-lg shadow-lg bg-white">
          <h2 className="text-green-700 font-semibold text-2xl mb-4">
            Achievements & Awards
          </h2>
          <p className="text-gray-600 text-md">
            Codeforces Rating: Pupil (1220) <br />
            Solved 400+ questions on LeetCode <br />
            Qualified JEE Advanced, scoring in the top 1% nationwide
          </p>
        </div>

        {/* Box 5: Mission Statement */}
        <div className="box p-6 border border-gray-200 rounded-lg shadow-lg bg-white">
          <h2 className="text-green-700 font-semibold text-2xl mb-4">
            Mission Statement
          </h2>
          <p className="text-gray-600 text-md">
            My mission is to leverage my skills and creativity to deliver
            innovative solutions that exceed client expectations and contribute
            positively to the digital landscape. I am committed to continuous
            learning and growth, always seeking new challenges and opportunities
            to expand my horizons.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
