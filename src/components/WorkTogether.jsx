import videoFrameImg from "../assets/videoframe.jpg";

const WorkTogether = () => {
  return (
    <div className="w-full h-auto px-2 sm:px-10 2xl:px-80 2xl:pt-20 overflow-hidden ">
      <div className="flex flex-col   2xl:px-52">
        <div className="  flex flex-col text-black px-4 sm:px-10 ">
          <h3 className=" text-3xl leading-8 sm:text-7xl  font-bold ">
            Work together. <br></br> Like in the office.
          </h3>
          <p className=" w-full sm:w-[65%]  leading-5 text-md sm:text-lg font-normal pb-10 pt-4">
            Create customized virtual office spaces for any department or event
            with high quality audio and video conferencing.
          </p>
          <img className="rounded-md" src={videoFrameImg} />
          <p className="w-[95%] leading-tight py-10 text-md sm:text-2xl font-medium">
            Collaborating with remote teams is easy in your virtual office
            environment. Enjoy real-time communication within your workspace
            without additional software hassle.
          </p>
        </div>

        <div>
          <div className="cards grid grid-cols-12 pl-4 sm:pl-8 gap-y-12 sm:gap-20 ">
            <div className="col-span-12 sm:col-span-4">
              <img
                className="size-10"
                src="https://huly.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcustomize.03200dd0.png&w=48&q=100"
              />
              <h3 className="w-[40%] text-xl sm:text-2xl py-1 sm:py-3 font-semibold leading-6">
                Customize workspace
              </h3>
              <p className="leading-5 text-gray-500 w-full sm:w-[85%]">
                Create your own offices and meeting rooms to suit your team's
                needs.
              </p>
            </div>
            <div className="col-span-12 sm:col-span-4">
              <img
                className="size-10"
                src="https://huly.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvideo.e4ea1f4b.png&w=48&q=100"
              />
              <h3 className="w-[60%] text-xl sm:text-2xl py-1 sm:py-3 font-semibold leading-6">
                Audio and video calls
              </h3>
              <p className="leading-5 text-gray-500 w-full sm:w-[85%]">
                Collaborate efficiently and seamlessly with high quality virtual
                conferencing.
              </p>
            </div>
            <div className="col-span-12 sm:col-span-4">
              <img
                className="size-10"
                src="https://huly.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finvite.043fb941.png&w=48&q=100"
              />
              <h3 className="w-[40%] text-xl sm:text-2xl py-1 sm:py-3 font-semibold leading-6">
                Invite guests
              </h3>
              <p className="leading-5 text-gray-500 w-full sm:w-[85%]">
                Meet with guests without ever needing to leave your workspace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
