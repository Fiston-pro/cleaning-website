import React from 'react';

import IMG1 from '../../assets/clean-house.png';
import IMG2 from '../../assets/house-keeping.png';
import IMG3 from '../../assets/mop.png';

const ServicesSection = () => {
  return (
    <section className="bg-gray-100 py-24" id='services' >
      <div className="text-center m-2">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 flex flex-col items-center">
            <div className=" bg-blue-500 text-white rounded-full p-6">
              <img src={IMG1} alt="Clean House" className=' w-16 h-16 ' />
            </div>
            <h3 className="text-xl font-bold mb-4">Regular Cleaning</h3>
            <p className="text-gray-700">We offer regular cleaning services tailored to your specific needs. Our cleaners will ensure that your home stays clean and tidy on a regular basis.</p>
          </div>
          <div className="bg-white rounded-lg p-8 flex flex-col items-center">
            <div className=" bg-blue-500 text-white rounded-full p-6">
              <img src={IMG2} alt="Clean House" className=' w-16 h-16 ' />
            </div>
            <h3 className="text-xl font-bold mb-4">Deep Cleaning</h3>
            <p className="text-gray-700">Our deep cleaning services are designed to thoroughly clean every nook and cranny of your home, leaving it fresh and sanitized.</p>
          </div>
          <div className="bg-white rounded-lg p-8 flex flex-col items-center">
            <div className=" bg-blue-500 text-white rounded-full p-6">
              <img src={IMG3} alt="Clean House" className=' w-16 h-16 ' />
            </div>
            <h3 className="text-xl font-bold mb-4">Move-in/Move-out Cleaning</h3>
            <p className="text-gray-700">If you're moving in or out of a home, our professional cleaners can provide a thorough cleaning service to make the process easier.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
