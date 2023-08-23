import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import StackedColumnChart from "../../components/pages/Teacher/StackedColumnChart";
import LineChart from "../../components/pages/Teacher/LineChart";
import CircularProgressBar from "../../components/pages/Teacher/CircularProgressBar";

const TeacherDashboard = () => {
  return (
    <Box p={6}>
      <Heading mb={4}>Home Screen</Heading>
      <Flex>
        {/* First Column */}
        <Box flex={1} p={4}>
          <Heading mb={2} size="md">
            Student Statistics
          </Heading>
          <StackedColumnChart />
          {/* Add navigation arrows here */}
        </Box>

        {/* Second Column */}
        <Box flex={1} p={4}>
          <Heading mb={2} size="md">
            Line Chart
          </Heading>
          <LineChart />
        </Box>

        {/* Third Column */}
        <Box flex={1} p={4} alignItems="center">
          <Box display={"flex"} alignItems="center" p={5}>
            <Text size="sm">Class A</Text>
            <CircularProgressBar percentage={75} />
          </Box>
          <Spacer />
          {/* Add more class boxes here */}
          <Box display={"flex"} alignItems="center" p={5}>
            <Text size="sm">Class A</Text>
            <CircularProgressBar percentage={75} />
          </Box>
          <Spacer />

          <Box display={"flex"} alignItems="center" p={5}>
            <Text size="sm">Class A</Text>
            <CircularProgressBar percentage={75} />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default TeacherDashboard;
