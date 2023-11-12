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

export default function StudentView({ headers, data, entries, search }) {
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useState(false);
  const [deleteStudent, setDeleteStudent] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
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
    if (deleteStudent) {
      console.log("Delete student:", deleteStudent);
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      };
      try {
        const response = await apiMiddleware(
          `admin/students/students/${deleteStudent}`,
          requestOptions
        );
        if (response.success) {
          toast({
            title: "Student Deleted",
            description: "Student has been deleted successfully",
            status: "success",
            duration: 3000,
            colorScheme: "green",
            isClosable: true,
            containerStyle: {color:"white"},
            position: "top-right"
          });
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Student cannot be deleted",
          status: "error",
          duration: 3000,
          isClosable: true,
          containerStyle: {color:"white"},
          position: "top-right"
        });
      }

      handleCloseDeleteConfirmation();
    }
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
                return search.toLowerCase() === ""
                  ? row
                  : row.firstname.toLowerCase().includes(search) ||
                      row.lastname.toLowerCase().includes(search) ||
                      row.beltNo.includes(search) ||
                      row.courseCode.toLowerCase().includes(search);
              })
              .slice(0, entries)
              .map((row, rowIndex) => (
                <Tr key={rowIndex}>
                  <Td key={rowIndex} textAlign="center">
                    {row.beltNo}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    {row.firstname + " " + row.lastname}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    {row.courseCode}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    {row.email}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    {row.contactNo}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    {new Date(row.registrationDate).toLocaleDateString()}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    <Link to={`${row.beltNo}`}>
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
