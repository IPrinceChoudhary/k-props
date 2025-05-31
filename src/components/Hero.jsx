import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import hero from "@/assets/hero.mp4"

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
  <div className="relative w-full h-full">
    <video
      className="absolute w-full h-full"
      autoPlay
      loop
      muted
      playsInline
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        height: "100vh",
        minWidth: "177.77vh", // 16:9 aspect ratio
        minHeight: "56.25vw", // 16:9 aspect ratio
        objectFit: "cover",
      }}
    >
      <source src={hero} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
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
