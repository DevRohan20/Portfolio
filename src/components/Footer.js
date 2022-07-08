import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[350px] bg-slate-900 xl:px-64 xl:py-24 px-10 py-20 text-center xl:text-start text-slate-100">
      <div className="flex xl:flex-row flex-col gap-y-8 xl:gap-64">
        <div className="xl:w-[400px]">
          This website was made entirely by me using React, TailwindCSS and some
          other React animation libraries. 
        </div>
        <div className="px-24 xl:px-0 text-center">DevRohan.IO 2022-2023<br />All rights reserved.</div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
