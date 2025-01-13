import React from "react";

const MetaBrain = () => {
  return (
    <div className="w-full my-20 flex flex-col items-center  text-black px-4 sm:px-10 2xl:px-80 2xl:pt-20 overflow-hidden">
      <div className="sm:pl-60">
        <h3 className=" text-3xl sm:text-7xl font-bold">Huly MetaBrain</h3>
        <p className=" w-full sm:w-[53%] text-md pt-2 sm:pt-4">
          Connect every element of your workflow to build a dynamic knowledge
          base. Soon, Huly AI will turn it into a powerful asset — a second
          brain for your team.
        </p>
      </div>

      <div className="cards grid grid-cols-12 text-gray-400 gap-x-6 gap-y-4 mt-8 sm:mt-20 ">
        <div className="col-span-12  xl:col-span-7 grid grid-cols-12 gap-4">
          <div className=" col-span-12 sm:col-span-4 hidden xl:block"></div>
          <div className="  h-56 rounded-3xl px-4 py-6 col-span-12 sm:col-span-6 xl:col-span-4 bg-cover bg-no-repeat bg-[url('https://huly.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftasks-mobile.abb306cb.jpg&w=640&q=100')]">
            <h3 className="leading-5 ">
              <span className="font-semibold text-white">Create tasks. </span>
              Schedule your personal events and todos.
            </h3>
          </div>
          <div className="  h-56 rounded-3xl px-4 py-6 col-span-12 sm:col-span-6 xl:col-span-4 bg-cover bg-no-repeat bg-[url('https://huly.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplan-work.26bcf442.jpg&w=384&q=100')]">
            <h3 className="leading-5 ">
              <span className="font-semibold text-white"> Plan your work.  </span>
             Visualize your workday in your planner.
            </h3>
          </div>
          <div className="  h-56 rounded-3xl px-4 py-6 col-span-12 sm:col-span-6 xl:col-span-5 bg-cover bg-no-repeat bg-[url('https://huly.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnotes-mobile.2bf5fcba.jpg&w=384&q=100')]">
            <h3 className="leading-5 ">
              <span className="font-semibold text-white">  Take notes. </span>
            
              Create documents to keep track of team resources
            </h3>
          </div>
          <div className="  h-56 rounded-3xl px-4 py-6 col-span-12 sm:col-span-6 xl:col-span-7 bg-cover bg-no-repeat bg-[url('https://huly.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteammates.c5a8e1bf.jpg&w=640&q=100')]">
            <h3 className="leading-5 ">
              <span className="font-semibold text-white">Sync in real time. </span>
               Connect with your team instantly to monitor progress and track updates.
            </h3>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-5 grid grid-cols-12 gap-4">
          <div className="h-56 rounded-3xl px-4 py-6 hidden xl:block col-span-6 bg-contain bg-no-repeat bg-[url('https://huly.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcalendar.74569b09.png&w=256&q=100')]"></div>
          <div className="h-56 rounded-3xl px-4 py-6 col-span-12 sm:col-span-6 bg-cover bg-no-repeat bg-[url('https://huly.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcollab.aa5fcd89.jpg&w=384&q=100')]">
            <h3 className="leading-5 ">
              <span className="font-semibold text-white"> Chat with team.  </span>
             Send DM and create group chats.
            </h3>
          </div>
          <div className="col-span-12 sm:col-span-6 xl:col-span-10 h-56 rounded-3xl px-4 py-6  bg-cover bg-no-repeat bg-[url('https://huly.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpm-mobile.39d0b377.jpg&w=384&q=100')]">
            <h3 className="leading-5 ">
              <span className="font-semibold text-white">Manage projects.</span>
               Customize your workspace to fit the needs of your teams.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaBrain;
