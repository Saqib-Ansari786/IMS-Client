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
          <Th>Amount</Th>
          <Th>Product Name</Th>
          <Th>Customer Name</Th>
          <Th>Customer Type</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sales.map((sale) => (
          <Tr key={sale.id}>
            <Td>{sale.id}</Td>
            <Td>{sale.date}</Td>
            <Td>${sale.amount}</Td>
            <Td>{sale.product_name}</Td>
            <Td>{sale.customer_name}</Td>
            <Td>{sale.customer_type}</Td>
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
        ))}
      </Tbody>
    </Table>
  );
};

export default SalesTable;
