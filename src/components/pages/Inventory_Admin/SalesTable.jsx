// src/components/SalesTable.js
import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, IconButton } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const SalesTable = ({ sales, onEdit, onDelete }) => {
  return (
    <Table size="sm">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Date</Th>
          <Th>Quantity</Th>
          <Th>Product Name</Th>
          <Th>Customer Name</Th>
          <Th>Customer Type</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sales ? (
          sales.map((sale, index) => (
            <Tr key={index}>
              <Td>{index + 1}</Td>
              <Td>{sale.date}</Td>
              <Td>{sale.quantity}</Td>
              <Td>{sale.productName}</Td>
              <Td>{sale.customerName}</Td>
              <Td>{sale.customerType}</Td>
              <Td>
                <IconButton
                  icon={<EditIcon />}
                  colorScheme="blue"
                  onClick={() => onEdit(sale.id)}
                  mr={2}
                />
                <IconButton
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  onClick={() => onDelete(sale.id)}
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
  );
};

export default SalesTable;
