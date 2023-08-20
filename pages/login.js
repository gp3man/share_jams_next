
import {getProviders, signIn} from "next-auth/react"
import LogoGreen from "../public/Spotify_LogoGreen.png"
import Image from "next/image";
import '../app/globals.css'
const login = ({providers}) => {
  return (
  <div className=" flex flex-col h-screen justify-around p-12 items-center bg-black">
    <Image alt="LogoGreen" src={LogoGreen} width={300} className="w-1/3"/>
    <p >Welcome, to ShareJams V2</p>
    <p>This is a remote app.</p>

    {Object.values(providers).map((provider)=>(
      <div key={provider.name}>
        <button className="bg-[#18D860] text-slate-500 rounded-3xl p-3" onClick={()=> signIn(provider.id, {callbackUrl: "/"})}>Login with {provider.name}</button>
        </div>
    ))}

    </div>
  );
}

export default login;

export async function getServerSideProps(){
  const providers = await getProviders();
  return {
    props:{
      providers,
    },
  }
}
