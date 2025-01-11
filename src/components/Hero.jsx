import React from "react";

const Hero = () => {
  return (
    <div className=" w-full h-[100vh] px-4 sm:px-10 2xl:px-80 pt-20 relative overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://huly.io/videos/pages/home/hero/hero.webm?updated=20240607144404"
        autoPlay
        loop
        muted
      ></video>
      <div className="relative z-10 text-white">Hero</div>
    </div>
  );
};

export default Hero;
