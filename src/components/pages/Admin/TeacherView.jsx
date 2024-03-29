import { useState } from "react";
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
import EditTeacherModal from "./EditTeacehrModal";
import { Link } from "react-router-dom";
import apiMiddleware from "../../common/Server/apiMiddleware";

export default function TeacherView({ headers, data, entries, search }) {
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useState(false);
  const [deleteTeacher, setDeleteTeacher] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const toast = useToast();

  const handleOpenDeleteConfirmation = (teacher) => {
    setDeleteTeacher(teacher);
    setIsDeleteConfirmationOpen(true);
  };

  const handleCloseDeleteConfirmation = () => {
    setIsDeleteConfirmationOpen(false);
    setDeleteTeacher(null);
  };

  const handleConfirmDeleteTeacher = async () => {
    if (deleteTeacher) {
      console.log("Delete teacher:", deleteTeacher);
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      };
      try {
        const response = await apiMiddleware(
          `admin/teachers/teachers/${deleteTeacher}`,
          requestOptions
        );
        if (response.success) {
          toast({
            title: "Teacher Deleted",
            description: "Teacher has been deleted successfully",
            status: "success",
            duration: 3000,
            colorScheme: "green",
            isClosable: true,
            containerStyle: { color: "white" },
            position: "top-right",
          });
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Teacher cannot be deleted",
          status: "error",
          duration: 3000,
          isClosable: true,
          containerStyle: { color: "white" },
          position: "top-right",
        });
      }
      // Close the confirmation dialog
      handleCloseDeleteConfirmation();
    }
  };

  // Function to open the edit modal
  const openEditModal = (teacher) => {
    setSelectedTeacher(teacher);
    setIsEditModalOpen(true);
  };

  // Function to close the edit modal
  const closeEditModal = () => {
    setSelectedTeacher(null);
    setIsEditModalOpen(false);
  };

  // Function to handle editing the teacher
  const handleEditTeacher = (editedTeacher) => {
    // Implement your logic to update the teacher with the editedteacher data
    console.log("Edited teacher data:", editedTeacher);
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
                      row.beltNo.includes(search);
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
                    {row.designation}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    {row.email}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    {row.contactNo}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    {new Date(row.joiningDate).toLocaleDateString()}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    <Link to={`${row.beltNo}`}>
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
        type={"teacher"}
        onConfirm={handleConfirmDeleteTeacher}
      />
      <EditTeacherModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        teacher={selectedTeacher}
        onEdit={handleEditTeacher}
      />
    </TableContainer>
  );
}
