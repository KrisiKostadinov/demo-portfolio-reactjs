import React from "react";
import bg from "../assets/bg.jpg";

const Hero = () => {
  return (
    <div id="home" className="relative w-full h-screen">
      <img className="w-full h-full object-cover" src={bg} alt="/" />
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center w-full">
        <p className="text-white text-2xl">Web Developer</p>
        <div className="bg-white w-[80px] h-1 my-5"></div>
        <h1 className="text-white md:text-5xl text-4xl font-bold">Megan Smith</h1>
      </div>
    </div>
  );
};

export default Hero;
