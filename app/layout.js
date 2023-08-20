import NavBar from "./components/NavBar.js";
import "./globals.css";
import { Inter } from "next/font/google";
import NextAuthSessionProvider from "./providers/sessionProvider.js";
import RecoilProvider from "./providers/recoilProvider.js";
// import { RecoilRoot } from "recoil";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ShareJams V2",
  description: "Share Your Heart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <NavBar /> */}
        <NextAuthSessionProvider>
          <RecoilProvider>{children}</RecoilProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
