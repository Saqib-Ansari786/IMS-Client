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
  TableContainer,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, ViewIcon } from "@chakra-ui/icons";
import EditProductModal from "./EditProductModal"; // Import the EditProductModal component

export default function ProductPageTable({ products, onEdit, onDelete, entries }) {
  const [editProduct, setEditProduct] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);

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

  return (
    <>
      <TableContainer mt={3} borderWidth="1px" borderRadius="lg" p={4} mx={3} backgroundColor="white">
        <Table variant="striped" colorScheme="blackAlpha">
          <Thead>
            <Tr>
              <Th textAlign="center">ID</Th>
              <Th textAlign="center">Name</Th>
              <Th textAlign="center">Category</Th>
              <Th textAlign="center">Quantity</Th>
              <Th textAlign="center">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products &&
              products.slice(0, entries).map((product, index) => (
                <Tr key={product.id}>
                  <Td textAlign="center">{index + 1}</Td>
                  <Td textAlign="center">{product.name}</Td>
                  <Td textAlign="center">{product.category}</Td>
                  <Td textAlign="center">{product.quantity}</Td>
                  <Td textAlign="center">
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
                      onClick={() => openEditModal(product)}
                    />
                    <IconButton
                      size="sm"
                      colorScheme="red"
                      title="Delete"
                      icon={<Icon as={DeleteIcon} />}
                      onClick={() => openDeleteConfirmation(product)}
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
            <AlertDialogBody>Deleting a product cannot be undone.</AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={closeDeleteConfirmation}>No</Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  onDelete(deleteProduct.id);
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
