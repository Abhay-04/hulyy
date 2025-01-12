

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white grid grid-col-12 px-4 sm:px-10 2xl:px-80 2xl:pt-20 relative overflow-hidden">
      <video
        className="absolute w-full h-full object-center  2xl:object-top"
        src="https://huly.io/videos/pages/home/hero/hero.webm?updated=20240607144404"
        autoPlay
        loop
        muted
      ></video>
      <div className="z-10 text-white ">
        <h2 className=" text-3xl lg:text-7xl font-bold pt-24 ">
          Everything App <br></br> for your teams
        </h2>
        <p className=" text-md lg:text-lg w-[58%] lg:w-[50%] py-3 lg:py-6 leading-normal">
          Huly, an open-source platform, serves as an all-in-one replacement of
          Linear, Jira, Slack, and Notion.
        </p>
        <button className="capitalize px-14 py-2 border rounded-full mt-4 lg:mt-8 bg-[#d1d1d1] text-[#5A250A] font-semibold">
          TRY IT FREE <i className="ri-arrow-right-long-line ml-1"></i>
        </button>
      </div>
      <div className="z-10 w-[80%] lg:w-[95%] 2xl:w-[82.8%] mt-20 lg:mt-64 2xl:mt-56">
        <img
          src="https://huly.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-illustration.7100a376.jpg&w=1920&q=75"
          className="relative "
        />
      </div>
     

      <div className=" z-10 grid-col-2 pt-16 pb-20">
        <h4 className="text-[#8a8888] mb-2">
          Everything you need for productive team work:
        </h4>
        <ul className="flex gap-5">
          <li>Team Planner</li>
          <li>Project Management</li>
          <li>Virtual Office</li>
          <li>Chat</li>
          <li>Documents</li>
          <li>Inbox</li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
