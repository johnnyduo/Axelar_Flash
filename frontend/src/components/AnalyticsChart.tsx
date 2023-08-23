import { FC } from "react";
import ReactApexChart from "react-apexcharts";
import { analyticChartData } from "../utils/chartData";

const AnalyticChart: FC = () => {
  const series: Array<any> = analyticChartData;
  var options: object = {
    chart: {
      height: 270,
      type: "area",
      animations: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#2F2CD8", "#341CBD"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
      borderColor: "#F1F1F1",
    },
    xaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      fontSize: "14px",
      fontFamily: "Spartan",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 100, 100],
      },
    },
  };

  return (
    <div id="chartx">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={270}
      />
    </div>
  );
};

export default AnalyticChart;
