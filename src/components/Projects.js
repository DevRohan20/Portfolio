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
      viewport={{once:true, amount:0.5}}
      variants={Animation}
      transition={{ delay: 1 }}
      className="items-start"
    >
      <main
        id="Projects"
        className="bg-slate-800 w-full text-slate-100 text-center lg:text-start md:text-center lg:-ml-10 mr-72 lg:pt-40 lg:pb-80 md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-start w-full h-full lg:ml-44">
          <div className="pb-8">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold inline border-b-4 border-gray-500">
              Projects
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            <div className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src=""
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
      </main>
    </motion.div>
  );
};

export default Projects;
