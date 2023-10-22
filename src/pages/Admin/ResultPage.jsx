// src/pages/AdminResultPage.js
import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
} from "@chakra-ui/react";

const ResultPage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Simulated data, replace with actual data retrieval logic
    const studentData = [
      {
        id: 1,
        name: "Student A",
        durationComplete: false,
        marks: null,
        course: "Maths",
      },
      {
        id: 2,
        name: "Student B",
        durationComplete: true,
        marks: 85,
        course: "Maths",
      },
      {
        id: 3,
        name: "Student C",
        durationComplete: false,
        marks: null,
        course: "Maths",
      },
      {
        id: 4,
        name: "Student D",
        durationComplete: true,
        marks: 72,
        course: "Maths",
      },
      {
        id: 5,
        name: "Student E",
        durationComplete: true,
        marks: 45,
        course: "Maths",
      },
    ];

    setStudents(studentData);
  }, []);

  return (
    <Box p={4} bg={"white"} borderRadius={10} mt={5}>
      <Heading as="h1" size="lg" pb={4}>
        Result
      </Heading>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Course</Th>
            <Th>Duration Status</Th>
            <Th>Marks</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {students.map((student) => (
            <Tr key={student.id}>
              <Td>{student.id}</Td>
              <Td>{student.name}</Td>
              <Td>{student.course}</Td>
              <Td>
                <Badge
                  borderRadius={5}
                  fontSize={"xs"}
                  colorScheme={student.durationComplete ? "green" : "red"}
                  variant="solid"
                >
                  {student.durationComplete ? "Yes" : "No"}
                </Badge>
              </Td>
              <Td>
                {student.marks !== null ? (
                  student.marks
                ) : (
                  <Badge
                    borderRadius={5}
                    fontSize={"xs"}
                    colorScheme={"yellow"}
                    variant="solid"
                  >
                    Pending
                  </Badge>
                )}
              </Td>
              <Td>
                <Badge
                  borderRadius={5}
                  fontSize={"xs"}
                  colorScheme={
                    student.durationComplete
                      ? student.marks !== null
                        ? student.marks >= 50
                          ? "green"
                          : "red"
                        : "yellow"
                      : "yellow"
                  }
                  variant="solid"
                >
                  {student.durationComplete
                    ? student.marks !== null
                      ? student.marks >= 50
                        ? "Pass"
                        : "Fail"
                      : "Pending"
                    : "Pending"}
                </Badge>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ResultPage;
