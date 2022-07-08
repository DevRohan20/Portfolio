import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const Animation = {
    offScreen: { y: 10, opacity: 0 },
    onScreen: { y: 1, opacity: 1 },
  };

  return (
    <motion.div
      initial={"offScreen"}
      whileInView={"onScreen"}
      viewport={{ once: true, amount: 0.5 }}
      variants={Animation}
      transition={{ delay: 1 }}
      className="items-start bg-slate-800"
    >
      <main
        id="Projects"
        className="bg-slate-800 text-slate-100 text-center lg:text-start md:text-center w-screen xl:pl-20 lg:-ml-10 lg:pt-40 md:pt-32 lg:pb-80 md:h-screen"
      >
        <div className="relative max-w-screen-lg p-4 mx-auto flex flex-col justify-start w-screen h-screen lg:ml-44 pl-10 xl:pl-5">
          <div className="absolute pb-8 z-10 pl-5 xl:pl-0 md:pl-56">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold inline border-b-4 border-violet-500 xl:ml-0 ml-16">
              Projects
            </p>
          </div>
          <div className="grid grid-cols-1 bg-slate-600">
            <div className="absolute z-10 shadow-md shadow-gray-600 rounded-lg xl:mt-32 mt-28 h-80 w-80 bg-opacity-50 backdrop-filter backdrop-blur-lg">
              <img
                src="https://source.unsplash.com/random/1600x900"
                alt=""
                className="rounded-md duration-200"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default Projects;
