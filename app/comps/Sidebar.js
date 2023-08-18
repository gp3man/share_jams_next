import {
  HiOutlineBuildingLibrary,
  HiOutlineHomeModern,
  HiOutlineMagnifyingGlassCircle,
  HiOutlineHeart,
  HiOutlinePlusCircle,
  HiOutlineRss,
} from "react-icons/hi2";
const Sidebar = () => {
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
      <div className="space-y-4">
        <button className="flex items-center space-x-2 hover:text-slate-50">
          <HiOutlineHomeModern className="w-5 h-5" /> <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-slate-50">
          <HiOutlineMagnifyingGlassCircle className="w-5 h-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-slate-50">
          <HiOutlineBuildingLibrary className="w-5 h-5" />
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1px]"/>
        <button className="flex items-center space-x-2 hover:text-slate-50">
          <HiOutlinePlusCircle className="w-5 h-5" />
          <p>Create Playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-slate-50">
          <HiOutlineHeart className="w-5 h-5" />
          <p>Liked Songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-slate-50">
          <HiOutlineRss className="w-5 h-5" />
          <p>Your Episodes</p>
        </button>
        <hr className="border-t-[0.1px]"/>
        {/* Playlist */}
        <p className="cursor-pointer hover:text-slate-50">
          Playlist name...
        </p>
        <p className="cursor-pointer hover:text-slate-50">
          Playlist name...
        </p>
        <p className="cursor-pointer hover:text-slate-50">
          Playlist name...
        </p>
        <p className="cursor-pointer hover:text-slate-50">
          Playlist name...
        </p>
        <p className="cursor-pointer hover:text-slate-50">
          Playlist name...
        </p>
        <p className="cursor-pointer hover:text-slate-50">
          Playlist name...
        </p> 
      </div>
    </div>
  );
};

export default Sidebar;
