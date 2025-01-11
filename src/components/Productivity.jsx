const Productivity = () => {
  return (
    <div className="w-full px-4 sm:px-10 2xl:px-80 2xl:pt-20 relative overflow-hidden py-20 lg:py-40">
      <div>
        <h3 className=" text-3xl lg:text-6xl font-semibold">Unmatched productivity</h3>
        <p className=" w-full lg:w-[50%] text-sm py-4 md:py-6 font-medium leading-tight">
          Huly is a process, project, time, and knowledge management platform
          that provides amazing collaboration opportunities for developers and
          product teams alike.
        </p>
      </div>
      <div className="cards grid grid-cols-12 gap-4 ">
        <div className=" col-span-12 sm:col-span-6 md:col-span-4 h-[270px] sm:h-[310px] md:h-[420px] rounded-lg  bg-red-400">1</div>
        <div className=" col-span-12 sm:col-span-6 md:col-span-8 h-[270px] sm:h-[310px] md:h-[420px] rounded-lg bg-green-300">2</div>
        <div className=" col-span-12 sm:col-span-6 md:col-span-8 h-[270px] sm:h-[310px] md:h-[420px] rounded-lg bg-green-300"> 3</div>
        <div className=" col-span-12 sm:col-span-6 md:col-span-4 h-[270px] sm:h-[310px] md:h-[420px] rounded-lg bg-red-400">4</div>
      </div>
    </div>
  );
};

export default Productivity;
