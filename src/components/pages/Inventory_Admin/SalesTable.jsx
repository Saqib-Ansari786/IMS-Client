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
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import EditSaleModal from "./EditSaleModal"; // Make sure you have an EditSaleModal component
import apiMiddleware from "../../common/Server/apiMiddleware";
import { useQueryClient } from "react-query";
import { selectProducts } from "../../../store/redux-slices/products_slice";
import { useSelector } from "react-redux";

export default function SalesTable({ headers, sales, entries, search }) {
  const [editSale, setEditSale] = useState(null);
  const [deleteSale, setDeleteSale] = useState(null);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useState(false);
  const queryClient = useQueryClient();
  const products = useSelector(selectProducts);

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
                    <Td textAlign="center">
                      {
                        products.find(
                          (product) => product._id === sale?.productId
                        )?.name
                      }
                    </Td>
                    <Td textAlign="center">{sale?.customerName}</Td>
                    <Td textAlign="center">{sale?.customerType}</Td>
                    <Td textAlign="center">
                      <IconButton
                        size="sm"
                        backgroundColor={"primary.base"}
                        color={"white"}
                        _hover={{ bg: "primary.hover", color: "white" }}
                        title="Edit"
                        icon={<Icon as={EditIcon} />}
                        mr={2}
                        onClick={() => openEditModal(sale)}
                      />
                      <IconButton
                        size="sm"
                        colorScheme="red"
                        title="Delete"
                        _hover={{ bg: "red.600", color: "white" }}
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
