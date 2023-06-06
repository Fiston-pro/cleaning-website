import React from "react";
import ScheduleMeeting from "../scheduleMeeting";

const NavBar = () => {
  return (
    <header className=" text-gray-500 py-2 md:py-4 px-3 md:px-8 flex items-center justify-between ">
        <h1 className=" text-base md:text-3xl text-text font-bold">Sparkling Domki</h1>
        <div className="hidden md:flex justify-center items-center gap-8  ">
          <h2 className="ml-2 font-bold hover:text-text cursor-pointer">
            HOME
          </h2>
          <h2 className="ml-2 font-bold hover:text-text cursor-pointer">
            SERVICES
          </h2>
          <h2 className="ml-2 font-bold hover:text-text cursor-pointer">
            REVIEWS
          </h2>
        </div>
        <ScheduleMeeting />
    </header>
  );
};

export default NavBar;
