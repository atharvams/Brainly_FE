import { CubeIcon } from "../icons/Cube";
import TweetIcon from "../icons/TweetIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <div className="h-screen w-72 fixed bg-white left-0 top-0 border-r flex flex-col justify-start">
      <div className="flex items-center justify-center text-3xl font-bold p-3 pb-10">
        <div className="pr-4 text-purple-700">
          <CubeIcon />
        </div>
        Brainly
      </div>
      <div className="ml-4">
        <SidebarItem icon={<TweetIcon />} text="Twitter" />
        <SidebarItem icon={<YoutubeIcon />} text="Youtube" />
      </div>
    </div>
  );
}

export default Sidebar;
