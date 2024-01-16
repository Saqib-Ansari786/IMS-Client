import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  IconButton,
  Icon,
  TableContainer,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export default function AllIssuedBooks({ headers, data, entries, search }) {
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
            data
              .filter((row) => {
                return search.toLowerCase() === ""
                  ? row
                  : row.title?.toLowerCase().includes(search) ||
                      row.beltno?.includes(search) ||
                      row.authorName?.toLowerCase().includes(search);
              })
              .slice(0, entries)
              .map((row, rowIndex) => (
                <Tr key={rowIndex}>
                  <Td key={rowIndex} textAlign="center">
                    {row.isbn}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    {row.title}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    {row.authorName}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    {row.language}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    {row.department}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    {row.quantity}
                  </Td>
                </Tr>
              ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
