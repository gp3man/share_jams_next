import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/options.js";
import { getServerSession } from "next-auth/next";
import Sidebar from "./components/Sidebar.js";
import Center from "./components/Center.js";
import Head from "next/head.js";
// import Player from "./components/Player.js";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }
  console.log(session)

  return (
    <div className="bg-black h-screen overflow-hidden">
      {/* <Head>
        <title>ShareJams V2</title>
      </Head> */}
      <main className="flex">
        <Sidebar />
        <Center />
      </main>
      <div className="sticky bottom-0">
        {/* <Player /> */}
      </div>
    </div>
  );
}
// export async function getServerSideProps(context){
//   const session = await getSession(context);
//   return{
//     props:{
//       session,
//     },
//   }
// }
