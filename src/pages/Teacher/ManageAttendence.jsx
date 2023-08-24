import {
  Box,
  Flex,
  Heading,
  Button,
  Text,
  VStack,
  Center,
  HStack,
} from "@chakra-ui/react";
import { CircularProgressBar } from "../../components/pages/Teacher/CircularProgressBar";
import LineChart from "../../components/pages/Teacher/LineChart";

const ManageAttendancePage = () => {
  const totalAttendance = 75; // Example: Total attendance percentage

  return (
    <Box p={4}>
      <Heading size="lg" mb={4} textAlign={"left"}>
        Manage Attendance
      </Heading>

      {/* Button to add attendance */}
      <Button
        backgroundColor="primary.base"
        color={"white.base"}
        _hover={{ backgroundColor: "secondary.hover", color: "white.base" }}
        mb={4}
      >
        Add Attendance
      </Button>

      <Flex direction="column" gap={6} backgroundColor="white.base" p={10}>
        {/* Total attendance */}
        <HStack justifyContent={"space-between"}>
          <VStack align="center" spacing={2} flex={{ base: 1, md: "none" }}>
            <Text fontSize={"2xl"}>Total Attendance</Text>
            <Text fontSize="4xl" fontWeight="bold">
              {totalAttendance}%
            </Text>
          </VStack>

          {/* Circular progress bar */}
          <CircularProgressBar percentage={totalAttendance} />
        </HStack>
        {/* Attendance graph */}
        <Center flex={{ base: 1, md: "auto" }}>
          <LineChart />
        </Center>
      </Flex>
    </Box>
  );
};

export default ManageAttendancePage;
