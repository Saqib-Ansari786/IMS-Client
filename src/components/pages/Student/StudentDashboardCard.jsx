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
import { useSelector } from "react-redux";
import { selectTeachers } from "../../../store/redux-slices/teachers_slice";
import { selectCourses } from "../../../store/redux-slices/courses_slice";

const ReusableStudentDashboardCard = ({
  courseId,
  teacherId,
  registrationDate,
  endDate,
  attendancePercentage,
}) => {
  const teachers = useSelector(selectTeachers);
  const courses = useSelector(selectCourses);

  const teacherData = teachers?.find((teacher) => teacher._id === teacherId);
  const courseData = courses?.find((course) => course._id === courseId);
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
            {courseData?.courseCode}
          </Heading>
          <Flex fontSize="sm" color="gray.500" mb="2" align="center">
            <Icon as={AiOutlineUser} mr="1" color={"#080F86"} />
            Teacher: {teacherData?.firstname + " " + teacherData?.lastname}
          </Flex>
          <Flex fontSize="sm" color="gray.500" mb="2" align="center">
            <Icon as={AiOutlineClockCircle} mr="1" color={"#080F86"} />
            Start Date: {registrationDate}
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
