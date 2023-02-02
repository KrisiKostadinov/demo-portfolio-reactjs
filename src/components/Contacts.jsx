import React from "react";
import { CiLocationOn } from "react-icons/ci";

const Contacts = () => {
  return (
    <div id="contacts" className="md:p-20 max-sm:p-4 p-10">
      <h2 className="text-4xl">Contacts</h2>
      <div className="w-[70px] h-1 bg-blue-400 my-5"></div>
      <p className="my-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum rem
        laudantium ipsa iusto, vero magni ratione sunt quasi praesentium sit
        repellat ex enim eaque quae atque iste, unde voluptate ipsam nihil. Vel
        officiis sed eius, minima vitae harum inventore.
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        <div className="p-10 shadow-lg h-fit">
          <ul className="flex flex-col gap-10">
            <li className="flex items-center gap-4">
              <CiLocationOn size={40} />
              <div>
                <div className="text-2xl">Location:</div>
                <div className="text-gray-600">A108 Adam Street, New York, NY 535022</div>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <CiLocationOn size={40} />
              <div>
                <div className="text-2xl">Location:</div>
                <div className="text-gray-600">A108 Adam Street, New York, NY 535022</div>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <CiLocationOn size={40} />
              <div>
                <div className="text-2xl">Location:</div>
                <div className="text-gray-600">A108 Adam Street, New York, NY 535022</div>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <CiLocationOn size={40} />
              <div>
                <div className="text-2xl">Location:</div>
                <div className="text-gray-600">A108 Adam Street, New York, NY 535022</div>
              </div>
            </li>
          </ul>
        </div>
        <form className="flex flex-col gap-6 p-10 shadow-lg">
          <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-10">
            <div>
              <label htmlFor="first-name" className="text-lg mb-2 inline-block">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                className="w-full px-5 py-3 focus:outline-none border border-gray-400 focus:border-blue-400 duration-500"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="text-lg mb-2 inline-block">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                className="w-full px-5 py-3 focus:outline-none border border-gray-400 focus:border-blue-400 duration-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="text-lg mb-2 inline-block">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-5 py-3 focus:outline-none border border-gray-400 focus:border-blue-400 duration-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-lg mb-2 inline-block">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-5 py-3 focus:outline-none border border-gray-400 focus:border-blue-400 duration-500"
            />
          </div>
          <button type="submit" className="px-5 py-3 text-white bg-blue-500 hover:bg-blue-900 rounded duration-500">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
