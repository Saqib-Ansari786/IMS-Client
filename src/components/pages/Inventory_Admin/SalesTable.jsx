import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Icon,
  Button,
  TableContainer,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

export default function SalesTable({ headers, sales, entries, search }) {
  return (
    <>
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
            {sales ? (
              sales
                .filter((row) => {
                  return search?.toLowerCase() === ""
                    ? row
                    : row.id?.includes(search) ||
                        row.productName?.toLowerCase().includes(search) ||
                        row.customerName?.toLowerCase().includes(search);
                })
                .slice(0, entries)
                .map((sale, index) => (
                  <Tr key={index}>
                    <Td textAlign="center">{index + 1}</Td>
                    <Td textAlign="center">{sale?.date.split("T")[0]}</Td>
                    <Td textAlign="center">{sale?.quantity}</Td>
                    <Td textAlign="center">{sale?.productId?.name}</Td>
                    <Td textAlign="center">{sale?.customerName}</Td>
                    <Td textAlign="center">{sale?.customerType}</Td>
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
    </>
  );
}
