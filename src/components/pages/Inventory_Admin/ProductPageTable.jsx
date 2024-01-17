// import React from "react";
// import {
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   IconButton,
//   Icon,
//   TableContainer,
// } from "@chakra-ui/react";
// import { EditIcon, DeleteIcon, ViewIcon } from "@chakra-ui/icons";

// export default function ProductPageTable({ products, onEdit, onDelete, entries }) {
//     return (
//       <TableContainer mt={3} borderWidth="1px" borderRadius="lg" p={4} mx={3} backgroundColor="white">
//         <Table  variant="striped" colorScheme="blackAlpha">
//         <Thead>
//          <Tr>
//            <Th textAlign="center">ID</Th>
//            <Th textAlign="center">Name</Th>
//            <Th textAlign="center">Category</Th>
//            <Th textAlign="center">Quantity</Th>
//            <Th textAlign="center">Actions</Th>
//          </Tr>
//       </Thead>
//           <Tbody>
//             {products &&
//               products.slice(0, entries).map((product, index) => (
//                 <Tr key={product.id}>
//                  <Td textAlign="center">
//                    {index + 1}
//                  </Td>
//                  <Td textAlign="center">
//                    {product.name}
//                  </Td>
//                  <Td textAlign="center">
//                    {product.category}
//                  </Td>
//                  <Td textAlign="center">
//                    {product.quantity}
//                  </Td>
//                  <Td textAlign="center">
//                    <IconButton
//                     size="sm"
//                     colorScheme="blue"
//                     title="View"
//                     icon={<Icon as={ViewIcon} />}
//                     mr={2}
//                   />
//                   <IconButton
//                     size="sm"
//                     colorScheme="blue"
//                     title="Edit"
//                     icon={<Icon as={EditIcon} />}
//                     mr={2}
//                   />
//                   <IconButton
//                     size="sm"
//                     colorScheme="red"
//                     title="Delete"
//                     icon={<Icon as={DeleteIcon} />}
//                   />
//                 </Td>
//               </Tr>
//               ))}
//           </Tbody>
//         </Table>
//       </TableContainer>
//     );
//   }

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
  TableContainer,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useToast,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, ViewIcon } from "@chakra-ui/icons";
import EditProductModal from "./EditProductModal"; // Import the EditProductModal component
import apiMiddleware from "../../common/Server/apiMiddleware";
import { useQueryClient } from "react-query";

export default function ProductPageTable({
  headers,
  products,
  entries,
  search,
}) {
  const [editProduct, setEditProduct] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useState(false);
  const queryClient = useQueryClient();
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const openEditModal = (product) => {
    setEditProduct(product);
  };

  const closeEditModal = () => {
    setEditProduct(null);
  };

  const openDeleteConfirmation = (product) => {
    setDeleteProduct(product);
    setIsDeleteConfirmationOpen(true);
  };

  const closeDeleteConfirmation = () => {
    setDeleteProduct(null);
    setIsDeleteConfirmationOpen(false);
  };

  const onEdit = async (editedProduct) => {
    console.log(editedProduct);
    try {
      setLoading(true);
      const response = await apiMiddleware(
        `admin/products/edit/${editedProduct._id}`,
        {
          method: "POST",
          body: JSON.stringify({
            name: editedProduct.name,
            category: editedProduct.category,
            quantity: editedProduct.quantity,
          }),
        }
      );
      console.log(response);
      if (response.success) {
        queryClient.invalidateQueries("products");
        toast({
          title: "Product Edited",
          description: "Product has been edited successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error editing product:", error);

      toast({
        title: "Error",
        description: "An error occurred while editing the product",
        status: "error",
        duration: 3000,
        isClosable: true,
        containerStyle: { color: "white" },
        position: "top-right",
      });
    }
    setLoading(false);
  };

  const onDelete = async (id) => {
    try {
      setLoading(true);
      const response = await apiMiddleware(`admin/products/products/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      console.log("Delete Product Response:", response);

      if (response.success) {
        console.log("Product Deleted Successfully");

        toast({
          title: "Product Deleted",
          description: "Product has been deleted successfully",
          status: "success",
          duration: 3000,
          colorScheme: "green",
          isClosable: true,
          containerStyle: { color: "white" },
          position: "top-right",
        });
      } else {
        console.log("Product Deletion Failed");

        toast({
          title: "Error",
          description: "Product cannot be deleted",
          status: "error",
          duration: 3000,
          isClosable: true,
          containerStyle: { color: "white" },
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Error deleting product:", error);

      toast({
        title: "Error",
        description: "An error occurred while deleting the product",
        status: "error",
        duration: 3000,
        isClosable: true,
        containerStyle: { color: "white" },
        position: "top-right",
      });
    }
    setLoading(false);
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
            {products &&
              products
                .filter((row) => {
                  return search?.toLowerCase() === ""
                    ? row
                    : row.id?.includes(search) ||
                        row.name?.toLowerCase().includes(search) ||
                        row.category?.toLowerCase().includes(search);
                })
                .slice(0, entries)
                .map((product, index) => (
                  <Tr key={product.id}>
                    <Td textAlign="center">{index + 1}</Td>
                    <Td textAlign="center">{product.name}</Td>
                    <Td textAlign="center">{product.category}</Td>
                    <Td textAlign="center">{product.quantity}</Td>
                    <Td textAlign="center">
                      <IconButton
                        size="sm"
                        backgroundColor={"primary.base"}
                        color={"white"}
                        _hover={{ bg: "primary.hover", color: "white" }}
                        title="Edit"
                        icon={<Icon as={EditIcon} />}
                        mr={2}
                        onClick={() => openEditModal(product)}
                        disabled={loading}
                      />
                      <IconButton
                        size="sm"
                        colorScheme="red"
                        title="Delete"
                        _hover={{ bg: "red.600", color: "white" }}
                        icon={<Icon as={DeleteIcon} />}
                        onClick={() => openDeleteConfirmation(product)}
                        disabled={loading}
                      />
                    </Td>
                  </Tr>
                ))}
          </Tbody>
        </Table>
      </TableContainer>

      <EditProductModal
        isOpen={editProduct !== null}
        onClose={closeEditModal}
        product={editProduct}
        onEdit={(editedProduct) => {
          onEdit(editedProduct);
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
              Are you sure you want to delete this product?
            </AlertDialogHeader>
            <AlertDialogBody>
              Deleting a product cannot be undone.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={closeDeleteConfirmation}>No</Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  onDelete(deleteProduct._id);
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
