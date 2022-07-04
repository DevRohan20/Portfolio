import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const Animation = {
    offScreen: { y: -10, opacity: 0 },
    onScreen: { y: 1, opacity: 1 },
  };

  return (
    <motion.div
      initial={"offScreen"}
      whileInView={"onScreen"}
      viewport={{ once: true, amount: 0.5 }}
      variants={Animation}
      transition={{ delay: 1 }}
      className="items-start"
    >
      <main
        id="Projects"
        className="relative bg-slate-800 w-full text-slate-100 text-center lg:text-start md:text-center lg:-ml-10 mr-72 lg:pt-40 md:pt-32 lg:pb-80 md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-start w-full h-full lg:ml-44">
          <div className="pb-8 z-1">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold inline border-b-4 border-gray-500">
              Projects
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>

          <div className="grid z-10 sm:grid-cols-2 md:grid-cols-2 gap-4 px-12 sm:px-0 bg-opacity-50 backdrop-filter backdrop-blur-lg">
            <div className="shadow-md shadow-gray-600 rounded-lg h-80 w-72">
              <img
                src="https://source.unsplash.com/random/1600x900"
                alt=""
                className="rounded-md duration-200 hover:scale-105"
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
        <div className="absolute w-40 h-40 bg-violet-500 rounded-full z-0 left-[800px] top-64 "></div>
        <div className="absolute w-80 h-80 bg-violet-500 rounded-full z-0 right-20 bottom-32 "></div>
        <div className="absolute w-60 h-60 bg-violet-500 rounded-full z-0 left-[280px] top-[550px] "></div>
      </main>
    </motion.div>
  );
};

export default Projects;
