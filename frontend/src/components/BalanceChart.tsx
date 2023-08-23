import { FC } from "react";
import ReactApexChart from "react-apexcharts";

const BalanceChart: FC = () => {
  const series: Array<any> = [44, 55, 13, 33];
  const options: object = {
    series: [44, 55, 13, 33],
    chart: {
      height: 220,
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    labels: ["Bitcoin", "Tether", "Tezos", "Monero"],
    fill: {
      colors: [
        "rgba(47, 44, 216, 0.81)",
        "rgba(47, 44, 216, 0.71)",
        "rgba(47, 44, 216, 0.51)",
        "rgba(47, 44, 216, 0.31)",
      ],
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      show: false,
      position: "right",
      offsetY: 0,
      height: 150,
    },
  };

  return (
    <div id="balance-chart">
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        height={220}
      />
    </div>
  );
};

export default BalanceChart;
