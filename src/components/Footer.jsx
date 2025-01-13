import { CLOCK_FOOTER_VIDEO_URL, HEART_ICON_URL, SLACK_ICON_URL } from "../utils";

const Footer = () => {
  return (
    <div className="  flex flex-col  items-center sm:items-end text-white w-full h-full px-4 sm:px-10 2xl:px-80 2xl:pt-20 relative overflow-hidden pt-20 bg-black">
      <video
        className="absolute top-10 left-30 sm:top-48 sm:left-80 size-60 sm:size-96 object-bottom "
        src={CLOCK_FOOTER_VIDEO_URL}
        autoPlay
        loop
        muted
      ></video>

      <div className="upper text-center sm:text-start mt-72 sm:mt-40 z-50">
        <h4 className=" text-4xl sm:text-6xl font-semibold leading-none">
          Join the <br></br> Movement
        </h4>
        <p className="text-md w-full sm:w-[60%] py-4">
          Unlock the future of productivity with Huly. Remember, this journey is
          just getting started.
        </p>
        <div className="flex sm:flex-row items-center flex-col gap-x-4 text-xs font-extrabold">
          <button className="px-12 py-3 border rounded-full mt-4 lg:mt-8 bg-[#d1d1d1] text-[#5A250A] ">
            START NOW
          </button>
          <button className="px-6 py-3 border rounded-full mt-4 lg:mt-8 bg-[#000000] text-[#ffffff] border-[#ff990a5e]">
            <div className="flex items-center gap-x-2">
              <img
                className="size-4"
                src={SLACK_ICON_URL}
              />
              <span>JOIN OUR SLACK</span>
            </div>
          </button>
        </div>
      </div>
      <div className="lower z-50 self-center sm:self-start  grid grid-cols-12 gap-y-6 sm:gap-y-0 sm:gap-x-6 mb-6 mt-10 sm:mt-56 text-sm">
        <div className="col-span-12 sm:col-span-3 self-center">
          <p className="text-gray-500">
            Copyright © 2025 Huly Labs. All rights reserved.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-3 flex justify-center items-center gap-3 text-gray-400">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
        </div>
        <div className="col-span-12 sm:col-span-3 text-xl flex items-center justify-center gap-x-3 text-gray-400">
          <span>
            <i className="ri-twitter-x-line"></i>
          </span>
          <span>
            <i className="ri-linkedin-box-fill"></i>
          </span>
          <span>
            <i className="ri-github-fill"></i>
          </span>
          <span>
            <i className="ri-youtube-fill"></i>
          </span>
          <span>
            <i className="ri-slack-line"></i>
          </span>
          <span>
            <i className="ri-news-fill"></i>
          </span>
        </div>
        <div className="col-span-12 sm:col-span-3 flex items-center justify-center">
          <img
            className="size-12"
            src={HEART_ICON_URL}
          ></img>
          <p className="text-transparent bg-gradient-to-r from-[#f58041] to-[#e4dacc] bg-clip-text">
            Made with passion and Huly
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

