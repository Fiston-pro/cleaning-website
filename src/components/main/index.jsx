import React from "react";
import ScheduleMeeting from "../scheduleMeeting";
import SVG from "../../assets/cleaning service-amico.svg"

const Main = () => {
  return (
    <section className="bg-gray-900 text-white py-14 md:py-24 flex flex-col lg:flex-row justify-center items-center " id="main">
      <div className="flex flex-col items-center justify-center lg:w-1/2 mx-2 ">
        <p className="text-2xl md:text-6xl text-center font-bold mb-8">Welcome to Bydgoszcz Cleaning Services</p>
        <p className="text-lg md:text-xl text-center mb-12">We provide professional and reliable cleaning services for your home in Bydgoszcz.</p>
        <ScheduleMeeting/>
      </div>
      <img src={SVG} alt="cleaning service" width={500} height={500} className="mx-auto" />
    </section>
  );
};

export default Main;
