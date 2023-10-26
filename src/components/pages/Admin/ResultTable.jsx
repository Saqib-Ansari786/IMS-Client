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
                  {row.beltno}
                </Td>
                <Td key={rowIndex} textAlign="center">
                  {row.name}
                </Td>
                <Td key={rowIndex} textAlign="center">
                  {row.course}
                </Td>
                <Td key={rowIndex} textAlign="center">
                  <Badge
                    borderRadius={5}
                    fontSize={"2xs"}
                    colorScheme={row.durationComplete ? "green" : "red"}
                    color={"white"}
                    variant="solid"
                  >
                    {row.durationComplete ? "Yes" : "No"}
                  </Badge>
                </Td>
                <Td key={rowIndex} textAlign="center">
                  {row.marks !== null ? (
                    row.marks
                  ) : (
                    <Badge
                      borderRadius={5}
                      fontSize={"xs"}
                      colorScheme={"yellow"}
                      variant="solid"
                      color={"white"}
                    >
                      Pending
                    </Badge>
                  )}
                </Td>
                <Td key={rowIndex} textAlign="center">
                  <Badge
                    borderRadius={5}
                    fontSize={"xs"}
                    color={"white"}
                    colorScheme={
                      row.durationComplete
                        ? row.marks !== null
                          ? row.marks >= 50
                            ? "green"
                            : "red"
                          : "yellow"
                        : "yellow"
                    }
                    variant="solid"
                  >
                    {row.durationComplete
                      ? row.marks !== null
                        ? row.marks >= 50
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
    </TableContainer>
  );
}
