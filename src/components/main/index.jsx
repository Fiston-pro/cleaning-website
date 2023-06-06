import React from "react";
import ScheduleMeeting from "../scheduleMeeting";
const Main = () => {
  return (
    <section className="bg-gray-900 text-white py-14 md:py-24">
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl md:text-6xl text-center font-bold mb-8">Welcome to Bydgoszcz Cleaning Services</p>
        <p className="text-lg md:text-xl text-center mb-12">We provide professional and reliable cleaning services for your home in Bydgoszcz.</p>
        <ScheduleMeeting/>
      </div>
    </section>
  );
};

export default Main;
