import React from "react";
import { MdClose } from "react-icons/md";
import { SiUpwork, SiFiverr } from "react-icons/si";
import { motion } from "framer-motion";

const Modal = ({ visible, onClose }) => {
  if (!visible) return null;

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  const Animation = {
    offScreen: { y: 100, opacity: 0 },
    onScreen: { y: 1, opacity: 1 },
  };

  return (
    <motion.div
      className="fixed inset-0 shadow-xl flex justify-center items-center text-xl text-slate-100"
      onClick={handleOnClose}
      id="container"
      initial={"offScreen"}
      whileInView={"onScreen"}
      viewport={{ once: true, amount: 0.5 }}
      variants={Animation}
      transition={{ delay: 0.3 }}
    >
      <div className="absolute flex flex-col bg-slate-700 text-center rounded-lg p-6 pb-16 space-y-3 xl:space-y-10 xl:h-[530px] xl:w-[500px]">
        <button
          type="button"
          onClick={onClose}
          className="relative inline-flex text-slate-100 border-none rounded-none opacity-100 self-end focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
        >
          <MdClose className="h-6 w-6 color-slate-100" />
        </button>

        <div className="pt-4">
          <a
            href="https://www.upwork.com/workwith/shadmanarifrohan"
            target="_blank"
            rel="noreferrer"
          >
            <button className="relative divide-x bg-violet-500 py-8 px-6 rounded-xl inline-flex space-x-2 items-center">
              <SiUpwork className="h-8 w-8 inline mt-2 mr-5 ml-5" />
              <span className="inline pl-5">
                &nbsp;Connect with me on Upwork
              </span>
            </button>
          </a>
        </div>

        <div>Or,</div>

        <div>
          <a href=" https://www.fiverr.com/rohanarif" target="_blank" rel="noreferrer">
            <button className="relative divide-x bg-violet-500 py-8 px-6 rounded-xl inline-flex space-x-2 items-center">
              <SiFiverr className="h-20 w-20 inline -my-5 -mx-2 mr-5 ml-5" />
              <span className="inline px-7">&nbsp;Hit me up on Fiverr</span>
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;
