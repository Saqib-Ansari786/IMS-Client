import { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function MarksSummaryPage() {
  const { classId, assessmentId } = useParams();

  // Mock student data
  const students = [
    { id: 1, name: "Student 1" },
    { id: 2, name: "Student 2" },
    { id: 3, name: "Student 3" },
    // Add more student data here
  ];

  // Mock marks data
  const [marks, setMarks] = useState(
    students.map((student) => ({
      studentId: student.id,
      obtainedMarks: "",
    }))
  );

  const [isEditable, setIsEditable] = useState(false);

  const handleAddEditMarks = () => {
    setIsEditable(!isEditable);
  };

  const handleSaveMarks = () => {
    // Implement the logic to save marks
    setIsEditable(false);
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Marks Summary for Class {classId} - {assessmentId}
      </Heading>
      <Button
        colorScheme="blue"
        mb={4}
        onClick={handleAddEditMarks}
        disabled={isEditable}
      >
        Add/Edit Marks
      </Button>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Student ID</Th>
            <Th>Student Name</Th>
            <Th>Obtained Marks</Th>
          </Tr>
        </Thead>
        <Tbody>
          {marks.map((mark, index) => (
            <Tr key={mark.studentId}>
              <Td>{mark.studentId}</Td>
              <Td>{students[index].name}</Td>
              <Td>
                <Input
                  type="number"
                  value={mark.obtainedMarks}
                  isReadOnly={!isEditable}
                  onChange={(e) => {
                    const updatedMarks = [...marks];
                    updatedMarks[index].obtainedMarks = e.target.value;
                    setMarks(updatedMarks);
                  }}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {isEditable && (
        <Button colorScheme="blue" mt={4} onClick={handleSaveMarks}>
          Save Marks
        </Button>
      )}
    </Box>
  );
}
