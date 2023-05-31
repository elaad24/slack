import "./globals.css"; 
import { Inter } from "next/font/google";

//components
import {Navbar} from "./components/NavBar/Index";
import {HeaderColor} from "./components/HeaderColor/Index"
import {TopHeader} from "./components/TopHeader/Index"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <HeaderColor/>
          <Navbar />
          <div className="_MainBodySection">
            <TopHeader/>
          {children}
          </div>
        </>
      </body>
    </html>
  );
}
