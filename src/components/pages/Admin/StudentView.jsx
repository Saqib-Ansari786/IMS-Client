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

export default function StudentView({ headers, data, entries }) {
    return (
      <TableContainer mt={3} borderWidth="1px" borderRadius="lg" p={4} mx={3} backgroundColor="white">
        <Table  variant="striped" colorScheme="blackAlpha">
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
                   {row.name}
                 </Td>
                 <Td key={rowIndex} textAlign="center">
                   {row.courseName}
                 </Td>
                 <Td key={rowIndex} textAlign="center">
                   {row.email}
                 </Td>
                 <Td key={rowIndex} textAlign="center">
                   {row.phoneNo}
                 </Td>
                 <Td key={rowIndex} textAlign="center">
                   {row.admissionDate}
                 </Td>
                 <Td key={rowIndex} textAlign="center">
                   <IconButton
                    size="sm"
                    colorScheme="blue"
                    title="View"
                    icon={<Icon as={ViewIcon} />}
                    mr={2} 
                  />
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
  