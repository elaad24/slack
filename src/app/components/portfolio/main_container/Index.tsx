"use client";
import { Btn } from "../Btn/Index";
import { Stats_box } from "../Stats_box/Index";
import "./index.css";
import Image from "next/image";
import Stock from "../../../../../public/stock.png";

export const Main_container: React.FC = () => {
  return (
    <div className="Main_container">
      <div className="first_row">
        dsa da
        <div className="btns">
          <Btn btnTxt="withdraw" btnInvert={true} />
          <Btn btnTxt="deposit +" />
        </div>
      </div>

      <div className="second_row">
        <Stats_box
          v1={true}
          finel_sum={42069}
          positibe={true}
          stat={24}
          title="my balance"
        />
        <Stats_box
          v1={true}
          finel_sum={20619}
          positibe={true}
          stat={28}
          title="investment"
        />
        <Stats_box
          v1={true}
          finel_sum={8664}
          positibe={true}
          stat={22}
          title="totoal gain"
        />
        <Stats_box
          v1={true}
          finel_sum={1212}
          positibe={false}
          stat={20}
          title="total loss"
        />
      </div>

      <div className="third_row">
        <div className="first_part">
          <div>overview statistic</div>
          <div className="btns">
            <Btn icon={true} document={true} />
            <Btn icon={true} star={true} />
            <Btn icon={true} gear={true} />
          </div>
        </div>
        <div className="second_part">
          <div className="card">
            <Image
              className="img"
              src={Stock}
              width={40}
              height={40}
              alt="stock icon"
            />
            <Stats_box
              v2={true}
              finel_sum={8664}
              positibe={true}
              stat={22}
              title="origin game ea inc. (orea)"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
