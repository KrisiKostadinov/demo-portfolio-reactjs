import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaViber,
  FaHome,
  FaPhone,
  FaUser,
  FaServicestack,
} from "react-icons/fa";
import { CgFileDocument, CgMenu } from "react-icons/cg";
import { TfiViewList } from "react-icons/tfi";

import profilePic from "../assets/profile-img.avif";

const items = [
  {
    key: "Home",
    link: "home",
    icon: FaHome,
  },
  {
    key: "About",
    link: "about",
    icon: FaUser,
  },
  {
    key: "Resume",
    link: "resume",
    icon: CgFileDocument,
  },
  {
    key: "Portfolio",
    link: "portfolio",
    icon: TfiViewList,
  },
  {
    key: "Services",
    link: "services",
    icon: FaServicestack,
  },
  {
    key: "Contacts",
    link: "contacts",
    icon: FaPhone,
  }
];

const RenderIcon = ({ icon }) => {
  const Icon = icon;
  return (
    <Icon size={24} />
  )
}

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 768 && !nav) {
        setNav(true);
      } else if (window.innerWidth <= 768 && nav) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [window.innerWidth]);

  return (
    <header>
      <div
        className="md:hidden fixed right-5 top-5 w-[60px] h-[60px] text-white bg-blue-500 rounded-full flex justify-center items-center max-md:z-10"
        onClick={handleNav}
      >
        <CgMenu size={24} />
      </div>
      <div
        className={`z-10 fixed w-[300px] h-screen px-5 text-slate-50 bg-black duration-500 ${
          !nav ? "translate-x-[-100%]" : ""
        }`}
      >
        <div className="w-full flex justify-center">
          <div className="w-[200px] h-[200px]">
            <img
              src={profilePic}
              alt="Kristian Kostadinov"
              className="w-full h-full hover:border-4 hover:shadow-lg object-cover border-slate-800 duration-300 rounded-full"
            />
          </div>
        </div>
        <h4 className="my-5 text-center text-2xl font-bold">
          Megan Smith
        </h4>
        <div className="flex justify-center gap-2">
          <a
            href="#"
            className="w-[32px] h-[32px] flex justify-center items-center bg-slate-800 shadow-lg hover:bg-sky-300 cursor-pointer rounded-full"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="#"
            className="w-[32px] h-[32px] flex justify-center items-center bg-slate-800 shadow-lg hover:bg-sky-300 cursor-pointer rounded-full"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="#"
            className="w-[32px] h-[32px] flex justify-center items-center bg-slate-800 shadow-lg hover:bg-sky-300 cursor-pointer rounded-full"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="#"
            className="w-[32px] h-[32px] flex justify-center items-center bg-slate-800 shadow-lg hover:bg-sky-300 cursor-pointer rounded-full"
          >
            <FaViber size={18} />
          </a>
        </div>
        <nav>
          <ul className="mt-10 flex flex-col gap-7 text-lg">
            {items.map((item, index) => (
              <li className="flex items-center gap-5" key={index} onClick={handleNav}>
                <RenderIcon icon={item.icon} />
                <a href={`/#${item.link}`}>{item.key}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
