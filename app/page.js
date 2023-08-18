import { redirect } from "next/navigation";
import {authOptions} from "./api/auth/[...nextauth]/options.js"
import { getServerSession } from "next-auth/next"
export default async function Home() {
  const session = await getServerSession(authOptions);
  if(!session){
    redirect('/api/auth/signin')
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>
      {session ? (
        <p>Your signed in as {session?.user.name}</p>
      ):(<h1>You need to sign in!!</h1>)}
    </main>
  )
}
