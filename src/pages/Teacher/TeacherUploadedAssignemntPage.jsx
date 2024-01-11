import { Box, SimpleGrid, Heading } from "@chakra-ui/react";
import UploadedAssignmentCard from "../../components/pages/Teacher/UploadedAssignmentCard";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import apiMiddleware from "../../components/common/Server/apiMiddleware";
import { selectTeacher } from "../../store/redux-slices/teacher_slice";
import { useSelector } from "react-redux";

const assignments = [
  {
    id: 1,
    courseCode: "CS14",
    title: "Assignment 01",
    description: "Coplete the chapter 1 Excercise",
    strength: "50",
    noofSubmittedStudents: "30",
    notSubmittedStudents: "20",
    totaluploadedAssignment: "2",
    startDate: "11/01/2024 11:00pm",
    endDate: "15/01/2024 11:59am",
  },
  {
    id: 2,
    courseCode: "CS14",
    title: "Assignment 02",
    description: "Coplete the chapter 2 Excercise",
    strength: "50",
    noofSubmittedStudents: "30",
    notSubmittedStudents: "20",
    totaluploadedAssignment: "2",
    startDate: "11/01/2024 11:00pm",
    endDate: "15/01/2024 11:59am",
  },
  {
    id: 3,
    courseCode: "CS14",
    title: "Assignment 03",
    description: "Coplete the chapter 3 Excercise",
    strength: "50",
    noofSubmittedStudents: "30",
    notSubmittedStudents: "20",
    totaluploadedAssignment: "2",
    startDate: "11/01/2024 11:00pm",
    endDate: "15/01/2024 11:59am",
  },
  {
    id: 4,
    courseCode: "CS14",
    title: "Assignment 04",
    description: "Coplete the chapter 4 Excercise",
    strength: "50",
    noofSubmittedStudents: "30",
    notSubmittedStudents: "20",
    totaluploadedAssignment: "2",
    startDate: "11/01/2024 11:00pm",
    endDate: "15/01/2024 11:59am",
  },
];

const TeacherUploadedAssignmentPage = () => {
  const { courseId } = useParams();
  const teacher = useSelector(selectTeacher);

  const {
    data: TeacherUploadedAssignemnts,
    isLoading,
    isError,
  } = useQuery("TeacherUploadedAssignemnts", () =>
    apiMiddleware(`assignments/getassignments/${courseId}/${teacher?._id}`)
  );
  console.log(TeacherUploadedAssignemnts, "TeacherUploadedAssignemnts");
  return (
    <Box
      borderRadius={10}
      p={4}
      backgroundColor={"white"}
      spacing="4"
      width="100%"
    >
      <Box py={2} bg="#1D238F" rounded="lg" boxShadow="md" mb={7}>
        <Heading as="h4" fontWeight={"semibold"} color={"white"} size="xl">
          All Uploaded Assignments
        </Heading>
      </Box>
      <SimpleGrid
        mt={5}
        columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
        spacing="4"
        width="100%"
      >
        {assignments.map((assignments, index) => (
          <UploadedAssignmentCard key={index} {...assignments} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TeacherUploadedAssignmentPage;
