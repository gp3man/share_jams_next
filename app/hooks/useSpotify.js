import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { useEffect } from "react";
import { signIn } from "next-auth/react";
import SpotifyWebApi from "spotify-web-api-node";
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});
const useSpotify = async () => {
  const session = await getServerSession(authOptions);
  useEffect(() => {
    if (session) {
      if (session.error === "RefreshAccessTokenError") signIn();
    }
    spotifyApi.setAccessToken(session.user.accessToken);
  }, [session]);

  return spotifyApi;
};

export default useSpotify;
