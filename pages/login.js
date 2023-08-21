import { getProviders, signIn } from "next-auth/react";
import LogoWhite from "../public/Spotify_LogoWhite.png";
import Image from "next/image";
import "../app/globals.css";
const login = ({ providers }) => {
  return (
    <div className="flex flex-col h-screen justify-around p-12 items-center bg-black">
      <Image alt="LogoWhite" src={LogoWhite} width={300} className="w-1/3" />
      <p className="text-xl">Welcome, to ShareJams V2</p>
      <p className="text-lg">This is a remote app!</p>
      <p className="text-xs font-bold">
        In order to fully enjoy this app you will have to do the following:
      </p>
      <ul className="text-xs font-thin">
        <li>Login to a device with the spotify app.</li>
        <li>Press play on a song of choice then pause it.</li>
        <li>If you are not a Spotify premium member some features may not be available due to the nature of the api.</li>
        <li>Jam on!</li>
      </ul>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-[#31ca6ce0] text-slate-500 rounded-3xl p-3"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
