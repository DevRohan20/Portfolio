import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const Animation = {
    offScreen: { y: -100, opacity: 0 },
    onScreen: { y: 1, opacity: 1 },
  };
  return (
    <nav className="sticky top-0 z-30 bg-slate-800/60 backdrop-filter backdrop-blur-lg">
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
              className="xl:pl-52 pl-10 font-bold text-2xl cursor-pointer text-slate-100"
            >
              DevRohan<span className="text-violet-500">.io</span>
            </motion.h1>
          </div>

          <div className="flex items-center mx-10 justify-end w-full xl:pr-32">
            <div className="hidden md:block">
              <div className="flex justify-between items-center items-center space-x-6">
                <motion.div variants={Animation} transition={{ delay: 1.5 }}>
                  <Link
                    activeClass="Home"
                    onClick={scroll.scrollToTop}
                    to="/"
                    smooth={true}
                    offset={50}
                    delay={300}
                    className={`cursor-pointer text-slate-100 hover:bg-violet-500 hover:text-white px-6 py-2.5 rounded-md text-sm font-medium`}
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
                    delay={300}
                    className={`cursor-pointer text-slate-100 hover:bg-violet-500 hover:text-white px-6 py-2.5 rounded-md text-sm font-medium`}
                  >
                    Projects
                  </Link>
                </motion.div>

                <motion.div variants={Animation} transition={{ delay: 2.5 }}>
                  <Link
                    activeClass="Services"
                    to="Services"
                    smooth={true}
                    offset={50}
                    delay={300}
                    className={`cursor-pointer text-slate-100 hover:bg-violet-500 hover:text-white px-6 py-2.5 rounded-md text-sm font-medium`}
                  >
                    Services
                  </Link>
                </motion.div>

                <motion.div variants={Animation} transition={{ delay: 3 }}>
                  <Link
                    activeClass="About"
                    to="About"
                    smooth={true}
                    offset={50}
                    delay={300}
                    className={`cursor-pointer text-slate-100 hover:bg-violet-500 hover:text-white px-6 py-2.5 rounded-md text-sm font-medium`}
                  >
                    About
                  </Link>
                </motion.div>

                <motion.div variants={Animation} transition={{ delay: 3.5 }}>
                  <Link
                    activeClass="Contact"
                    to="Contact"
                    smooth={true}
                    offset={50}
                    delay={300}
                    className={`cursor-pointer text-slate-100 hover:bg-violet-500 hover:text-white px-6 py-2.5 rounded-md text-sm font-medium`}
                  >
                    Contact Me
                  </Link>
                </motion.div>
              </div>
            </div>
            <div className="-mr-5 flex md:hidden">
              <motion.button
                variants={Animation}
                transition={{ delay: 1.5 }}
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="ml-5 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
                    className="h-6 w-6"
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
              className="absolute w-full bg-slate-800 px-2 pt-2 pb-3 space-y-1 sm:px-3"
            >
              <Link
                activeClass="Home"
                to="Home"
                smooth={true}
                offset={50}
                delay={500}
                className="cursor-pointer hover:bg-violet-500 text-slate-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>

              <Link
                activeClass="Projects"
                to="Projects"
                smooth={true}
                offset={50}
                delay={500}
                className="cursor-pointer hover:bg-violet-500 text-slate-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Projects
              </Link>

              <Link
                activeClass="Services"
                to="Services"
                smooth={true}
                offset={50}
                delay={500}
                className="cursor-pointer hover:bg-violet-500 text-slate-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </Link>

              <Link
                activeClass="About"
                to="About"
                smooth={true}
                offset={50}
                delay={500}
                className="cursor-pointer hover:bg-violet-500 text-slate-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </Link>

              <Link
                activeClass="work"
                to="work"
                smooth={true}
                offset={50}
                delay={500}
                className="cursor-pointer text-slate-100 hover:bg-violet-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
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
