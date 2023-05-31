'use client';
import "./index.css";
import {Weather} from "../Weather/Index"
import { Searchbar } from "../Searchbar/Index";
import { Personal_header_btn } from "../Personal_header_btn/Index";

export const TopHeader:React.FC= ()=> {
  return(
    <div className="TopHeader">
      <Weather />
      <Searchbar/>
      <Personal_header_btn/>
    </div>
  )
}
