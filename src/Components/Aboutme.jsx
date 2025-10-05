import React from "react";
import Photo from "./Photo"; // Make sure Photo component returns an image or image JSX

const AboutMe = () => {
  const skillsLeft = [
    { skill: "HTML & CSS", width: "90%" },
    { skill: "JAVASCRIPT", width: "85%" },
    { skill: "TAILWIND CSS", width: "80%" },
    { skill: "REACT JS", width: "85%" },
    { skill: "NODE JS", width: "75%" },
  ];

  const skillsRight = [
    { skill: "MONGO DB", width: "70%" },
    { skill: "JWT", width: "65%" },
    { skill: "NEXT JS", width: "30%" },
    
    { skill: "REDUX TOOLKIT", width: "55%" },
    { skill: "JAVA", width: "75%" }, // Added Java skill
  ];

  return (
    <div id="AboutMe" className="about-me mx-auto max-w-6xl p-6">
      <hr className="h-1 bg-gradient-to-r from-pink-500 to-orange-500 border-0 rounded-full" />
      <h1 className="text-pink-700 text-3xl font-bold m-6 text-center">About Me</h1>
      <hr className="h-1 bg-gradient-to-r from-pink-500 to-orange-500 border-0 rounded-full" />

      {/* Description and Photo Row */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 mt-11">
        {/* Description */}
        <div className="text-white w-full lg:w-1/2">
          <h2 className="text-2xl font-serif bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-4">
            Who Am I?
          </h2>
          <p className="text-justify text-sm sm:text-base md:text-lg">
            I am a passionate Full Stack Developer with expertise in both frontend and backend engineering. My goal is to create impactful, user-friendly solutions by seamlessly bridging design and functionality. With a strong foundation in computer science and hands-on experience in building projects across the tech stack, I thrive in crafting efficient, scalable, and dynamic applications. Continuously learning and adapting in this ever-evolving field, I aim to develop innovative solutions that enhance user experiences and drive digital transformation.

          </p>
        </div>

        {/* Photo */}
        <div className="w-full lg:w-1/2 flex justify-center mt-4 lg:mt-0">
          <Photo />
        </div>
      </div>

      {/* Skills Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 mt-10 text-white">
        {/* Left Skill Column */}
        <div className="w-full lg:w-1/2">
          {skillsLeft.map(({ skill, width }) => (
            <div key={skill} className="skills flex items-center gap-4 mb-4">
              <p className="w-40 text-sm sm:text-base text-left">{skill}</p>
              <div className="flex-grow">
                <div
                  className="h-1 rounded-full bg-gradient-to-r from-rose-500 via-pink-400 to-orange-400"
                  style={{ width }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Skill Column */}
        <div className="w-full lg:w-1/2">
          {skillsRight.map(({ skill, width }) => (
            <div key={skill} className="skills flex items-center gap-4 mb-4">
              <p className="w-40 text-sm sm:text-base text-left">{skill}</p>
              <div className="flex-grow">
                <div
                  className="h-1 rounded-full bg-gradient-to-r from-rose-500 via-pink-400 to-orange-400"
                  style={{ width }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;