import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const Animation = {
    offScreen: { y: -100, opacity: 0 },
    onScreen: { y: 1, opacity: 1 },
  };

  return (
    <nav className="relative bg-slate-800">
      <motion.div
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{ once: true, amount: 0.5 }}
        className="w-full"
      >
        <div className="flex items-center h-20 w-full">
          <div className="flex items-center flex-shrink-0">
            <motion.h1
              variants={Animation}
              transition={{ delay: 1 }}
              className="pl-20 font-bold text-2xl cursor-pointer text-slate-100"
            >
              DevRohan<span className="text-violet-500">.io</span>
            </motion.h1>
          </div>

          <div className="flex items-center mx-10 justify-end w-full">
            <div className="hidden md:block">
              <div className="flex justify-between items-center items-center space-x-10">
                <motion.div variants={Animation} transition={{ delay: 1.5 }}>
                  <Link
                    activeClass="Home"
                    to="Home"
                    smooth={true}
                    offset={50}
                    delay={500}
                    className="cursor-pointer bg-slate-900 px-6 py-2.5 rounded-md text-slate-100 font-medium hover:bg-violet-800"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </motion.div>

                <motion.div variants={Animation} transition={{ delay: 2 }}>
                  <Link
                    activeClass="Projects"
                    to="Projects"
                    spy={true}
                    smooth={true}
                    offset={50}
                    delay={500}
                    className="cursor-pointer text-slate-100 hover:bg-violet-500 hover:text-white px-6 py-2.5 rounded-md text-sm font-medium"
                  >
                    Projects
                  </Link>
                </motion.div>

                <motion.div variants={Animation} transition={{ delay: 2.5 }}>
                  <Link
                    activeClass="Services"
                    to="work"
                    smooth={true}
                    offset={50}
                    delay={500}
                    className="cursor-pointer text-slate-100 hover:bg-violet-500 hover:text-white px-6 py-2.5 rounded-md text-sm font-medium"
                  >
                    Services
                  </Link>
                </motion.div>

                <motion.div variants={Animation} transition={{ delay: 3 }}>
                  <Link
                    activeClass="about"
                    to="about"
                    smooth={true}
                    offset={50}
                    delay={500}
                    className="cursor-pointer text-slate-100 hover:bg-violet-500 hover:text-white px-6 py-2.5 rounded-md text-sm font-medium"
                  >
                    About
                  </Link>
                </motion.div>

                <motion.div variants={Animation} transition={{ delay: 3.5 }}>
                  <Link
                    activeClass="contact"
                    to="contact"
                    smooth={true}
                    offset={50}
                    delay={500}
                    className="cursor-pointer text-slate-100 hover:bg-violet-500 hover:text-white px-6 py-2.5 rounded-md text-sm font-medium"
                  >
                    Contact Me
                  </Link>
                </motion.div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <motion.button
                variants={Animation}
                transition={{ delay: 1.5 }}
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="ml-5 bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </motion.button>
            </div>
            <div className="-mr-2 inset-y-0 right-0 flex justify-center items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <motion.button
                variants={Animation}
                transition={{ delay: 4 }}
                type="button"
                className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      <Transition
        show={isOpen}
        enter="transition ease-out delay-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in delay-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div
              ref={ref}
              className="bg-slate-800 px-2 pt-2 pb-3 space-y-1 sm:px-3"
            >
              <Link
                href="/home"
                activeClass="home"
                to="home"
                smooth={true}
                offset={50}
                delay={500}
                className="cursor-pointer hover:bg-violet-500 text-slate-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>

              <Link
                href="/work"
                activeClass="work"
                to="work"
                smooth={true}
                offset={50}
                delay={500}
                className="cursor-pointer hover:bg-violet-500 text-slate-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Projects
              </Link>

              <Link
                href="/services"
                activeClass="services"
                to="services"
                smooth={true}
                offset={50}
                delay={500}
                className="cursor-pointer hover:bg-violet-500 text-slate-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </Link>

              <Link
                href="/about"
                activeClass="about"
                to="about"
                smooth={true}
                offset={50}
                delay={500}
                className="cursor-pointer hover:bg-violet-500 text-slate-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </Link>

              <Link
                href="/contact"
                activeClass="work"
                to="work"
                smooth={true}
                offset={50}
                delay={500}
                className="cursor-pointer bg-violet-500 text-slate-100 hover:bg-violet-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact Me
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Header;
