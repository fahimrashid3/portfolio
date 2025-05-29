import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FaLinkedinIn, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import portfolio from "../../assets/portfolio.png";
import React from "react";

const Banner = () => {
  const floatStyle = {
    animation: "float 3s ease-in-out infinite",
  };

  // Inject keyframes into the document head on mount
  React.useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const keyframes = `@keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }`;

    // Insert keyframes rule if not already present
    if (![...styleSheet.cssRules].some((rule) => rule.name === "float")) {
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#FFF2F0] to-[#E0F0FF]">
      <div className="min-h-screen flex items-center max-w-7xl mx-auto gap-10 px-6">
        <div className="text-left h-full flex-1 flex flex-col justify-center space-y-8">
          <h1 className="font-bold text-5xl text-gray-500">Hi! I’m</h1>
          <h1 className="text-7xl font-black ">
            {/* Gradient-filled text */}
            <span className="bg-gradient-to-r from-[#55389F] to-[#D9616A] bg-clip-text text-transparent">
              Fahim
            </span>{" "}
            <span
              className="text-transparent bg-clip-text from-[#55389F] to-[#D9616A]"
              style={{
                WebkitTextStroke: "1.5px #a855f7",
              }}
            >
              Rashid
            </span>
          </h1>

          <h1 className="text-3xl font-bold mt-2 ">
            Full-stack <span className="text-blue-700">Web Developer</span>
          </h1>
          <p className="max-w-3xl mx-auto mt-4 text-justify font-semibold text-gray-600">
            I build all kinds of modern web applications using{" "}
            <span className="font-bold">
              React, Node.js, Express, and MongoDB
            </span>
            . I focus on creating scalable, high-performance solutions that help
            businesses grow and achieve their goals. Currently, I'm based in
            Dhaka, Bangladesh.
          </p>
          <div className="flex items-center gap-4 justify-between w-[50%] max-w-xs">
            <a
              href="https://www.facebook.com/fahimrashid.fb"
              className="text-3xl text-blue-700"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/fahimrashid1/"
              className="text-3xl text-blue-700"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://x.com/FahimRashid20"
              className="text-3xl text-blue-700"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://wa.me/8801405819175"
              className="text-3xl text-blue-700"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://github.com/fahimrashid3"
              className="text-3xl text-blue-700"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <div className="flex gap-10">
            <button className="bg-orange-500 hover:bg-orange-700 text-white btn px-5 py-7 text-xl rounded-lg">
              Download CV
            </button>
            <button className="btn btn-ghost text-error px-5 py-7 text-xl rounded-lg">
              Let's Talk
            </button>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="border-white border-2 border-b-0 rounded-t-full w-full px-10 pt-10 bg-transparent">
            <div className="bg-white w-full px-10 pt-10 rounded-full bg-radial-[at_25%_25%] from-[#E0F0FF] to-[#fff2f0] to-75%">
              <img
                src={portfolio}
                alt="portfolio"
                style={floatStyle}
                className="h-[50%]"
              />
            </div>
          </div>
          <div className="flex items-center absolute -right-5 top-1/2 -translate-y-1/2 bg-[#ff907f59] p-3 rounded-3xl">
            <h1 className="text-4xl font-bold text-primary mr-2">2+</h1>
            <div>
              <h1 className="font-semibold text-xl">Years</h1>
              <p>experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
