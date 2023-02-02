import React from "react";
import img from "../assets/profile-img.avif";

const About = () => {
  return (
    <div id="about" className="md:p-20 max-sm:p-4 p-10">
      <h2 className="text-4xl">About</h2>
      <div className="w-[70px] h-1 bg-blue-400 my-5"></div>
      <p className="text-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
        earum, facere quo quos aliquam, quasi odio, at dolorem explicabo ullam
        suscipit eum. Doloremque sequi ipsam adipisci quae illo odit suscipit,
        debitis eaque reiciendis voluptas culpa aut voluptatem! Ipsam, enim
        aliquam.
      </p>
      <div className="grid grid-cols-3 gap-4 mt-10">
        <img
          className="lg:col-span-1 col-span-3 rounded shadow"
          src={img}
          alt="/"
        />
        <div className="flex flex-col gap-5 lg:col-span-2 col-span-3">
          <h3 className="text-2xl text-blue-400">
            UI/UX Designer & Web Developer.
          </h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            quaerat dolorum sequi quae voluptate nesciunt expedita maiores
            officia voluptatem laudantium.
          </p>
          <div className="w-full flex max-lg:flex-col gap-10">
            <ul className="flex flex-col gap-5">
              <li className="flex justify-between gap-4">
                <span className="font-bold">Birthday:</span>
                <span>1 May 1995</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="font-bold">Website:</span>
                <span>www.example.com</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="font-bold">Phone:</span>
                <span>+123 456 7890</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="font-bold">City:</span>
                <span>New York, USA</span>
              </li>
            </ul>
            <div className="max-lg:w-full w-1 lg:h-full h-1 bg-blue-400"></div>
            <ul className="flex flex-col gap-5">
              <li className="flex justify-between gap-4">
                <span className="font-bold">Birthday:</span>
                <span>1 May 1995</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="font-bold">Website:</span>
                <span>www.example.com</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="font-bold">Phone:</span>
                <span>+123 456 7890</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="font-bold">City:</span>
                <span>New York, USA</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
