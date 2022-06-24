import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import TextLoop from "react-text-loop";
import { motion } from "framer-motion";

const Hero = () => {
  const Animation = {
    offScreen: { y: -100, opacity: 0 },
    onScreen: { y: 1, opacity: 1 },
  };

  return (
    <motion.div
      id="Home"
      initial={"offScreen"}
      whileInView={"onScreen"}
      viewport={{ once: true, amount: 0.5 }}
      className="bg-slate-800 pt-10 lg:pt-32"
    >
      <motion.div
        variants={Animation}
        transition={{ delay: 5 }}
        className="ml-20 lg:float-right sm:object-center md:object-center lg:mt-8 lg:mr-20 lg:pr-10 md:p-16 mr-20 md:ml-20 md:pb-5"
      >
        <img
          alt="dp"
          height="200"
          width="200"
          className="img-responsive mx-auto lg:mr-32 md: lg:mt-8"
          src="https://cdna.artstation.com/p/assets/images/images/021/553/786/large/pawel-mis-angryman2.jpg?1572121270"
        ></img>
      </motion.div>
      <main className="ml-20 mt-10 m-auto items-center justify-center pb-20 sm:m-12 sm:px-6 md:ml-40 lg:m-20 lg:px-8 xl:m-28">
        <div className="mt-10 pb-20 mr-20 sm:text-center sm:ml-28 md:ml-3 lg:text-left">
          <motion.h1
            variants={Animation}
            transition={{ delay: 4.5 }}
            className="text-4xl tracking-tight font-extrabold text-gray-400 sm:text-5xl md:text-6xl"
          >
            <span className="block xl:inline">Hi,&nbsp;</span>
            <span className="block text-violet-600 xl:inline">I'm Rohan</span>
            <br />
          </motion.h1>
          <motion.h1
            variants={Animation}
            transition={{ delay: 5.5 }}
            className="text-4xl tracking-tight font-extrabold text-gray-400 sm:text-5xl md:text-6xl"
          >
            <span>Your Next&nbsp;</span>
            <TextLoop
              springConfig={{ stiffness: 80, damping: 10 }}
              interval={2000}
              className="text-violet-500"
            >
              <span>Web Dev</span>
              <span>Android UI Dev</span>
              <span>Content Writer</span>
            </TextLoop>
          </motion.h1>

          <motion.p
            variants={Animation}
            transition={{ delay: 6 }}
            className="mt-3 text-bold text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
          >
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </motion.p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 1, opacity: 1 }}
              transition={{ delay: 6.5 }}
              className="rounded-md shadow"
            >
              <Link
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-violet-600 hover:bg-violet-800 md:py-4 md:text-lg md:px-10"
              >
                Hire Me
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default Hero;
