import React from "react";
import Photo from "./Photo";
import Abphoto from "./Abphoto";
const AboutMe = () => {
  return (
    <div id="AboutMe" className="about-me mx-auto max-w-6xl p-6">
      <hr className="h-1 bg-gradient-to-r from-pink-500 to-orange-500 border-0 rounded-full" />
      <h1 className="text-pink-700 text-3xl font-bold m-6 text-center">About Me</h1>
      <hr className="h-1 bg-gradient-to-r from-pink-500 to-orange-500 border-0 rounded-full" />
      <div className="about-container flex flex-col lg:flex-row items-center lg:items-start gap-10 mt-11">
        {/* Left */}
        <div className="left text-white w-full lg:w-1/2">
          <h2 className="text-2xl font-serif bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-4">
            Who Am I?
          </h2>
          <p className="text-justify">
            I am a passionate developer specializing in web development and backend engineering.
            My goal is to create impactful and user-friendly solutions. With a strong foundation in 
            computer science and hands-on experience in building projects, I strive to continuously learn 
            and grow in this dynamic field.
          </p>
          <div className="aboutskills ">
    <br />
    <div className="skills text-white flex flex-initial gap-14"><p>HTML & CSS</p>  <hr className="h-1 w-96 mt-3 border-none rounded-full bg-gradient-to-r from-rose-500 via-pink-400 to-orange-400" />
    </div>
    

    <br />
    <div className="skills text-white flex flex-initial gap-16"><p>JAVASCRIPT</p><hr className="h-1 w-80 mt-3 border-none rounded-full bg-gradient-to-r from-rose-500 via-pink-400 to-orange-400" />
</div>

<br />
    <div className="skills text-white flex flex-initial gap-11"><p>TAILWIND CSS</p><hr className="h-1 w-96 mt-3 border-none rounded-full bg-gradient-to-r from-rose-500 via-pink-400 to-orange-400" />
</div>
    

    <br />
    <div className="skills text-white flex flex-initial gap-20"><p>REACT JS</p><hr className="h-1 w-60 mt-3 border-none rounded-full bg-gradient-to-r from-rose-500 via-pink-400 to-orange-400" />
</div>
 

    <br />
    <div className="skills text-white flex flex-initial gap-20"><p>NODE JS</p><hr className="h-1 w-48 mt-3 border-none rounded-full bg-gradient-to-r from-rose-500 via-pink-400 to-orange-400" />
</div>

<br />
    <div className="skills text-white flex flex-initial gap-14"><p>MONGO DB</p><hr className="h-1 w-64 mt-3 border-none rounded-full bg-gradient-to-r from-rose-500 via-pink-400 to-orange-400" />
</div>
     

  

  
</div>
        </div>
        {/* Right */}
        <div className="right w-full lg:w-1/2">
          {/* <img
            src="<Photo/>"
            alt="About Me"
            className="rounded-lg shadow-lg mx-auto"
          /> */}
          <Photo h="96px" w="220vw"/>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
