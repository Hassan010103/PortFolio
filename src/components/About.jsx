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
        Hi, I'm Mohd Hassan – a web developer and tech enthusiast currently studying B.Tech in IT (DR 2, IT Department) at Delhi Technological University (2023–2027). I specialize in web development (React.js, Node.js, MongoDB, Express.js, Spring Boot), and have built impactful projects like a Real-Time Bidding System, Blockchain Voting DApp, and a Blood Bank Management System. My goal is to combine clean, efficient code with user-centered design to solve meaningful problems.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Box 1: Education & Training */}
        <div className="card-glow box p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:scale-[1.03] duration-300">
          <h2 className="text-green-700 dark:text-green-300 font-semibold text-2xl mb-4">
            Education & Training
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-md">
            <b>B.Tech in IT</b>, Delhi Technological University (2023–2027), CGPA: 9.688<br/>
            <b>Class XII (CBSE)</b>, Dev Samaj Modern School, Delhi (2022), 95.8%<br/>
            <b>Class X (CBSE)</b>, Dev Samaj Modern School, Delhi (2020), 95.6%<br/>
          </p>
        </div>

        {/* Box 2: Skills & Expertise */}
        <div className="card-glow box p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:scale-[1.03] duration-300">
          <h2 className="text-green-700 dark:text-green-300 font-semibold text-2xl mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-md">
            <b>Programming Languages:</b> C++, Python, JavaScript, Java, Solidity, TypeScript, SQL, C#<br/>
            <b>Frameworks:</b> React.js, Angular, Next.js, Express.js, Flask, Spring Boot, Tailwind CSS<br/>
            <b>Tools & Platforms:</b> Node.js, MongoDB, MySQL, Docker, GitHub Actions, Figma
          </p>
        </div>

        {/* Box 3: Professional Experience */}
        <div className="card-glow box p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:scale-[1.03] duration-300">
          <h2 className="text-green-700 dark:text-green-300 font-semibold text-2xl mb-4">
            Internship Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-md">
            <b>Web Intern, Physics Wallah</b> (July 2024)<br/>
            <ul className="list-disc ml-5">
              <li>Designed a <b>Blood Bank Management System</b> serving 100+ users using React.js, Node.js, and MongoDB.</li>
              <li>Improved user engagement by 30% and reduced load times by 20%, handling 500+ API calls/day.</li>
              <li>Implemented JWT-based authentication and role-based access, securing 1,000+ registered users.</li>
              <li>Collaborated in a 3-person Agile team across 4 sprints, using Jira for backlog management.</li>
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
            <ul className="list-disc ml-5">
              <li><a href="https://leetcode.com/u/Hassan_010103/" className="text-blue-700 dark:text-blue-400 underline"><b>LeetCode</b></a>: 650+ problems solved (Rating: 1782), Top 8% in weekly contests.</li>
              <li><a href="https://codeforces.com/profile/Hassan_010103" className="text-blue-700 dark:text-blue-400 underline"><b>Codeforces</b></a>: Pupil - Max Rating 1345.</li>
              <li><a href="https://www.codechef.com/users/hassan_02" className="text-blue-700 dark:text-blue-400 underline"><b>CodeChef</b></a>: 3-star rating of 1636.</li>
              <li>Qualified <b>JEE Advanced (AIR 11,800)</b>.</li>
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
