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
import { CheckCircleIcon, CloseIcon, ViewIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function IssueRequest({ headers, data, entries, search }) {

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
                  : row.title.toLowerCase().includes(search) ||
                      row.isbn.includes(search) ||
                      row.category.toLowerCase().includes(search);
              })
              .slice(0, entries)
              .map((row, rowIndex) => (
                <Tr key={rowIndex}>
                  <Td key={rowIndex} textAlign="center">
                    {row.beltno}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    {row.name}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    {row.title}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    {row.authorName}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    {row.role}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    <IconButton
                      size="sm"
                      colorScheme="green"
                      title="Accepted"
                      icon={<Icon as={CheckCircleIcon} />}
                      ml={2}
                    />
                    <IconButton
                      size="sm"
                      colorScheme="red"
                      title="Rejected"
                      icon={<Icon as={CloseIcon} />}
                      ml={2}
                    />
                  </Td>
                </Tr>
              ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
