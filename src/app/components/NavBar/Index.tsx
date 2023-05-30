'use client';
import "./index.css";
import chart from "../../../../public/chart.png";
import chat from "../../../../public/chat.png";
import chip from "../../../../public/chip.png";
import friends from "../../../../public/friends.png";
import id from "../../../../public/id.png";
import netflix from "../../../../public/netflix.png";
import next from "../../../../public/next.svg";
import portfolio2 from "../../../../public/portfolio2.png";
import portfolio from "../../../../public/portfolio.png";
import spotify from "../../../../public/spotify.png";

import Image from "next/image";
import { usePathname } from 'next/navigation';
import { ReactElement, useEffect } from "react";
import Link from 'next/link';




 export const Navbar:React.FC= ()=> {

  const currentPage = usePathname();

  console.log("currentPage",currentPage);
  
  const mainDomain =currentPage.split("/")[1];

  console.log(mainDomain);
  useEffect(()=>{

    document.getElementById(mainDomain)?.parentElement?.classList.add("active_button")
    console.log("byid",mainDomain)
    return()=>{
      
      document.getElementById(mainDomain)?.parentElement?.classList.remove("active_button")
    }
  },[mainDomain])


  return (
    <nav className="navbar">
      <div>
      <Link href="/portfolio">

        <button>

        <Image id="portfolio" src={portfolio} width={20} height={20} alt="profolio icon" />
        </button>
      </Link>
      
      
      <Link href="/">
  <button>
        <Image id="market_stats" src={chart} width={20} height={20} alt="chart icon" />
        </button></Link>    
      <Link href="/">
  <button>
        <Image id="personal_info" src={id} width={20} height={20} alt="id icon" />
        </button></Link>
      <Link href="/">
  <button>
        <Image id="friends" src={friends} width={20} height={20} alt="friends icon" />
        </button></Link>
        </div>
      <div>
      <Link href="/">
  <button>
        <Image id="chat" src={chat} width={20} height={20} alt="chat icon" />
        </button></Link>
      <Link href="/">
  <button>
        <Image id="spotify" src={spotify} width={20} height={20} alt="spotify icon" />
        </button></Link>
      <Link href="/">
  <button>
        <Image id="netflix" src={netflix} width={20} height={20} alt="netflix icon" />
        </button></Link>
      <Link href="/">
  <button>
        <Image id="chat_gpt" src={chip} width={20} height={20} alt="chip icon" />
        </button></Link>
      </div>
    </nav>
  );
}

