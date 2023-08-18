import {authOptions} from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"
export default function Home() {
  const session = await getServerSession(authOptions)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>
      {session ? (
        <p>Your signed in as {session?.user}</p>
      ):(<h1>You need to sign in!!</h1>)}
    </main>
  )
}
