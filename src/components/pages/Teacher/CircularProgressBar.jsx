import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const CircularProgressBar = ({ percentage }) => {
  return (
    <CircularProgress
      value={percentage}
      color={percentage >= 50 ? "green.400" : "red.400"}
    >
      <CircularProgressLabel>{percentage}%</CircularProgressLabel>
    </CircularProgress>
  );
};

export default CircularProgressBar;
