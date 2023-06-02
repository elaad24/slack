"use client";
import { Btn } from "../Btn/Index";
import { Stats_box } from "../Stats_box/Index";
import "./index.css";
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
          finel_sum={42069}
          positibe={true}
          stat={24}
          title="my balance"
        />
        <Stats_box
          finel_sum={20619}
          positibe={true}
          stat={28}
          title="investment"
        />
        <Stats_box
          finel_sum={8664}
          positibe={true}
          stat={22}
          title="totoal gain"
        />
        <Stats_box
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
            <span>&</span>
            <span>^</span>
            <span>@</span>
          </div>
        </div>
      </div>
    </div>
  );
};
