import { FC } from "react";
import ReactApexChart from "react-apexcharts";
import { priceChartData } from "../utils/chartData.js";

const PriceDetailsChart: FC = () => {
  const series: Array<any> = [{ data: priceChartData }];
  var options: object = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      colors: "#F7931A",
      width: 10,
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
      borderColor: "#F1F1F1",
    },
    xaxis: {
      type: "datetime",
      min: new Date("01 Mar 2012").getTime(),
      tickAmount: 6,

      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: true,
      },
    },
    tooltip: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      colors: "#2F2CD8",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default PriceDetailsChart;
