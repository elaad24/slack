"use client";
import { useEffect, useState } from "react";
import "./index.css";

export const Stats_box: React.FC<{
  title: string;
  stat: number;
  positibe: boolean;
  finel_sum: number;
}> = ({ title, stat, positibe = true, finel_sum = 10000 }) => {
  const [finel_number, setFinel_number] = useState("0");

  useEffect(() => {
    setFinel_number(
      finel_sum.toLocaleString("en-EG", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 3,
      })
    );
  }, [finel_sum]);
  return (
    <div className="Stats_box">
      <div className="top_row">
        <div className="title">{title}</div>
        {positibe ? (
          <div className="posotive_stats">{stat}</div>
        ) : (
          <div className="negtive_stats">{stat}</div>
        )}
      </div>
      <div className="finel_sum">{finel_number}</div>
    </div>
  );
};