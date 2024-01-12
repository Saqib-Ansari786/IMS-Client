import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Icon,
  Progress,
  ProgressLabel,
} from "@chakra-ui/react";
import {
  AiOutlineInfoCircle,
  AiOutlineUser,
  AiOutlineClockCircle,
} from "react-icons/ai";

const ReusableStudentDashboardCard = ({
  courseId,
  teacherId,
  registrationDate,
  endDate,
  attendancePercentage,
}) => {
  return (
    <Flex
      p="4"
      bg="white"
      boxShadow="md"
      borderRadius="md"
      width="100%"
      justifyContent="space-between"
    >
      <Box flex="3">
        <Flex direction="column" align="flex-start">
          <Heading size="lg" mb="2">
            {courseId}
          </Heading>
          <Flex fontSize="sm" color="gray.500" mb="2" align="center">
            <Icon as={AiOutlineUser} mr="1" color={"#080F86"} />
            Teacher: {teacherId}
          </Flex>
          <Flex fontSize="sm" color="gray.500" mb="2" align="center">
            <Icon as={AiOutlineClockCircle} mr="1" color={"#080F86"} />
            Start Date: {registrationDate} | End Date: {endDate}
          </Flex>
          <Button
            leftIcon={<AiOutlineInfoCircle />}
            colorScheme="blue"
            variant={"solid"}
            _hover={{ bg: "blue.300", color: "white" }}
          >
            View Course Details
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ReusableStudentDashboardCard;
