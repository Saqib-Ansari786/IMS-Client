import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const StudentGenderRatioChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: data.years,
          datasets: [
            {
              label: "Male Students",
              data: data.maleStudents,
              backgroundColor: "rgba(54, 162, 235, 0.6)", // Light blue bars
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
            {
              label: "Female Students",
              data: data.femaleStudents,
              backgroundColor: "rgba(255, 99, 132, 0.6)", // Light red bars
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: true,
              position: "top", // You can adjust the legend position
            },
          },
          layout: {
            padding: {
              left: 10,
              right: 10,
              top: 10,
              bottom: 10,
            },
          },
        },
      });
    }
  }, [data]);

  return <canvas ref={chartRef} style={{ background: "white" }} width={400} height={200} />;
};

export default StudentGenderRatioChart;
