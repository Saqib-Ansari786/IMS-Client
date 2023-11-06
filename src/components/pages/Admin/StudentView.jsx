import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Icon,
  TableContainer,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, ViewIcon } from "@chakra-ui/icons";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

export default function StudentView({ headers, data, entries }) {
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
                  {row.beltNo}
                </Td>
                <Td key={rowIndex} textAlign="center">
                  {row.firstname + " " + row.lastname}
                </Td>
                <Td key={rowIndex} textAlign="center">
                  {row.courseCode}
                </Td>
                <Td key={rowIndex} textAlign="center">
                  {row.email}
                </Td>
                <Td key={rowIndex} textAlign="center">
                  {row.contactNo}
                </Td>
                <Td key={rowIndex} textAlign="center">
                  {row.registrationDate}
                </Td>
                <Td key={rowIndex} textAlign="center">
                  <Link to={`${row.beltNo}`}>
                    <IconButton
                      size="sm"
                      colorScheme="blue"
                      title="View"
                      icon={<Icon as={ViewIcon} />}
                      mr={2}
                    />
                  </Link>
                  <IconButton
                    size="sm"
                    colorScheme="blue"
                    title="Edit"
                    icon={<Icon as={EditIcon} />}
                    mr={2}
                  />
                  <IconButton
                    size="sm"
                    colorScheme="red"
                    title="Delete"
                    icon={<Icon as={DeleteIcon} />}
                  />
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
