import Link from "next/link";
import ThemeController from "./ThemeController.js";
const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-[58px] w-screen p-4 z-40 flex flex-row opacity-90 dark:opacity-80 bg-slate-600 dark:bg-gray-900 text-slate-300 dark:text-slate-100 shadow justify-around">
      <div>
      <h1 className="text-slate-50 dark:text-slate-50 italic font-extralight top-[50%] cursor-pointer">
        ShareJams
      </h1></div>
      <div className="flex flex-row text-slate-300 dark:text-slate-200 pr-4 justify-around">
        <Link href="/" className="border-violet-500 hover:text-blue-400 dark:border-violet-300 bpx-3 cursor-pointer">
          Home
        </Link>
        <Link href="/Karaoke"className="border-violet-500 hover:text-blue-400 dark:border-violet-300 px-3 cursor-pointer">
          Karaoke
        </Link>
        <ThemeController />
      </div>
    </nav>
  );
};
export default NavBar;
