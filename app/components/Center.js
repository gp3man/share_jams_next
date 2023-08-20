import { authOptions } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import iconWhite from "../../public/Spotify_IconWhite.png"
import Image from "next/image";
import {HiChevronDown} from "react-icons/hi2"
import HeroSec from "./HeroSec";

const Center = async() => {
  const session = await getServerSession(authOptions);

  return (
  <div className="flex-grow">
    <header className="absolute top-5 right-8">
      <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
        {session.user.image ? <img className="rounded-full w-10 h-10"  src={session?.user.image}/> : <Image className="rounded-full w-10 h-10" src={iconWhite} alt="profileSub"/>}
        <h2>{session?.user.name}</h2>
        <HiChevronDown />
      </div>
    </header>
    <HeroSec />
  </div>
  );
}

export default Center;
