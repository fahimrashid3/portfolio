const AboutMe = () => {
  return (
    <div className="max-w-7xl mx-auto md:flex md:gap-10 mt-10 md:mt-16 lg:mt-20">
      <div className="space-y-5 flex-1">
        <div className="text-blue-600 font-semibold">
          <p>About me</p>
          <img src="" alt="" />
        </div>
        <h1 className="font-bold text-5xl">
          Why you <span className="text-orange-600">hire me</span> for your{" "}
          <span className="text-sky-600">next project?</span>
        </h1>
        <p className="text-justify">
          I'm Fahim Rashid, a full-stack web developer skilled in React,
          Tailwind CSS, Node.js, and MongoDB. I build fast, responsive, and
          scalable web applications with clean code and user-friendly design.
          From front-end interfaces to back-end systems, I focus on performance,
          usability, and reliability. <br /> What makes me a strong choice is my
          problem-solving mindset and attention to detail. I listen closely,
          communicate clearly, and deliver on time. If you need a developer
          who's committed to quality and ready to turn your ideas into results —
          I'm here to help.
        </p>
        <button className="bg-orange-500 hover:bg-orange-700 text-white btn px-5 py-7 text-xl rounded-lg">
          Hire Me
        </button>
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default AboutMe;
