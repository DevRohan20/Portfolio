import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="About"
      className="w-full text-slate-100 bg-gray-900 lg:pt-36 xl:pb-80 h-[1000px] mt-[3250px] xl:mt-[750px] md:mt-[1000px] h-full md:pb-20"
    >
      <motion.div
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{ once: true, amount: 0.5 }}
        variants={Animation}
        transition={{ delay: 1 }}
        className="max-w-screen-lg p-4 pl-6 mx-auto flex flex-col justify-start w-full h-full lg:ml-44"
      >
        <div className="-ml-8 text-center xl:text-start">
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold inline border-b-4 border-violet-500">
            About Me
          </p>
          <div className="grid xl:grid-cols-2 grid-cols-1 xl:pt-20 pt-8 xl:ml-0 xl:pl-0 pl-20 xl:text-start">
            <div className="items-center">
              <img
                src={require("../assets/About.jpg")}
                alt="DP"
                className="img-responsive pr-16"
              />
            </div>
            <div className="-ml-10 mr-4">
              <div className="text-lg text-slate-100 -mt-2 xl:pl-10 xl:pt-0 pt-10 xl:w-[620px]">
                I am Shadman Arif Rohan. I'm from the city of Jessore,
                Bangladesh. Been here since I was born. Spent my childhood, and
                a great deal of teenage right here. Completed my school and
                college right here in this town.
                <br />
                <br />
                I am currently a sophomore at the Islamic University of
                Technology, majoring in Industrial and Production Engineering.
                <br />
                <br />I was introduced to the world of programming on 2015. I
                have been in love with it ever since.
                <br />
                In 2020, However, I found myself in love with the world of web.
                Also, I started off with Flutter for Android development.
                <br />
                <br />I was fortunate enough to find out about web programming.
                Now I am here to provide you with these technologies to make
                your business available to all your clients.
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
