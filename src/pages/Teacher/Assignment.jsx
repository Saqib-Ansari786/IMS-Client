import { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  Text,
  Textarea,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  TableContainer,
} from "@chakra-ui/react";
import { FaAd, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const initialAssignments = [
  {
    id: 1,
    title: "Assignment 1",
    description: "Complete chapter 1 exercises",
    documents: [],
    studentsSubmitted: 10, // Number of students who have submitted
    startTimestamp: new Date("2023-09-10T08:00:00"), // Assignment start time
    deadlineTimestamp: new Date("2023-09-15T23:59:59"), // Assignment deadline
  },
  {
    id: 2,
    title: "Assignment 2",
    description: "Write a research paper",
    documents: [],
    studentsSubmitted: 5,
    startTimestamp: new Date("2023-09-20T08:00:00"),
    deadlineTimestamp: new Date("2023-09-25T23:59:59"),
  },
  // Add more assignments as needed
];

const AssignmentPage = () => {
  const [assignments, setAssignments] = useState(initialAssignments);
  const [newAssignment, setNewAssignment] = useState({
    title: "",
    description: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const handleAddAssignment = () => {
    setAssignments([...assignments, newAssignment]);
    setNewAssignment({ title: "", description: "" });
    onClose();
  };

  const handleEditAssignment = () => {
    const updatedAssignments = assignments.map((assignment) =>
      assignment.id === selectedAssignment.id ? selectedAssignment : assignment
    );
    setAssignments(updatedAssignments);
    setSelectedAssignment(null);
    onClose();
  };

  const handleDeleteAssignment = () => {
    const updatedAssignments = assignments.filter(
      (assignment) => assignment.id !== selectedAssignment.id
    );
    setAssignments(updatedAssignments);
    setSelectedAssignment(null);
    onClose();
  };

  return (
    <Box p={4} minW={"100%"}>
      <Heading size="lg" mb={4}>
        Assignment Management
      </Heading>

      {/* Add Assignment Button */}
      <Button
        colorScheme="blue"
        size="sm"
        mb={4}
        onClick={() => {
          setNewAssignment({ title: "", description: "" });
          onOpen();
        }}
      >
        Add Assignment
      </Button>

      {/* Assignment Table */}
      <TableContainer>
        <Table variant="striped" bgColor={"white"}>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Uploaded Documents</Th>
              <Th>Students Submitted</Th>
              <Th>Start Time</Th>
              <Th>Deadline</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {initialAssignments.map((assignment) => (
              <Tr key={assignment.id}>
                <Td>{assignment.title}</Td>
                <Td>{assignment.description}</Td>
                <Td>
                  {assignment.documents.map((document, index) => (
                    <div key={index}>
                      <a
                        href={document.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Document {index + 1}
                      </a>
                    </div>
                  ))}
                </Td>
                <Td>{assignment.studentsSubmitted}</Td>
                <Td>{assignment.startTimestamp.toLocaleString()}</Td>
                <Td>{assignment.deadlineTimestamp.toLocaleString()}</Td>
                <Td>
                  <IconButton
                    icon={<FaAd />}
                    colorScheme="blue"
                    size="sm"
                    mr={2}
                    as={Link}
                    to={`/teacher/details/${assignment.id}`}
                  />

                  <IconButton
                    icon={<FaEdit />}
                    colorScheme="blue"
                    size="sm"
                    onClick={() => {
                      setSelectedAssignment(assignment);
                      onOpen();
                    }}
                    mr={2}
                  />
                  <IconButton
                    icon={<FaTrash />}
                    colorScheme="red"
                    size="sm"
                    onClick={() => {
                      setSelectedAssignment(assignment);
                      onOpen();
                    }}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      {/* Add/Edit Assignment Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor={"white"}>
          <ModalHeader>
            {selectedAssignment ? "Edit Assignment" : "Add Assignment"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Title:</Text>
            <Input
              value={
                selectedAssignment
                  ? selectedAssignment.title
                  : newAssignment.title
              }
              onChange={(e) => {
                if (selectedAssignment) {
                  setSelectedAssignment({
                    ...selectedAssignment,
                    title: e.target.value,
                  });
                } else {
                  setNewAssignment({ ...newAssignment, title: e.target.value });
                }
              }}
            />
            <Text mt={2}>Description:</Text>
            <Textarea
              value={
                selectedAssignment
                  ? selectedAssignment.description
                  : newAssignment.description
              }
              onChange={(e) => {
                if (selectedAssignment) {
                  setSelectedAssignment({
                    ...selectedAssignment,
                    description: e.target.value,
                  });
                } else {
                  setNewAssignment({
                    ...newAssignment,
                    description: e.target.value,
                  });
                }
              }}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              onClick={
                selectedAssignment ? handleEditAssignment : handleAddAssignment
              }
            >
              {selectedAssignment ? "Save Changes" : "Add"}
            </Button>
            {selectedAssignment && (
              <Button colorScheme="red" onClick={handleDeleteAssignment}>
                Delete
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AssignmentPage;
