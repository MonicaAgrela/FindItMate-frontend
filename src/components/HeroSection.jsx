import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-blue-100 text-blue-900">
      <div className="container mx-auto px-4 py-12 md:flex md:items-center md:justify-between">
        <div className="mb-6 md:mb-0 md:w-1/2">
          <h1 className="text-4xl font-bold mb-3">
            The Online Avenue to Reunion
          </h1>
          <p className="mb-4">Lost something? Find it here...</p>
          <p className="text-sm mb-6">
            Welcome to FindItMate site where you may find lost and locate lost
            product mostly in no time! – or whose owner you lost.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign up now, it's free
          </button>
        </div>
        <div className="md:w-1/2">
          {/* Place your illustration here */}
          <img src="/hero2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
