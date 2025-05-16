import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Vimeo Iframe - Using Vimeo's Recommended Embed Approach */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="relative w-full h-full">
          <iframe
            src="https://player.vimeo.com/video/1084603541?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&background=1&muted=1"
            className="absolute w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100vw",
              height: "100vh",
              minWidth: "177.77vh" /* 16:9 aspect ratio */,
              minHeight: "56.25vw" /* 16:9 aspect ratio */,
            }}
          ></iframe>
        </div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-8">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Available For Rent Office
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Find your ideal space with our exclusive office rentals designed for
            comfort, convenience, and productivity.
          </p>
        </div>
        <div className="flex">
          <Link to="/contact">
            <Button className="bg-[#D1A315] cursor-pointer mr-8 text-lg p-6">
              Rent
            </Button>
          </Link>
          <Link to="/contact">
            <Button className="bg-[#D1A315] cursor-pointer text-lg p-6">
              Buy
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
