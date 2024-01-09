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
  HStack,
  Icon,
  VStack,
  Grid,
} from "@chakra-ui/react";
import { FaAd, FaEdit, FaTrash, FaFileAlt, FaUserAlt } from "react-icons/fa";

import { Link } from "react-router-dom";
import { AttachmentIcon, TimeIcon } from "@chakra-ui/icons";
import apiMiddleware from "../../components/common/Server/apiMiddleware";
import { selectUser } from "../../store/redux-slices/user_slice";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";

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

const AssignmentComponent = ({ assignment }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      mb={4}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bg={"primary.base"}
      color={"white"}
      _hover={{ bg: "secondary.base" }}
      as={Link}
      to={`details/${assignment.id}`}
    >
      <HStack spacing={5} align="center">
        <Icon as={FaFileAlt} boxSize={"20"} color="gray.500" />
        <VStack align="start">
          <Text fontSize={"xx-large"} fontWeight="bold">
            {assignment.title}
          </Text>
          <Text>{assignment.description}</Text>
          <HStack spacing={4}>
            <Icon as={FaUserAlt} boxSize={4} />
            <Text>{`${assignment.studentsSubmitted} students submitted`}</Text>
          </HStack>
          <HStack spacing={4}>
            <TimeIcon boxSize={4} />
            <Text>{`Start: ${assignment.startTimestamp.toDateString()}`}</Text>
          </HStack>
          <HStack spacing={4}>
            <TimeIcon boxSize={4} />
            <Text>{`Due: ${assignment.deadlineTimestamp.toDateString()}`}</Text>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

const AssignmentPage = () => {
  const user = useSelector(selectUser);
  const [newAssignment, setNewAssignment] = useState({
    title: "",
    description: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const {
    data: assignments,
    isLoading,
    isError,
  } = useQuery("assignments", () =>
    apiMiddleware(`assignments/getassignments/${user.id}`)
  );

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
          onOpen();
        }}
      >
        Add Assignment
      </Button>

      {/* Assignment List */}

      {assignments?.length === 0 ? (
        <Text>No assignments found</Text>
      ) : (
        <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={4}>
          {assignments?.map((assignment, index) => (
            <AssignmentComponent key={index} assignment={assignment} />
          ))}
        </Grid>
      )}

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
