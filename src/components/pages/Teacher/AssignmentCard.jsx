import React, { useState } from "react";
import {
  Box,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  Stack,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  InputGroup,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FaCalendar, FaList, FaSortNumericUp, FaUser, FaUsers } from "react-icons/fa";
import { AddIcon, ViewIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function AssignmentCard({
  courseCode,
  name,
  description,
  strength,
  duration,
  author,
  category,
  totaluploadedAssignment
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      file,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    setFormData({
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      file: null,
    });
    setIsOpen(false);
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="xl"
      transition="all 0.3s ease"
      backgroundColor="white"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "lg",
        color: "black",
      }}
      
      key={courseCode}
    >
      <Box p="4">
        <Heading color={"#1D238F"} as="h1" size="xl">
          {courseCode}
        </Heading>
        <Heading as="h4" size="md">
          {name}
        </Heading>
        <Text color="gray.600" mt="2">
          {description}
        </Text>
        <Table size="sm" mt="3">
          <Tbody>
          <Tr>
              <Td>
                <Stack spacing={1} direction="row" alignItems="center">
                  <FaCalendar color={"blue"} />
                  <Text fontWeight="semibold">Duration</Text>
                </Stack>
              </Td>
              <Td textAlign="right">{duration}</Td>
            </Tr>
            <Tr>
              <Td>
                <Stack pt={2} spacing={1} direction="row" alignItems="center">
                  <FaUser color={"red"} />
                  <Text fontWeight="semibold">Author</Text>
                </Stack>
              </Td>
              <Td textAlign="right">{author}</Td>
            </Tr>
            <Tr>
              <Td>
                <Stack spacing={1} direction="row" alignItems="center">
                  <FaList color={"green"} />
                  <Text fontWeight="semibold">Category</Text>
                </Stack>
              </Td>
              <Td textAlign="right">{category}</Td>
            </Tr>
            <Tr>
              <Td>
                <Stack spacing={1} direction="row" alignItems="center">
                  <FaUsers color={"blue"} />
                  <Text fontWeight="semibold">Strength</Text>
                </Stack>
              </Td>
              <Td textAlign="right">{strength}</Td>
            </Tr>
            <Tr>
              <Td>
                <Stack spacing={1} direction="row" alignItems="center">
                  <FaSortNumericUp color={"red"} />
                  <Text fontWeight="semibold">Assignments Count</Text>
                </Stack>
              </Td>
              <Td textAlign="right">{totaluploadedAssignment}</Td>
            </Tr>
          </Tbody>
        </Table>
        <Stack>
          <Button
          as={Link}
            to={`uploaded/${courseCode}`}
            colorScheme="blue"
            _hover={{ backgroundColor: "blue.300", color: "white" }}
            color={"white"}
            leftIcon={<ViewIcon />}
            
          >
            View Assignments
          </Button>
          
          <Button
            to={""}
            colorScheme="teal"
            _hover={{ backgroundColor: "teal.300", color: "white" }}
            color={"white"}
            leftIcon={<AddIcon />}
            onClick={() => setIsOpen(true)}
          >
            Add New Assignment
          </Button>
        </Stack>
      </Box>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent bgColor={"white"}>
          <ModalHeader>Add New Assignment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb="4">
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                placeholder="Enter title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mb="4">
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Enter description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mb="4">
              <FormLabel>Start Date</FormLabel>
              <Input
                type="datetime-local"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mb="4">
              <FormLabel>End Date</FormLabel>
              <Input
                type="datetime-local"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mb="4">
              <FormLabel>Upload File</FormLabel>
              <InputGroup>
                <Input
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                />
              </InputGroup>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Add Assignment
            </Button>
            <Button colorScheme="red" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
