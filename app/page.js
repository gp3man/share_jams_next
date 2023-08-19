import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/options.js";
import { getServerSession } from "next-auth/next";
import Sidebar from "./comps/Sidebar.js";
export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <div className="bg-black h-screen overflow-hidden">
      {session ? (
          <p>Your signed in as {session?.user.name}</p>
        ) : (
          <h1>You need to sign in!!</h1>
        )}
      <main className="">
        <Sidebar />
        {/* center */}
      </main>
    </div>
  );
}
