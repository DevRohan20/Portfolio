import React from "react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

import {
  BsLinkedin,
  BsStackOverflow,
  BsGithub,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="flex w-full min-h-screen justify-center items-center bg-opacity-50 backdrop-filter backdrop-blur-lg"
    >
      <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-gray-800 w-full max-w-6xl p-20 rounded-xl shadow-lg text-slate-100 overflow-hidden">
        <div className="flex flex-col space-y-12 justify-between">
          <div>
            <h1 className="font-bold text-4xl tracking-wide inline border-b-4 border-gray-500">
              Contact Me
            </h1>
            <p className="pt-5">
              Lorem, ipsum dolor sit amet, consectetur adipiscing elit. Enim
              alias ipsum dignissimos voluptatum
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="inline-flex space-x-2 items-center">
              <MdPhone />
              <span className="inline">(+880)1913 775029</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <MdEmail />
              <span className="inline">rohandli2018@gmail.com</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <MdLocationOn />
              <span className="inline">IUT, Gazipur, Dhaka</span>
            </div>
          </div>

          <div className="flex flex-wrap space-x-3">
            <a
              href="www.linkedin.com/in/shadman-arif-rohan-75499b228"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://stackoverflow.com/users/13404046/rohan-shadman-arif"
              target="_blank"
              rel="noreferrer"
            >
              <BsStackOverflow />
            </a>
            <a
              href="https://github.com/DevRohan20"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.instagram.com/devrohan.io/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.facebook.com/rohan.shadmanarif/"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook />
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute w-60 h-60 bg-violet-500 rounded-full z-0 -right-32 -top-32 "></div>
          <div className="absolute w-44 h-44 bg-violet-500 rounded-full z-0 -left-20 -bottom-32 "></div>
          <div className="relative bg-slate-100 text-gray-900 rounded-xl shadow-lg md:w-80 mt-2 p-8 xl:w-[550px]">
            <form action="" className="flex flex-col space-y-4">
              <div>
                <label htmlFor="" className="text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-violet-400"
                ></input>
              </div>
              <div>
                <label htmlFor="" className="text-sm">
                  Email Address
                </label>
                <input
                  type="text"
                  placeholder="Email Address"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-violet-400"
                ></input>
              </div>
              <div>
                <label htmlFor="" className="text-sm">
                  Message
                </label>
                <textarea
                  type="message"
                  placeholder="Email Address"
                  rows="4"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-violet-400"
                ></textarea>
              </div>
              <button className="inline-block self-end bg-violet-500 text-slate-100 rounded-lg px-6 py-2 hover:bg-violet-700">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
