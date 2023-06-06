"use client";
import { Btn } from "../Btn/Index";
import { Stats_box } from "../Stats_box/Index";
import "./index.css";
import Image from "next/image";
import Stock from "../../../../../public/stock.png";
import Chart from "chart.js/auto";
import { useEffect } from "react";
import { log } from "console";

export const Main_container: React.FC = () => {
  useEffect(() => {
    const ctx = document.getElementById(
      "profolio_page_chart"
    ) as HTMLCanvasElement;

    const labels = [
      "1/1",
      "1/2",
      "1/3",
      "1/4",
      "1/5",
      "1/6",
      "1/7",
      "1/8",
      "1/9",
    ];
    const colors = {
      low: "rgba(217, 65, 48,1)",
      high: "rgba(122, 222, 64,1)",
    };

    function getGradient(ctx: any, chartArea: any, scales: any) {
      const gradientBG = ctx.createLinearGradient(
        chartArea.left,
        0,
        chartArea.right,
        0
      );
      const percenage = (tick: Number) => {
        return (
          (scales.x.getPixelForTick(tick) - chartArea.left) / chartArea.width
        );
      };
      let code: any = [];
      a.map((i, index) => {
        if (index < a.length - 1) {
          if (i < a[index + 1]) {
            code.push(
              `gradientBG.addColorStop(${percenage(index)}, '${colors.high}');`
            );
            code.push(
              `gradientBG.addColorStop(${percenage(index + 1)}, '${
                colors.high
              }');`
            );
          } else if (i > a[index + 1]) {
            code.push(
              `gradientBG.addColorStop(${percenage(index)}, '${colors.low}');`
            );
            code.push(
              `gradientBG.addColorStop(${percenage(index + 1)}, '${
                colors.low
              }');`
            );
          }
        }
       
        return eval(code.join(""));
      });

      return gradientBG;
    }

    let a = [11, 99, 20, 3, 8, 100, 1, 40, 70];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "firm 1",
          data: a,
          fill: false,
          borderColor: (context: any) => {
            const chart = context.chart;
            const { ctx, chartArea, scales } = chart;
            if (!chartArea) return null;
            return getGradient(ctx, chartArea, scales);
          },
          tension: 0.35,
        },
      ],
    };

    const myChart = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        responsive: true,
      },
    });
  }, []);

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
          <div className="table_btns">
            <Btn btnTxt="1D" />
            <Btn btnTxt="1W" />
            <Btn btnTxt="1M" />
            <Btn btnTxt="1Y" />
            <Btn btnTxt="MAX" />
          </div>
        </div>

        <div className="third_part">
          <canvas id="profolio_page_chart"></canvas>
        </div>
      </div>
    </div>
  );
};
