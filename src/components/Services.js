import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const Animation = {
    offScreen: { y: -100, opacity: 0 },
    onScreen: { y: 1, opacity: 1 },
  };

  return (
    <motion.div
      id="Services"
      initial={"offScreen"}
      whileInView={"onScreen"}
      viewport={{once:true, amount:0.5}}
      variants={Animation}
      transition={{ delay: 1 }}
      className="bg-slate-800 w-full text-slate-100 text-center lg:text-start md:text-center lg:pt-28 lg:pb-80 md:h-screen"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:ml-40 font-bold inline border-b-4 border-gray-500">
        Services
      </h1>
    </motion.div>
  );
};

export default Services;
