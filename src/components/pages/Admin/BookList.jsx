import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  IconButton,
  Icon,
  TableContainer,
  useToast,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, ViewIcon } from "@chakra-ui/icons";
import AlertDeleteDialog from "./AlertDeleteDialog";
import EditBookModal from "./EditBookModal";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import apiMiddleware from "../../common/Server/apiMiddleware";

export default function BookList({ headers, data, entries, search }) {
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useState(false);
  const [deleteBook, setDeleteBook] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const toast = useToast();

  const handleOpenDeleteConfirmation = (book) => {
    setDeleteBook(book);
    setIsDeleteConfirmationOpen(true);
  };

  const handleCloseDeleteConfirmation = () => {
    setIsDeleteConfirmationOpen(false);
    setDeleteBook(null);
  };

  const handleConfirmDeleteBook = async () => {
    if (deleteBook) {
      console.log("Delete book:", deleteBook);
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      };
      try {
        const response = await apiMiddleware(
          `admin/libraries/library-items/${deleteBook}`,
          requestOptions
        );
        if (response.success) {
          toast({
            title: "Book Deleted",
            description: "Book has been deleted successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Book cannot be deleted",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
      // Close the confirmation dialog
      handleCloseDeleteConfirmation();
    }
  };

  const openEditModal = (book) => {
    setSelectedBook(book);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedBook(null);
    setIsEditModalOpen(false);
  };

  const handleEditBook = (editedBook) => {
    // Implement your logic to update the book with the edited book data
    console.log("Edited book data:", editedBook);
    closeEditModal();
  };

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
            data
              .filter((row) => {
                return search.toLowerCase() === ""
                  ? row
                  : row.title.toLowerCase().includes(search) ||
                      row.isbn.includes(search) ||
                      row.category.toLowerCase().includes(search);
              })
              .slice(0, entries)
              .map((row, rowIndex) => (
                <Tr key={rowIndex}>
                  <Td key={rowIndex} textAlign="center">
                    {row.title}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    {row.authorName}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    {row.isbn}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    {row.category}
                  </Td>
                  <Td key={rowIndex} textAlign="center" color={"white"}>
                    <Badge
                      borderRadius={5}
                      fontSize={"2xs"}
                      colorScheme={row.availability ? "green" : "red"}
                      variant="solid"
                    >
                      {row.availability ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    <Link to={`${row.isbn}`}>
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
                      onClick={() => openEditModal(row)}
                    />
                    <IconButton
                      size="sm"
                      colorScheme="red"
                      title="Delete"
                      icon={<Icon as={DeleteIcon} />}
                      onClick={() => handleOpenDeleteConfirmation(row._id)}
                    />
                  </Td>
                </Tr>
              ))}
        </Tbody>
      </Table>
      <AlertDeleteDialog
        isOpen={isDeleteConfirmationOpen}
        onClose={handleCloseDeleteConfirmation}
        type={"book"}
        onConfirm={handleConfirmDeleteBook}
      />
      <EditBookModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        book={selectedBook}
        onEdit={handleEditBook}
      />
    </TableContainer>
  );
}
