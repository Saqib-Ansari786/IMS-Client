import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Text,
} from "@chakra-ui/react";

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

const BoxwithCircularProgressBar = ({ percentage, strength }) => {
  return (
    <Box
      display={"flex"}
      alignItems="center"
      p={2}
      backgroundColor={"white"}
      justifyContent="space-between"
    >
      <Box
        alignItems={"center"}
        justifyContent={"flex-start"}
        textAlign={"left"}
      >
        <Text size="md">Class A</Text>
        <Text size={2}>{strength} Registered</Text>
      </Box>
      <CircularProgressBar percentage={percentage} />
    </Box>
  );
};

export default BoxwithCircularProgressBar;
