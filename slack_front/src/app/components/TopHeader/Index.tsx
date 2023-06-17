'use client';
import "./index.css";
import {Weather} from "./TopHeader/Weather/Index"
import { Searchbar } from "./TopHeader/Searchbar/Index";
import { Personal_header_btn } from "./TopHeader/Personal_header_btn/Index";

export const TopHeader:React.FC= ()=> {
  return(
    <div className="TopHeader">
      <Weather />
      <Searchbar/>
      <Personal_header_btn/>
    </div>
  )
}
