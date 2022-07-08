import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import TextLoop from "react-text-loop";
import { motion } from "framer-motion";
import Modal from "./Modal";

const Hero = () => {
  const Animation = {
    offScreen: { y: -100, opacity: 0 },
    onScreen: { y: 1, opacity: 1 },
  };

  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => setShowModal(false);

  return (
    <motion.div
      id="Home"
      initial={"offScreen"}
      whileInView={"onScreen"}
      viewport={{ once: true, amount: 0.5 }}
      className="bg-slate-800 lg:pt-24"
    >
      <motion.div
        variants={Animation}
        transition={{ delay: 5 }}
        className="lg:float-right sm:object-center md:object-center lg:mt-8 lg:mr-20 lg:pr-10 md:p-16 mr-20 md:ml-5 md:pb-5 pl-20"
      >
        <img
          alt="dp"
          height="350"
          width="350"
          className="img-responsive mx-auto lg:mr-36 md:ml-40"
          src={require("../assets/profile-pic.png")}
        ></img>
      </motion.div>
      <main className="ml-20 mt-10 m-auto items-center justify-center pb-20 sm:m-12 sm:px-6 md:ml-40 lg:m-20 lg:px-8 xl:m-28 xl:pl-24">
        <div className="mt-10 pb-20 mr-20 text-center xl:2xl:text-start sm:ml-28 md:ml-3 lg:text-left">
          <motion.h1
            variants={Animation}
            transition={{ delay: 4.5 }}
            className="text-4xl fles flex-col tracking-tight font-extrabold text-gray-400 sm:text-5xl md:text-6xl"
          >
            <span className="block xl:inline">Hi,&nbsp;</span>
            <span className="block text-violet-600 xl:inline">I'm Rohan</span>
            <br />
          </motion.h1>
          <motion.h1
            variants={Animation}
            transition={{ delay: 5.5 }}
            className="flex flex-col text-4xl tracking-tight font-extrabold text-gray-400 sm:text-5xl md:text-6xl"
          >
            <span>Your Next&nbsp;</span>
            <div className="">
              <TextLoop
                springConfig={{ stiffness: 80, damping: 10 }}
                interval={2000}
                className="text-violet-500"
              >
                <span>Web Dev</span>
                <span>Android UI Dev</span>
                <span>Content Writer</span>
              </TextLoop>
            </div>
          </motion.h1>

          <motion.p
            variants={Animation}
            transition={{ delay: 6 }}
            className="mt-3 text-bold text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
          >
            Welcome to my page. In here you will find find me and all the things you need from me. So, what are you waiting for? Head down to the different sections to explore my world.
          </motion.p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 1, opacity: 1 }}
              transition={{ delay: 6.5 }}
              className="rounded-md shadow"
            >
              <button
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-violet-600 hover:bg-violet-800 md:py-4 md:text-lg md:px-10"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                Hire Me
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </motion.div>
          </div>
        </div>
        <Modal onClose={handleOnClose} visible={showModal} />
      </main>
    </motion.div>
  );
};

export default Hero;
