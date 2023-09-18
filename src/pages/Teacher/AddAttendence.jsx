import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Progress,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const studentData = [
  {
    id: 1,
    rollNo: "001",
    name: "John Doe",
    totalAttendance: 15,
    isPresent: false,
  },
  {
    id: 2,
    rollNo: "002",
    name: "Jane Smith",
    totalAttendance: 14,
    isPresent: false,
  },
  {
    id: 12,
    rollNo: "002",
    name: "Jane Smith",
    totalAttendance: 14,
    isPresent: false,
  },
  {
    id: 3,
    rollNo: "002",
    name: "Jane Smith",
    totalAttendance: 90,
    isPresent: false,
  },
  {
    id: 4,
    rollNo: "002",
    name: "Jane Smith",
    totalAttendance: 98,
    isPresent: false,
  },
  {
    id: 5,
    rollNo: "002",
    name: "Jane Smith",
    totalAttendance: 14,
    isPresent: false,
  },
  {
    id: 6,
    rollNo: "002",
    name: "Jane Smith",
    totalAttendance: 14,
    isPresent: false,
  },
  {
    id: 7,
    rollNo: "002",
    name: "Jane Smith",
    totalAttendance: 14,
    isPresent: false,
  },
  {
    id: 8,
    rollNo: "002",
    name: "Jane Smith",
    totalAttendance: 14,
    isPresent: false,
  },
  {
    id: 9,
    rollNo: "002",
    name: "Jane Smith",
    totalAttendance: 14,
    isPresent: false,
  },
  {
    id: 10,
    rollNo: "002",
    name: "Jane Smith",
    totalAttendance: 14,
    isPresent: false,
  },
  {
    id: 11,
    rollNo: "002",
    name: "Jane Smith",
    totalAttendance: 14,
    isPresent: false,
  },
  // Add more student data as needed
];

const studentsPerPage = 10; // Number of students per page

const AddStudentAttendancePage = () => {
  const [students, setStudents] = useState(studentData);
  const { courseId } = useParams();
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    // Set the initial page to 0 when the component mounts
    setCurrentPage(0);
  }, []);

  const handleMarkAttendance = (studentId) => {
    // Find the student by ID and toggle their attendance
    const updatedStudents = students.map((student) =>
      student.id === studentId
        ? { ...student, isPresent: !student.isPresent }
        : student
    );

    setStudents(updatedStudents);
  };

  const markAllPresent = () => {
    // Mark all students as present
    const updatedStudents = students.map((student) => ({
      ...student,
      isPresent: true,
    }));

    setStudents(updatedStudents);
  };

  const markAllAbsent = () => {
    // Mark all students as absent
    const updatedStudents = students.map((student) => ({
      ...student,
      isPresent: false,
    }));

    setStudents(updatedStudents);
  };

  // Calculate the start and end indices for the current page
  const startIndex = currentPage * studentsPerPage;
  const endIndex = startIndex + studentsPerPage;

  // Get the students for the current page
  const studentsToShow = students.slice(startIndex, endIndex);

  return (
    <Box p={4} minW={"100%"}>
      <Heading size="lg" mb={4}>
        {courseId} - Student Attendance
      </Heading>

      <Text fontSize="lg" mb={4}>
        Current Page: {currentPage + 1} {/* Display the current page number */}
      </Text>

      <Flex justify="space-between" mb={10}>
        <Button colorScheme="green" size="md" onClick={markAllPresent}>
          Mark All Present
        </Button>
        <Button
          bgColor={"primary.base"}
          color={"white"}
          _hover={{ bgColor: "primary.hover", color: "white.base" }}
          size="md"
        >
          Submit
        </Button>
        <Button colorScheme="red" size="md" onClick={markAllAbsent}>
          Mark All Absent
        </Button>
      </Flex>

      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Roll No.</Th>
            <Th>Name</Th>
            <Th>Total Attendance</Th>
            <Th>Attendance</Th>
          </Tr>
        </Thead>
        <Tbody>
          {studentsToShow.map((student) => (
            <Tr key={student.id}>
              <Td>{student.rollNo}</Td>
              <Td>{student.name}</Td>
              <Td>
                {student.totalAttendance}{" "}
                <Progress
                  size="sm"
                  value={(student.totalAttendance / 100) * 100}
                  color={student.totalAttendance < 80 ? "red" : "green"}
                />
              </Td>
              <Td>
                <Button
                  colorScheme={student.isPresent ? "green" : "red"}
                  size="sm"
                  onClick={() => handleMarkAttendance(student.id)}
                >
                  {student.isPresent ? "Present" : "Absent"}
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Flex justify="space-between">
        <Button
          isDisabled={currentPage === 0}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous Page
        </Button>
        <Button
          isDisabled={endIndex >= students.length}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next Page
        </Button>
      </Flex>
    </Box>
  );
};

export default AddStudentAttendancePage;
