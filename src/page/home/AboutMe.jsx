import { useState } from "react";
import portfolio from "../../assets/portfolio.png";

const tabs = ["MYSELF", "EDUCATION", "MY TOOLS"];

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("MYSELF");

  const tabStyle = (tab) =>
    `cursor-pointer px-4 py-2 font-semibold ${
      activeTab === tab ? "text-orange-500" : "text-gray-500"
    }`;

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
      {/* Image Section */}
      <div className="relative">
        <img src={portfolio} alt="About" className="w-80 lg:w-96 rounded-2xl" />
        <div className="absolute top-[50%] -right-10 bg-white shadow-md rounded-xl px-4 py-2 flex items-center gap-2">
          <span className="text-2xl">😍</span>
          <div>
            <p className="text-lg font-bold text-pink-500">10+</p>
            <p className="text-xs text-gray-500">Happy Clients</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-xl mt-10 lg:mt-0 lg:ml-12 text-center lg:text-left">
        <p className="text-sm text-purple-600 font-medium">About Me 👑</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          Why you <span className="text-orange-500">hire me</span> for your{" "}
          <span className="text-indigo-700">next project?</span>
        </h2>

        {/* Tabs */}
        <div className="flex gap-6 mt-6 justify-center lg:justify-start">
          {tabs.map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={tabStyle(tab)}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-6 text-gray-600 leading-relaxed h-68">
          {activeTab === "MYSELF" && (
            <p className="text-justify">
              I'm Fahim Rashid, a full-stack web developer skilled in React,
              Tailwind CSS, Node.js, and MongoDB. I build fast, responsive, and
              scalable web applications with clean code and user-friendly
              design. From front-end interfaces to back-end systems, I focus on
              performance, usability, and reliability. <br /> What makes me a
              strong choice is my problem-solving mindset and attention to
              detail. I listen closely, communicate clearly, and deliver on
              time. If you need a developer who's committed to quality and ready
              to turn your ideas into results — I'm here to help.
            </p>
          )}
          {activeTab === "EDUCATION" && (
            <ul className="list-disc pl-5">
              <li>
                B.Sc. in Computer Science - Bangladesh University of Business
                and Technology (2021-2025)
              </li>
              <li>Full-Stack Web Dev Bootcamp - DevCamp (2022)</li>
            </ul>
          )}
          {activeTab === "MY TOOLS" && (
            <div className="space-y-3">
              {[
                { name: "HTML", value: 89 },
                { name: "ReactJS", value: 95 },
                { name: "WordPress", value: 70 },
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm font-medium">
                    <span>{skill.name}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className="w-full bg-purple-100 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-pink-500 h-2 rounded-full"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
          Hire Me
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
