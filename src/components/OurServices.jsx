import React from "react";
import {
  AiOutlineSearch,
  AiOutlineSolution,
  AiOutlineDollar,
} from "react-icons/ai";

const OurServices = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-blue-100 to-white">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold mb-4">
          Enhanced Lost & Found System
        </h2>
        <p className="mb-8">
          Experience an advanced Lost & Found system, utilizing cutting-edge
          technology to streamline item recovery processes and ensure swift
          reunions with your belongings.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <AiOutlineSearch className="text-orange-500 w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Simple Search</h3>
            <p>
              With our patented technology, you can now search for your lost
              items quickly and easily over time.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <AiOutlineSolution className="text-green-500 w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Lost & Found Enhanced by Technology
            </h3>
            <p>
              Utilize tailored solutions crafted for different industries to
              enhance the recovery of lost items effectively.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <AiOutlineDollar className="text-blue-500 w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">100% Free</h3>
            <p>
              This service is provided free of charge in order to help reduce
              your loss and save money.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
