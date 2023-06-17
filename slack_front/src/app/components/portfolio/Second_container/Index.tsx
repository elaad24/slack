"use client";
import "./index.css";

import Image from "next/image";
import { Btn } from "../Btn/Index";
import Stock from "../../../../../public/stock.png";
import { useEffect } from "react";
import Chart from "chart.js/auto";

export const Second_container: React.FC = () => {
  useEffect(() => {
    //  settings for the chart
    const ctx = document.getElementById(
      "profolio_page_doughnut_chart"
    ) as HTMLCanvasElement;

    let combine_lable_data = [
      { color: "red", label: "institutional holders,", data: 57.95 },
      { color: "teal", label: "Apple insiders,", data: 18.11 },
      { color: "blue", label: " retail investors,", data: 41.94 },
    ];

    const data = {
      labels: combine_lable_data.map((data) => data.label),
      datasets: [
        {
          label: "%",
          data: combine_lable_data.map((data) => data.data),
          backgroundColor: combine_lable_data.map((data) => data.color),
          hoverOffset: 4,
          spacing: 8,
          borderRadius: 10,
        },
      ],
    };

    const textForInnerCircul = { header: "", value: "", titleColor: "white" };

    const innerText = {
      id: "profolio_page_doughnut_chart",
      beforeDatasetsDraw: (
        chart: { getDatasetMeta?: any; ctx?: any; data?: any },
        args: any,
        pluginOptions: any
      ) => {
        const { ctx, data } = chart;
        ctx.save();
        const xcoor = chart.getDatasetMeta(0).data[0].x;
        const ycoor = chart.getDatasetMeta(0).data[0].y;
        ctx.font = "bold 20px sans-serif";
        ctx.fillStyle = textForInnerCircul.titleColor;
        ctx.textAlign = "center";
        ctx.textbaseLine = "middle";
        ctx.fillText(`${textForInnerCircul.header}`, xcoor, ycoor);
        ctx.font = "bold 30px sans-serif";
        ctx.fillStyle = "rgba(255,255,255,1)";
        ctx.textAlign = "center";
        ctx.textbaseLine = "middle";
        ctx.fillText(`${textForInnerCircul.value}`, xcoor, ycoor + 35);
      },
    };

    const getData = (tooltipItems: any[]) => {
      tooltipItems.forEach((tooltipItem) => {
        textForInnerCircul.header = tooltipItem.label;
        textForInnerCircul.value = `${tooltipItem.formattedValue}%`;
        textForInnerCircul.titleColor = `${
          tooltipItem.dataset.backgroundColor[tooltipItem.dataIndex]
        }`;
      });
      return "";
    };

    const config = new Chart(ctx, {
      type: "doughnut",
      data: data,
      plugins: [innerText],
      options: {
        responsive: true,
        cutout: 95,
        plugins: {
          title: {
            display: true,
            text: "compeny shareholders percentage",
            font: {
              size: 20,
            },
            color: "rgba(255,255,255,1)",
          },
          legend: { display: false },
          tooltip: {
            callbacks: {
              footer: getData,
            },
          },
        },
      },
    });
  }, []);

  const prev_close = 17112;
  const stat = 26;
  const positive = true;

  return (
    <div className="Second_container ">
      <div className="heaer">
        <Image
          className="img"
          src={Stock}
          width={30}
          height={30}
          alt="stock icon"
        />
        <div className="text_title_group">
          <div className="title">origin game ea inc.</div>
          <div className="sub_title">(orea)</div>
        </div>
      </div>

      <div className="baner">
        <div className="background"></div>
        <div className="title">my profolio </div>
        <div className="amount">
          {Number(8089).toLocaleString("en-EG", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 3,
          })}
        </div>
      </div>

      <div className="website_link">
        <a href="www.google.com" target="_blank">
          www.google.com
        </a>
      </div>

      <div className="doughnut_chart">
        <canvas id="profolio_page_doughnut_chart"></canvas>
      </div>

      <div className="data_card">
        <div className="date">1 January - 1 June</div>
        <div className="card">
          <div className="card_row">
            <div className="title">prev close</div>
            <div className="usd_value">
              {prev_close.toLocaleString("en-EG", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 3,
              })}
            </div>
          </div>
          <div className="card_row">
            <div className="title">% change</div>
            <div className="value">
              {positive ? (
                <div className="posotive_stats">{stat}</div>
              ) : (
                <div className="negtive_stats">{stat}</div>
              )}
            </div>
          </div>
          <div className="card_row">
            <div className="title">market cap</div>
            <div className="usd_value">28 m usd</div>
          </div>
          <div className="card_row">
            <div className="title">PE Ration</div>
            <div className="value">14.28%</div>
          </div>
        </div>
      </div>

      <div className="buttons">
        <Btn btnTxt="withdraw" btnInvert={true} />
        <Btn btnTxt="deposit +" />
      </div>
    </div>
  );
};
