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
  useToast,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, ViewIcon } from "@chakra-ui/icons";
import AlertDeleteDialog from "./AlertDeleteDialog";
import EditStudentModal from "./EditStudentModal";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import apiMiddleware from "../../common/Server/apiMiddleware";
import { deleteStudent } from "../../common/Server/admin/student";

export default function StudentView({ headers, data, entries, search }) {
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useState(false);
  const [deletedStudent, setDeleteStudent] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const handleOpenDeleteConfirmation = (student) => {
    setDeleteStudent(student);
    setIsDeleteConfirmationOpen(true);
  };

  const handleCloseDeleteConfirmation = () => {
    setIsDeleteConfirmationOpen(false);
    setDeleteStudent(null);
  };

  const handleConfirmDeleteStudent = async () => {
    // Implement your logic to delete the student

    try {
      setLoading(true);
      const response = await deleteStudent(deletedStudent);
      console.log("response from server", response);

      if (response.success) {
        toast({
          title: "Student Deleted",
          description: "Student has been deleted successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    setLoading(false);

    handleCloseDeleteConfirmation();
  };

  // Function to open the edit modal
  const openEditModal = (student) => {
    setSelectedStudent(student);
    setIsEditModalOpen(true);
  };

  // Function to close the edit modal
  const closeEditModal = () => {
    setSelectedStudent(null);
    setIsEditModalOpen(false);
  };

  // Function to handle editing the student
  const handleEditStudent = (editedStudent) => {
    // Implement your logic to update the student with the editedStudent data
    console.log("Edited student data:", editedStudent);
    // Close the edit modal
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
                return search?.toLowerCase() === ""
                  ? row
                  : row.firstname?.toLowerCase().includes(search) ||
                      row.lastname?.toLowerCase().includes(search) ||
                      row.email?.includes(search) ||
                      row.courseCode?.toLowerCase().includes(search);
              })
              .slice(0, entries)
              .map((row, rowIndex) => (
                <Tr key={rowIndex}>
                  <Td key={rowIndex} textAlign="center">
                    {row?.beltNo}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    {row?.firstname + " " + row.lastname}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    {row?.courseId.name}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    {row?.email}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    {row?.contactNo}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    {new Date(row?.registrationDate).toLocaleDateString()}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    <Link to={`${row?.beltNo}`}>
                      <IconButton
                        size="sm"
                        backgroundColor={"primary.base"}
                        color={"white"}
                        _hover={{ bg: "primary.hover", color: "white" }}
                        title="View"
                        icon={<Icon as={ViewIcon} />}
                        mr={2}
                      />
                    </Link>
                    <IconButton
                      size="sm"
                      backgroundColor={"primary.base"}
                      color={"white"}
                      _hover={{ bg: "primary.hover", color: "white" }}
                      title="Edit"
                      icon={<Icon as={EditIcon} />}
                      onClick={() => openEditModal(row)}
                      mr={2}
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
        type={"student"}
        onConfirm={handleConfirmDeleteStudent}
      />
      <EditStudentModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        student={selectedStudent}
        onEdit={handleEditStudent}
      />
    </TableContainer>
  );
}
