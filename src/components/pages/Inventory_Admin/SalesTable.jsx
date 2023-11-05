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

export default function SalesTable({ sales, onEdit, onDelete, entries }) {
    return (
      <TableContainer mt={3} borderWidth="1px" borderRadius="lg" p={4} mx={3} backgroundColor="white">
        <Table  variant="striped" colorScheme="blackAlpha">
        <Thead>
         <Tr>
         <Th textAlign="center">ID</Th>
          <Th textAlign="center">Date</Th>
          <Th textAlign="center">Quantity</Th>
          <Th textAlign="center">Product Name</Th>
          <Th textAlign="center">Customer Name</Th>
          <Th textAlign="center">Customer Type</Th>
          <Th textAlign="center">Actions</Th>
         </Tr>
      </Thead>
          <Tbody>
            {sales ? (
              sales.slice(0, entries).map((sale, index) => (
                <Tr key={index}>
                 <Td textAlign="center">
                   {index + 1}
                 </Td>
                 <Td textAlign="center">
                 {sale.date}
                 </Td>
                 <Td textAlign="center">
                 {sale.quantity}
                 </Td>
                 <Td textAlign="center">
                 {sale.productName}
                 </Td>
                 <Td textAlign="center">
                 {sale.customerName}
                 </Td>
                 <Td textAlign="center">
                 {sale.customerType}
                 </Td>
                 <Td textAlign="center">
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
              ))
              ) : (
                <Tr>
                  <Td colSpan={7}>No sales found</Td>
                </Tr>
              )}
          </Tbody>
        </Table>
      </TableContainer>
    );
  }
  
