import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const Animation = {
    offScreen: { y: 100, opacity: 0 },
    onScreen: { y: 1, opacity: 1 },
  };

  return (
    <motion.div
      className="container text-slate-100 h-screen w-screen xl:pr-48 xl:pl-44"
      initial={"offScreen"}
      whileInView={"onScreen"}
      viewport={{ once: true, amount: 0.5 }}
      variants={Animation}
      transition={{ delay: 1 }}
      id="Services"
    >
      <div className="md:pt-32">
        <div className="absolute pb-8 z-10 xl:pl-10 pl-16 md:pl-80">
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold inline border-b-4 border-violet-500 xl:ml-6 md:-ml-10 ml-16">
            Services
          </p>
        </div>
        <div className="absolute grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 xl:gap-x-20 md:gap-5 md:ml-10 space-y-5 xl:space-y-8 pt-24 px-10 xl:pl-8 xl:pr-0">
          <div className="absolute w-40 h-40 bg-slate-800 rounded-full z-0 xl:right-52 top-64 "></div>
          <div className="absolute w-80 h-80 bg-slate-800 rounded-full z-0 xl:right-20 bottom-32 "></div>
          <div className="absolute w-60 h-60 bg-slate-800 rounded-full z-0 xl:left-[280px] top-[550px] "></div>
          <article className="mx-auto max-w-sm pb-8 bg-cover bg-center bg-slate-600 bg-opacity-50 backdrop-filter backdrop-blur-md cursor-auto transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
            <img
              className="mx-auto w-full rounded-t-xl"
              src={require("../assets/services/React.png")}
              alt=""
            />
            <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
              Frontend Dev
            </h2>
            <p className="m-4 text-lg p-4 leading-relaxed text-center ">
              Creating web pages that will take your business to a professional
              level. Your site will be responsive, optimized and flexible for
              all users.
            </p>
          </article>

          <article className="mx-auto max-w-sm pb-8 bg-cover bg-center bg-slate-600 bg-opacity-50 backdrop-filter backdrop-blur-md cursor-auto transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
            <img
              className="mx-auto w-full rounded-t-xl"
              src={require("../assets/services/Flutter.png")}
              alt=""
            />
            <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
              Cross Platform Apps
            </h2>
            <p className="m-4 text-lg p-4 leading-relaxed text-center">
              Providing you with native apps that can run on all platforms.
              Making it possible using Google LLC's Flutter&trade; framework.
              You can have uninterrupted and smooth experience with the apps
              provided.
            </p>
          </article>

          <article className="mx-auto max-w-sm pb-8 bg-cover bg-center bg-slate-600 bg-opacity-50 backdrop-filter backdrop-blur-md cursor-auto transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
            <img
              className="mx-auto w-full rounded-t-xl"
              src={require("../assets/services/uiux.png")}
              alt=""
            />
            <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
              UI/UX
            </h2>
            <p className="m-4 text-lg p-4 leading-relaxed text-center ">
              Giving you optimized and improved UI for the web and mobile
              services you use. Making the user experience better and simpler.
            </p>
          </article>

          <article className="mx-auto max-w-sm pb-8 bg-cover bg-center bg-slate-600 bg-opacity-50 backdrop-filter backdrop-blur-md cursor-auto transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
            <img
              className="mx-auto w-full rounded-t-xl"
              src={require("../assets/services/content writing.png")}
              alt=""
            />
            <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
              Web Content Creating
            </h2>
            <p className="m-4 text-lg p-4 leading-relaxed text-center ">
              The web gives huge opportunities for connecting with the world. No
              better way to write to them about what interests you. Putting your
              thoughts in words is just what you get.
            </p>
          </article>

          <article className="mx-auto max-w-sm pb-8 bg-cover bg-center bg-slate-600 bg-opacity-50 backdrop-filter backdrop-blur-md cursor-auto transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
            <img
              className="mx-auto w-full rounded-t-xl"
              src={require("../assets/services/bugfix.png")}
              alt=""
            />
            <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
              Fixing Site Issues
            </h2>
            <p className="m-4 text-lg p-4 leading-relaxed text-center ">
              Making sure your web service is at it's peak while your taking
              your business to new heights. Giving the code base the proper
              optimization will do the trick. The solution to your problematic
              site is just a tap away.
            </p>
          </article>

          <article className="mx-auto max-w-sm pb-8 bg-cover bg-center bg-slate-600 bg-opacity-50 backdrop-filter backdrop-blur-md cursor-auto transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
            <img
              className="mx-auto w-full rounded-t-xl"
              src={require("../assets/services/webapp.png")}
              alt=""
            />
            <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
              WebApp Dev
            </h2>
            <p className="m-4 text-lg p-4 leading-relaxed text-center ">
              Explore the possibility of more customers by taking your business
              online. Making it easier for both you and your clients.
            </p>
          </article>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
