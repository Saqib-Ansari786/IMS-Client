import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
  Flex,
  TableContainer
} from "@chakra-ui/react";
import React from "react";

const TopStudentsCard = ({ data }) => {
  return (
   
      <TableContainer borderWidth="1px" borderRadius="lg" p={4}  backgroundColor="white">
       <Heading mb={"5"} as="h3" size="md" color="#120E87" >
        Top Students
      </Heading>
     <Table borderRadius={"4px"} border={"1px"} borderColor={"#F0F0F0"} variant="striped" colorScheme="blackAlpha">
        <Thead>
          <Tr>
            <Th textAlign="center">Belt No</Th>
            <Th textAlign="center" >Name</Th>
            <Th textAlign="center">Course</Th>
            <Th textAlign="center">Marks</Th>
            <Th textAlign="center">Percentage</Th>
            <Th textAlign="end">Year</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((student, index) => (
            <Tr key={index}>
              <Td>{student.id}</Td>
              <Td>
                <Flex align="center">
                  <Image
                    src={student.imageUrl}
                    alt={`Avatar of ${student.name}`}
                    boxSize="25px"
                    borderRadius="full"
                    mr={2}
                  />
                  {student.name}
                </Flex>
              </Td>
              <Td textAlign="center">{student.course}</Td>
              <Td textAlign="center">{student.marks}</Td>
              <Td textAlign="center">{student.percentage}</Td>
              <Td textAlign="end">{student.year}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      </TableContainer>
        );
};

export default TopStudentsCard;
