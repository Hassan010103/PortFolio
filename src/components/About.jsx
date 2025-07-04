import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <h1 className="text-4xl font-extrabold mb-10 text-gray-800 tracking-wide">
        <span className="dark:text-gray-100">About Me</span>
      </h1>
      <p className="text-lg leading-relaxed mb-10 text-gray-700 dark:text-gray-200">
        Information Technology undergraduate at Delhi Technological University (2023–2027) with a CGPA of 9.688. Currently a Remote MERN Intern at Physics Wallah, contributing to Smart Health Care (scalable full-stack platform for online consultations and AI-driven wellness). Proficient in C++, Python, JavaScript, TypeScript, React.js, Node.js, and MongoDB. 650+ LeetCode problems solved (Top 8%), Amazon HackOn S5 semi-finalist, and experienced in leading and collaborating on impactful tech projects and hackathons.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Box 1: Education & Training */}
        <div className="card-glow box p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:scale-[1.03] duration-300">
          <h2 className="text-green-700 dark:text-green-300 font-semibold text-2xl mb-4">
            Education & Training
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-md">
            <b>B.Tech in IT</b>, Delhi Technological University (2023–2027), CGPA: 9.688<br/>
            <b>Class XII (CBSE)</b>, Dev Samaj Modern School, Delhi , 95.8%<br/>
            <b>Class X (CBSE)</b>, Dev Samaj Modern School, Delhi , 95.6%<br/>
          </p>
        </div>

        {/* Box 2: Skills & Expertise */}
        <div className="card-glow box p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:scale-[1.03] duration-300">
          <h2 className="text-green-700 dark:text-green-300 font-semibold text-2xl mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-md">
            <b>Programming Languages:</b> C++, Python, JavaScript, Java, Solidity, TypeScript, SQL, C#<br/>
            <b>Frameworks:</b> React.js, Angular, Next.js, Express.js, Flask, Tailwind CSS<br/>
            <b>Tools & Platforms:</b> Node.js, MongoDB, MySQL, Docker, GitHub Actions, Figma
          </p>
        </div>

        {/* Box 3: Professional Experience */}
        <div className="card-glow box p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:scale-[1.03] duration-300">
          <h2 className="text-green-700 dark:text-green-300 font-semibold text-2xl mb-4">
            Internship Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-md">
            <b>Remote MERN Intern, Physics Wallah</b> (July 1, 2025–Present)<br/>
            <ul className="list-disc ml-5">
              <li>Built <b>Smart Health Care</b>, a scalable MERN platform for online consultations, AI symptom checks, and wellness content.</li>
              <li>Developed JWT auth, real-time booking, secure video/chat, and admin dashboards for 10,000+ users.</li>
              <li>Integrated payments, optimized for 200–500 concurrent users, and followed best practices in TypeScript and testing.</li>
            </ul>
          </p>
        </div>
      </div>

      {/* Centered second row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center mt-6">
        {/* Box 4: Achievements & Awards */}
        <div className="card-glow box p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:scale-[1.03] duration-300">
          <h2 className="text-green-700 dark:text-green-300 font-semibold text-2xl mb-4">
            Achievements & Leadership
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-md">
            <ul className="list-disc ml-5 space-y-2">
              <li><span className="font-bold">Semi-finalist at Amazon HackOn Season 5 (2025)</span> (Top 100 out of 52,000+ participants)</li>
              <li><b>LeetCode</b>: 650+ problems solved (Rating: 1782), Top 8% in weekly contests.</li>
              <li><b>Codeforces</b>: Pupil - Max Rating 1345.</li>
              <li><b>CodeChef</b>: 3 Star - (Max Rating 1636).</li>
              <li>Qualified <b>JEE Advanced (AIR 11,000)</b>.</li>
              <li>Ranked in top 800 teams in IEEE Xtreme 18.0 out of 19,000+ teams.</li>
              <li><b>Co-Head</b>, DTU Tech Fest Invictus 2024 (15 events, 500+ participants).</li>
              <li>Led 10-member team at AMDOCS-sponsored BITS Hackathon 2024, increasing submissions by 40%.</li>
            </ul>
          </p>
        </div>

        {/* Box 5: Volunteering */}
        <div className="card-glow box p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:scale-[1.03] duration-300">
          <h2 className="text-green-700 dark:text-green-300 font-semibold text-2xl mb-4">
            Volunteering Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-md">
            <ul className="list-disc ml-5">
              <li><b>NSSS Foundation, Delhi:</b> Taught underprivileged students to develop academic and life skills; organized community plantation drives (200+ trees planted).</li>
              <li>Led a <b>Food Waste Management campaign</b>, repurposing 50+ kg of food and shortlisted for Round 1 of the UN Millennium Fellowship.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
