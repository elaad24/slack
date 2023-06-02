"use client";
import "./index.css";
import { Main_container } from "../components/portfolio/main_container/Index";
import { Second_container } from "../components/portfolio/Second_container/Index";
export default function Portfolio() {
  return (
    <div className="portfolio">
      <Main_container />
      <Second_container/>
    </div>
  );
}
