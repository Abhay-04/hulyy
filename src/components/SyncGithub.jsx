import Image from "../assets/Sync.jpg"
import { ADVANCE_FILTERING_ICON_URL, MILESTONE_ICON_URL, MULTIPLE_REPO_ICON_URL, PRIVATE_TASK_ICON_URL, TRACK_PROGRESS_ICON_URL, TWO_WAY_ICON_URL } from "../utils";

const SyncGithub = () => {
  return (
    <div className="w-full h-full flex flex-col   bg-black text-white px-4 sm:px-10  2xl:px-80 py-20 2xl:py-28 mt-20">
      <div>
        <h3 className=" text-4xl sm:text-6xl font-semibold leading-none">
          Sync with GitHub. <br></br> Both ways.
        </h3>
        <p className="text-lg text-gray-500 w-full sm:w-[45%] mt-4 mb-20">
          Manage your tasks efficiently with Huly's bidirectional GitHub
          synchronization. Use Huly as an advanced front-end for GitHub Issues
          and GitHub Projects.
        </p>
      </div>
      <div>
        <img className="w-[90%]" src={Image} />
      </div>
      <div className="cards grid grid-cols-12 mt-10 sm:mt-40 justify-center gap-y-12 sm:gap-y-16">
        <div className="col-span-12 lg:col-span-4">
          <img
            className="size-8"
            src={TWO_WAY_ICON_URL}
          />
          <h4 className=" sm:w-[40%] text-xl sm:text-3xl font-semibold py-2 sm:py-4 sm:leading-8">
            Two-way synchronization
          </h4>
          <p className="text-sm  w-[90%] sm:w-[65%] text-gray-400">
            Integrate your task tracker with GitHub to sync changes instantly.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <img
            className="size-8"
            src={PRIVATE_TASK_ICON_URL}
          />
          <h4 className="sm:w-[40%]  text-xl sm:text-3xl font-semibold py-2 sm:py-4 sm:leading-8">
            Private tasks
          </h4>
          <p className="text-sm  w-[90%] sm:w-[65%] text-gray-400">
            Integration and management of multiple data repositories
            effectively.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <img
            className="size-8"
            src={MULTIPLE_REPO_ICON_URL}
          />
          <h4 className="sm:w-[40%] text-xl sm:text-3xl font-semibold py-2 sm:py-4 sm:leading-8">
            Multiple repositories
          </h4>
          <p className="text-sm  w-[90%] sm:w-[65%] text-gray-400">
            Organize multiple projects for more effective planning and
            collaboration.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <img
            className="size-8"
            src={MILESTONE_ICON_URL}
          />
          <h4 className="sm:w-[40%] text-xl sm:text-3xl font-semibold py-2 sm:py-4 sm:leading-8">
          Milestone migration
          </h4>
          <p className="text-sm  w-[90%] sm:w-[65%] text-gray-400">
          Seamless migration of key project milestones between repositories.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <img
            className="size-8"
            src={TRACK_PROGRESS_ICON_URL}
          />
          <h4 className="sm:w-[40%] text-xl sm:text-3xl font-semibold py-2 sm:py-4 sm:leading-8">
          Track  progress
          </h4>
          <p className="text-sm  w-[90%] sm:w-[65%] text-gray-400">
          Keep track of GitHub contributions and changes within your workspace.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <img
            className="size-8"
            src={ADVANCE_FILTERING_ICON_URL}
          />
          <h4 className="sm:w-[40%] text-xl sm:text-3xl font-semibold py-2 sm:py-4 sm:leading-8">
          Advanced filtering
          </h4>
          <p className="text-sm  w-[90%] sm:w-[65%] text-gray-400">
          Precise project data search with advanced filtering capabilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SyncGithub;
