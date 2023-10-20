import { Line } from "react-chartjs-2";

const SalesChart = ({ data }) => {
  return <Line data={data} options={{ maintainAspectRatio: false }} />;
};

export default SalesChart;
