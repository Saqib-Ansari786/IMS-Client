import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Badge,
} from "@chakra-ui/react";

export default function ResultTable({ headers, data, entries }) {
  return (
    <TableContainer
      mt={3}
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      mx={3}
      backgroundColor="white"
    >
      <Table variant="striped" colorScheme="blackAlpha">
        <Thead>
          <Tr>
            {headers &&
              headers.map((header, index) => (
                <Th key={index} textAlign="center">
                  {header}
                </Th>
              ))}
          </Tr>
        </Thead>
        <Tbody>
          {data &&
            data.slice(0, entries).map((row, rowIndex) => (
              <Tr key={rowIndex}>
                <Td key={rowIndex} textAlign="center">
                  {row.beltNo} {/* Update key to match data structure */}
                </Td>
                <Td key={rowIndex} textAlign="center">
                  {row.studentName} {/* Update key to match data structure */}
                </Td>
                <Td key={rowIndex} textAlign="center">
                  {row.durationStatus}{" "}
                  {/* Update key to match data structure */}
                </Td>
                <Td key={rowIndex} textAlign="center">
                  <Badge
                    borderRadius={5}
                    fontSize={"2xs"}
                    colorScheme={row.status === "Completed" ? "green" : "red"}
                    color={"white"}
                    variant="solid"
                  >
                    {row.status === "Completed" ? "Completed" : "Not Completed"}
                  </Badge>
                </Td>
                <Td key={rowIndex} textAlign="center">
                  {row.status === "Pending" ? (
                    <Badge
                      borderRadius={5}
                      fontSize={"xs"}
                      colorScheme={"yellow"}
                      variant="solid"
                      color={"white"}
                    >
                      Pending
                    </Badge>
                  ) : (
                    row.marks
                  )}
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
