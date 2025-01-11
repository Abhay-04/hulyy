const Header = () => {
  return (
    <div className="px-4 sm:px-10 2xl:px-80 grid grid-cols-12 w-[100%]  py-4 text-white absolute z-50">
      <div className="col-span-6 lg:col-span-2">
        <img
          className="w-20"
          src="https://huly.io/_next/static/media/d97ea0940c0302a26ddd7c1b56cf3346.svg"
        />
      </div>
      <div className=" col-span-6 hidden lg:block">
        <ul className="flex gap-4">
          <li>Pricing</li>
          <li>
            Resorces <i className="ri-arrow-drop-down-line"></i>
          </li>
          <li>
            Community <i className="ri-arrow-drop-down-line"></i>
          </li>
          <li>Download</li>
        </ul>
      </div>
      <div className=" col-span-6 lg:col-span-4">
        <div className="flex gap-4 justify-end items-center">
          <div className="hidden sm:block">
            <button>
              <i className="ri-github-fill text-lg"></i> Star Us
            </button>
          </div>
          <div className="lg:flex gap-4 hidden">
            <button>SignIn</button>
            <button>Get Started</button>
          </div>
          <div className="lg:hidden text-2xl text-white">
            <i className="ri-menu-fill"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
