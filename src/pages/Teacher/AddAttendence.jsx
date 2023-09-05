import React, { useState } from "react";
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
} from "@chakra-ui/react";

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
  // Add more student data as needed
];

const AddStudentAttendancePage = ({ classDetails }) => {
  const [students, setStudents] = useState(studentData);

  const handleMarkAttendance = (studentId) => {
    // Find the student by ID and toggle their attendance
    const updatedStudents = students.map((student) =>
      student.id === studentId
        ? { ...student, isPresent: !student.isPresent }
        : student
    );

    setStudents(updatedStudents);
  };

  return (
    <Box p={4} minW={"100%"}>
      <Heading size="lg" mb={4}>
        {classDetails.courseId} - Student Attendance
      </Heading>

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
          {students.map((student) => (
            <Tr key={student.id}>
              <Td>{student.rollNo}</Td>
              <Td>{student.name}</Td>
              <Td>{student.totalAttendance}</Td>
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
    </Box>
  );
};

export default AddStudentAttendancePage;
