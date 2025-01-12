const WorkTogether = () => {
  return (
    <div className="w-full h-auto px-4 sm:px-10 2xl:px-80 2xl:pt-20  flex flex-col items-between justify-center ">
      {/* Video Background */}
      {/* <video
        className="absolute bg-cover w-full h-auto object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source
          src="https://huly.io/videos/pages/home/work-together/waves.mp4?updated=20240524151254"
          type="video/mp4"
        />
      </video> */}

      <div className=" bg-red-400 flex justify-center flex-col text-black px-4 sm:px-10 ">
        <h3 className="text-7xl  font-bold ">
          Work together. <br></br> Like in the office.
        </h3>
        <p className="w-[90%] py-4">
          Create customized virtual office spaces for any department or event
          with high quality audio and video conferencing.
        </p>
        <img className="size-52" src="../src/assets/videoframe.png" />
        <p>
          Collaborating with remote teams is easy in your virtual office
          environment. Enjoy real-time communication within your workspace
          without additional software hassle.
        </p>
      </div>

      <div className=" bg-green-400 z-10  ">
        <div className="cards grid grid-cols-4 ">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
