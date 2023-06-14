"use client";
import { Btn } from "../Btn/Index";
import { Stats_box } from "../Stats_box/Index";
import "./index.css";
import Image from "next/image";
import Stock from "../../../../../public/stock.png";
import Chart from "chart.js/auto";
import { useEffect } from "react";
import { findHighest, findLowest } from "@/app/utils";

export const Main_container: React.FC = () => {
  useEffect(() => {
    //  settings for the chart
    const ctx = document.getElementById(
      "profolio_page_chart"
    ) as HTMLCanvasElement;

    const labels = ["1/1", "1/2", "1/3", "1/4", "1/5", "1/6"];
    const colors = {
      low: "rgba(217, 65, 48,1)",
      high: "rgba(122, 222, 64,1)",
    };

    function getGradient(
      ctx: any,
      chartArea: any,
      scales: any,
      data: Number[]
    ) {
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
      data.map((i, index) => {
        if (index < data.length - 1) {
          if (i < data[index + 1]) {
            code.push(
              `gradientBG.addColorStop(${percenage(index)}, '${colors.high}');`
            );
            code.push(
              `gradientBG.addColorStop(${percenage(index + 1)}, '${
                colors.high
              }');`
            );
          } else if (i > data[index + 1]) {
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

    let a = [0.73, 0.8, 0.77, 0.6, 0.47, 0.95];
    let b = [3824.14, 4016.22, 4012.32, 4027.81, 4169.48, 4221.02];
    const maxValueYexeb = Math.max(...b) * 1.33;
    const minValueYexeb = Math.min(...b) * 1.33;

    const marketPresentegChange = b.map((i, index) => {
      if (index != 0) {
        const prevValue = b[index - 1];
        return Math.round(((i - prevValue) / prevValue) * 100 * 100) / 100;
      } else return 0;
    });

    const compenyValueChange = a.map((i, index) => {
      if (index != 0) {
        const prevValue = a[index - 1];
        return Math.round(((i - prevValue) / prevValue) * 100 * 100) / 100;
      } else return 0;
    });

    const maxValueYexe = Math.max(...a) * 1.33;
    const minValueYexe = Math.min(...a) - Math.min(...a) * 0.33;

    const footer = (tooltipItems: any[]) => {
      let data = "";
      tooltipItems.forEach((tooltipItem) => {
        data = tooltipItem.dataset.data[tooltipItem.dataIndex];
      });
      return `data - ${data}`;
    };
    const title = (tooltipItems: any[]) => {
      let header = "";
      tooltipItems.forEach((tooltipItem) => {
        header = tooltipItem.dataset.label;
      });
      return `stock - ${header}`;
    };
    const beforeBody = (tooltipItems: any[]) => {
      let stockValue = "";
      tooltipItems.forEach((tooltipItem) => {
        stockValue =
          tooltipItem.dataset.originalStockData[tooltipItem.dataIndex];
      });
      return `stock value - $${stockValue}`;
    };
    const afterBody = (tooltipItems: any[]) => {
      let stockChange = "";
      tooltipItems.forEach((tooltipItem) => {
        stockChange = tooltipItem.dataset.data[tooltipItem.dataIndex];
      });
      return `stock change - ${stockChange}`;
    };

    const data = {
      labels: labels,
      datasets: [
        {
          label: "firm 1",
          data: compenyValueChange,
          originalStockData: a,
          fill: false,
          borderColor: (context: any) => {
            const chart = context.chart;
            const { ctx, chartArea, scales } = chart;
            if (!chartArea) return null;
            return getGradient(ctx, chartArea, scales, a);
          },
          tension: 0.35,
          pointRadius: 10,
          pointHoverRadius: 25,
          pointStyle: "rectRounded",
        },
        {
          label: "sp 500",
          data: marketPresentegChange,
          originalStockData: b,

          fill: false,
          borderColor: (context: any) => {
            const chart = context.chart;
            const { ctx, chartArea, scales } = chart;
            if (!chartArea) return null;
            return getGradient(ctx, chartArea, scales, b);
          },
          tension: 0.35,
          pointRadius: 10,
          pointHoverRadius: 25,
          pointStyle: "rectRounded",
        },
      ],
    };

    const config = new Chart(ctx, {
      type: "line",
      data: data,

      options: {
        
        responsive: true,

        scales: {
          x: {
            grid:{
              color:"rgba(255,255,255,0.3)"
            },
            ticks: {
              color: "rgba(255,255,255,1)",
            },
            display: true,
            title: {
              display: true,
            },
          },
          y: {
            grid:{
              color:"rgba(255,255,255,0.3)"
            },
            ticks: {
              color: "rgba(255,255,255,1)",
            },
            display: true,
            title: {
              display: true,
              color: "rgba(255,255,255,1)",
              text: "% change ",
            },
            suggestedMin: minValueYexe,
            suggestedMax: maxValueYexe,

            // min: minValueYexe,
            // max: maxValueYexe,
          },
        },
        plugins: {
          legend: {
            labels: {
              color: "rgba(227, 227, 227,1)",
              font: {
                size: 18,
              },
            },
          },

          tooltip: {
            callbacks: {
              title: title,
              beforeBody: beforeBody,
              afterBody: afterBody,
              footer: footer,
            },
          },
        },
      },
    });
    
  }, []);
  useEffect(() => {
    if (window.innerWidth >= 999) {
      Chart.defaults.font.size = 18;
    } else {
      Chart.defaults.font.size = 12;
    }
  }, [window.innerWidth]);

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
          positive={true}
          stat={24}
          title="my balance"
        />
        <Stats_box
          v1={true}
          finel_sum={20619}
          positive={true}
          stat={28}
          title="investment"
        />
        <Stats_box
          v1={true}
          finel_sum={8664}
          positive={true}
          stat={22}
          title="totoal gain"
        />
        <Stats_box
          v1={true}
          finel_sum={1212}
          positive={false}
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
              positive={true}
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
