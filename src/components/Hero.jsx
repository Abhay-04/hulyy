import React from "react";

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white grid grid-col-12 px-4 sm:px-10 2xl:px-80 2xl:pt-20 relative overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover "
        src="https://huly.io/videos/pages/home/hero/hero.webm?updated=20240607144404"
        autoPlay
        loop
        muted
      ></video>
      <div className="relative z-10 text-white ">
        <h2 className=" text-3xl 2xl:text-7xl font-bold pt-24 ">
          Everything App <br></br> for your teams
        </h2>
        <p className=" text-md 2xl:text-lg w-full xl:w-[40%] py-6 leading-normal">
          Huly, an open-source platform, serves as an all-in-one replacement of
          Linear, Jira, Slack, and Notion.
        </p>
        <button className="capitalize px-14 py-2 border rounded-full mt-8 bg-[#d1d1d1] text-[#5A250A] font-semibold">
          TRY IT FREE <i className="ri-arrow-right-long-line ml-1"></i>
        </button>
      </div>
      <div className="z-10  w-[90%]  2xl:w-[80%] 2xl:mt-36">
        <img
          className="absolute bottom-[141px] left-2 rounded-t-[10px] lg:bottom-[138px] lg:left-9 lg:w-[873px] md:bottom-[9.5%] md:left-0 md:w-[78.4%] md:rounded-t-md sm:relative sm:bottom-auto sm:mt-[18.7%] sm:w-[100.5%] sm:min-w-[100.5%] sm:rounded-t xs:mt-[21.6%] xs:w-full xs:min-w-[376px] 2xs:mt-[70px]"
          src="https://huly.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-illustration.7100a376.jpg&w=1920&q=75"
        />
      </div>

      <div className="relative z-10 grid-col-2">
        <h4>sjdasgfdsfa</h4>
      </div>
    </div>
  );
};

export default Hero;
