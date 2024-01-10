import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  TableContainer,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function MarksSummaryPage() {
  const { classId, assessmentId } = useParams();

  // Mock student data
  const students = [
    { beltNo: 1, name: "Student 1" },
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
    <Box bgColor="white" borderRadius={8} p={4}>
      <Box py={2} bg="#1D238F" rounded="lg" boxShadow="md" mb={7}>
      <Heading as="h4" fontWeight={"semibold"} color={"white"} 
       size="xl" >
      Marks Summary for Class {classId} - {assessmentId}
      </Heading>
      </Box>
      <Flex justify="end" align="center" mb={4}>
       
        {!isEditable && (
          <Button colorScheme="blue" onClick={handleAddEditMarks}>
            Add/Edit Marks
          </Button>
        )}
      </Flex>
      <TableContainer    mt={3}
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      
      backgroundColor="white">
      <Table colorScheme="blackAlpha" variant={"striped"}>
        <Thead  textAlign="center">
          <Tr>
            <Th textAlign={"center"}>Belt No</Th>
            <Th textAlign={"center"}>Student Name</Th>
            <Th textAlign={"center"}>Obtained Marks</Th>
          </Tr>
        </Thead>
        <Tbody>
          {marks.map((mark, index) => (
            <Tr key={mark.studentId}>
              <Td textAlign={"center"}>{mark.studentId}</Td>
              <Td textAlign={"center"}>{students[index].name}</Td>
              <Td textAlign={"center"}>
                <Input
                border={"1px"}
                borderColor={"grey"}
                bgColor={"white"}
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
      </TableContainer>
      {isEditable && (
        <Button colorScheme="blue" mt={4} onClick={handleSaveMarks}>
          Save Marks
        </Button>
      )}
    </Box>
  );
}
