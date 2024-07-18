import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const ChartUSer = ({ userAmount }) => {
  const [dates, values] = userAmount;
  const data = {
    labels: dates,
    datasets: [
      {
        label: "User Amount",
        data: values,
        fill: false,

        backgroundColor: ["rgb(48, 94, 221)"],
        borderColor: "rgba(54, 162, 235, 1)",
        tension: 0.1,
      },
    ],
  };

  return <Bar data={data} />;
};

export default ChartUSer;
