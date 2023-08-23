import { FC } from "react";
import ReactApexChart from "react-apexcharts";
import { priceChartData } from "../utils/chartData.js";

const PriceChart: FC = () => {
  const series: Array<any> = [{ data: priceChartData }];
  const options: object = {
    chart: {
      id: "area-datetime",
      type: "line",
      height: 150,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      colors: "#1E2E50",
      width: 2,
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={150}
      />
    </div>
  );
};

export default PriceChart;
