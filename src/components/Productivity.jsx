import image from "../assets/keyboard.png";

const Productivity = () => {
  return (
    <div className="w-full px-4 sm:px-10 2xl:px-80 2xl:pt-20 relative overflow-hidden py-20 lg:py-40">
      <div>
        <h3 className=" text-3xl lg:text-6xl font-semibold">
          Unmatched productivity
        </h3>
        <p className=" w-full lg:w-[50%] text-sm py-4 md:py-6 font-medium leading-tight">
          Huly is a process, project, time, and knowledge management platform
          that provides amazing collaboration opportunities for developers and
          product teams alike.
        </p>
      </div>
      <div className="cards grid grid-cols-12 gap-4 text-white">
        <div className=" relative col-span-12 sm:col-span-6 md:col-span-4 h-[270px] sm:h-[310px] md:h-[420px] rounded-lg  bg-center bg-cover bg-[url('../src/assets/keyboard.png')]">
          <p className="absolute bottom-0 px-6 pb-4">
            {" "}
            <span className="font-bold">Keyboard shortcuts.</span> Work
            efficiently with instant access to common actions.
          </p>
        </div>
        <div className="relative  col-span-12 sm:col-span-6 md:col-span-8 h-[270px] sm:h-[310px] md:h-[420px] rounded-lg   bg-center bg-cover bg-[url('../src/assets/teamplanner.png')]">
          <p className="absolute bottom-0 px-6 pb-4 w-full sm:w-[60%]">
            {" "}
            <span className="font-bold">Team Planner. </span>Keep track of the
            bigger picture by viewing all individual tasks in one centralized
            team calendar.
          </p>
        </div>
        <div className=" relative col-span-12 sm:col-span-6 md:col-span-8 h-[270px] sm:h-[310px] md:h-[420px] rounded-lg  bg-center bg-cover bg-[url('../src/assets/time.png')]">
          {" "}
          <p className="absolute bottom-0 px-6 pb-4 w-full sm:w-[60%]">
            {" "}
            <span className="font-bold">Time-blocking. </span> Transform daily
            tasks into structured time blocks for focused productivity.
          </p>
        </div>
        <div className=" relative col-span-12 sm:col-span-6 md:col-span-4 h-[270px] sm:h-[310px] md:h-[420px] rounded-lg bg-center bg-cover bg-black  ">
          <video
            className="bg-center bg-cover"
            autoPlay
            loop
            muted
            src="https://huly.io/videos/pages/home/stay-productive/waves.mp4?updated=20240527164544"
          />

          <img className="absolute -top-12 -right-1 sm:right-0 sm:-top-14" src="../src/assets/notification.png" />
          <p className="absolute bottom-0 px-6 pb-4">
            {" "}
            <span className="font-bold">Notifications.</span> Keep up to date
            with any changes by receiving instant notifications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Productivity;
