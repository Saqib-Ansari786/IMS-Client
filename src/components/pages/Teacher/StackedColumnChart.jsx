import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    title: {
      display: true,
      text: "Statistics",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ["Class A", "Class B", "Class C", "Class D"];

const data = {
  labels,
  datasets: [
    {
      label: "Pass",
      data: [75, 80, 70, 85],
      backgroundColor: "#82ca9d",
    },
    {
      label: "Fail",
      data: [75, 80, 70, 85],
      backgroundColor: "#ff8c00",
    },
  ],
};

export default function StackedColumnChart() {
  return <Bar options={options} data={data} />;
}
