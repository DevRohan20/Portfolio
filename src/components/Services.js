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
      viewport={{ once: true, amount: 0.5 }}
      variants={Animation}
      transition={{ delay: 1 }}
      className=" bg-slate-800 w-full text-slate-100 text-center lg:text-start md:text-center pt-20 lg:pt-36 h-fit"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:ml-40 font-bold inline border-b-4 border-gray-500">
        Services
      </h1>

      <div className="relative w-full grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-10 text-center xl:pt-20 xl:pl-20 px-10 py-12 xl:px-40">
        <div className="absolute w-40 h-40 bg-violet-500 rounded-full z-0 right-20 top-64 "></div>
        <div className="absolute w-80 h-80 bg-violet-500 rounded-full z-0 right-20 bottom-32 "></div>
        <div className="absolute w-60 h-60 bg-violet-500 rounded-full z-0 left-[280px] top-[550px] "></div>
        <article className="mx-auto max-w-sm pb-8 bg-cover bg-center bg-slate-700 bg-opacity-50 backdrop-filter backdrop-blur-md cursor-auto transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
          <img
            className="mx-auto w-full rounded-t-xl"
            src="https://penpot.app/images/cross-teams.webp"
            alt=""
          />
          <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
            For cross-domain teams
          </h2>
          <p className="m-4 text-lg p-4 leading-relaxed text-center ">
            Product features and capabilities meant for the different roles in
            the next-decade team. Say goodbye to the legendary pain of the
            design silo.
          </p>
        </article>

        <article className="mx-auto max-w-sm pb-8 bg-cover bg-center bg-slate-700 bg-opacity-50 backdrop-filter backdrop-blur-md cursor-auto transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
          <img
            className="mx-auto w-full rounded-t-xl"
            src="https://penpot.app/images/open-standards.webp"
            alt=""
          />
          <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
            With love and Open Standards
          </h2>
          <p className="m-4 text-lg p-4 leading-relaxed text-center">
            Using SVG as no other prototyping tool does, Penpot files sport
            compatibility with most of the vectorial tools, are tech friendly
            and extremely easy to use in web.
          </p>
        </article>

        <article className="mx-auto max-w-sm pb-8 bg-cover bg-center bg-slate-700 bg-opacity-50 backdrop-filter backdrop-blur-md cursor-auto transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
          <img
            className="mx-auto w-full rounded-t-xl"
            src="https://penpot.app/images/multi-platforms.webp"
            alt=""
          />
          <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
            Multiplatform
          </h2>
          <p className="m-4 text-lg p-4 leading-relaxed text-center ">
            Being web based, Penpot is not dependent on operating systems or
            installations, you will only need to run a modern browser.
          </p>
        </article>

        <article className="mx-auto max-w-sm pb-8 bg-cover bg-center bg-slate-700 bg-opacity-50 backdrop-filter backdrop-blur-md cursor-auto transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
          <img
            className="mx-auto w-full rounded-t-xl"
            src="https://penpot.app/images/multi-platforms.webp"
            alt=""
          />
          <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
            Multiplatform
          </h2>
          <p className="m-4 text-lg p-4 leading-relaxed text-center ">
            Being web based, Penpot is not dependent on operating systems or
            installations, you will only need to run a modern browser.
          </p>
        </article>

        <article className="mx-auto max-w-sm pb-8 bg-cover bg-center bg-slate-700 bg-opacity-50 backdrop-filter backdrop-blur-md cursor-auto transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
          <img
            className="mx-auto w-full rounded-t-xl"
            src="https://penpot.app/images/multi-platforms.webp"
            alt=""
          />
          <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
            Multiplatform
          </h2>
          <p className="m-4 text-lg p-4 leading-relaxed text-center ">
            Being web based, Penpot is not dependent on operating systems or
            installations, you will only need to run a modern browser.
          </p>
        </article>

        <article className="mx-auto max-w-sm pb-8 bg-cover bg-center bg-slate-700 bg-opacity-50 backdrop-filter backdrop-blur-md cursor-auto transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
          <img
            className="mx-auto w-full rounded-t-xl"
            src="https://penpot.app/images/multi-platforms.webp"
            alt=""
          />
          <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
            Multiplatform
          </h2>
          <p className="m-4 text-lg p-4 leading-relaxed text-center ">
            Being web based, Penpot is not dependent on operating systems or
            installations, you will only need to run a modern browser.
          </p>
        </article>
      </div>
    </motion.div>
  );
};

export default Services;
