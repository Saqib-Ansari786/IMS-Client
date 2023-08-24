import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Attendence",
    },
  },
};

const data = {
  labels: ["Class A", "Class B", "Class C", "Class D"],
  datasets: [
    {
      label: "Data",
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: "#8884d8",
      fill: false,
    },
  ],
};

export default function LineChart() {
  return <Line options={options} data={data} flex={1} />;
}
