import React, { useState } from "react";
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
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import EditSaleModal from "./EditSaleModal"; // Make sure you have an EditSaleModal component
import apiMiddleware from "../../common/Server/apiMiddleware";
import { useQueryClient } from "react-query";

export default function SalesTable({ sales, entries, search }) {
  const [editSale, setEditSale] = useState(null);
  const [deleteSale, setDeleteSale] = useState(null);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useState(false);
  const queryClient = useQueryClient();

  const openEditModal = (sale) => {
    setEditSale({ ...sale, date: sale.date.split("T")[0] });
  };

  const closeEditModal = () => {
    setEditSale(null);
  };

  const openDeleteConfirmation = (sale) => {
    setDeleteSale(sale);
    setIsDeleteConfirmationOpen(true);
  };

  const closeDeleteConfirmation = () => {
    setDeleteSale(null);
    setIsDeleteConfirmationOpen(false);
  };

  const onEdit = async (editedSale) => {
    const response = await apiMiddleware(`admin/sales/edit/${editedSale._id}`, {
      method: "POST",
      body: JSON.stringify(editedSale),
    });
    console.log(response);
    if (response.success) {
      queryClient.invalidateQueries("sales");
    }
  };

  const onDelete = async (id) => {
    const response = await apiMiddleware(`admin/sales/sales/${id}`, {
      method: "DELETE",
    });
    console.log(response);

    if (response.success) {
      queryClient.invalidateQueries("sales");
    }
  };

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
                    <Td textAlign="center">{sale.date.split("T")[0]}</Td>
                    <Td textAlign="center">{sale.quantity}</Td>
                    <Td textAlign="center">{sale.productName}</Td>
                    <Td textAlign="center">{sale.customerName}</Td>
                    <Td textAlign="center">{sale.customerType}</Td>
                    <Td textAlign="center">
                      <IconButton
                        size="sm"
                        colorScheme="blue"
                        title="Edit"
                        icon={<Icon as={EditIcon} />}
                        mr={2}
                        onClick={() => openEditModal(sale)}
                      />
                      <IconButton
                        size="sm"
                        colorScheme="red"
                        title="Delete"
                        icon={<Icon as={DeleteIcon} />}
                        onClick={() => openDeleteConfirmation(sale)}
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
      <EditSaleModal
        isOpen={editSale !== null}
        onClose={closeEditModal}
        sale={editSale}
        onEdit={(editedSale) => {
          onEdit(editedSale);
          closeEditModal();
        }}
      />

      <AlertDialog
        isOpen={isDeleteConfirmationOpen}
        leastDestructiveRef={undefined}
        onClose={closeDeleteConfirmation}
      >
        <AlertDialogOverlay>
          <AlertDialogContent backgroundColor={"white"}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Are you sure you want to delete this sale?
            </AlertDialogHeader>
            <AlertDialogBody>Deleting a sale cannot be undone.</AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={closeDeleteConfirmation}>No</Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  onDelete(deleteSale._id);
                  closeDeleteConfirmation();
                }}
                ml={3}
              >
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
