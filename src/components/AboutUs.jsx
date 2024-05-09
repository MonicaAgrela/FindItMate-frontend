import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-gray-700 to-gray-400 text-white">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
        <div className="video-placeholder md:w-1/2 mb-6 md:mb-0">
          <img className="w-1/2 h-auto" src="/front.png" alt="" />
          {/* Placeholder for video or image */}
          <button className="play-button">{/* Icon for play button */}</button>
        </div>
        <div className="content md:w-1/2">
          <h2 className="text-3xl font-bold mb-3">What's FindItMate?</h2>
          <p className="mb-4">
            From valuable items such as wallets and keys to cherished
            possessions – we are dedicated to assisting until you're reunited
            with what matters most.
          </p>
          <p className="text-sm mb-6">
            Misplaced something? Provide details about your lost item or
            valuable and browse through the listings.
          </p>
          <p className="text-sm mb-6">
            Discovered something? Share descriptions and assist in reconnecting
            it with its rightful owner or aiding someone in reuniting with
            what's important to them.
          </p>
          <Link to="/signup">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Signup now, it's free!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
