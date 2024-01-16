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
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { FaCalendar, FaList, FaUser, FaUsers } from "react-icons/fa";
import { AddIcon, ViewIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import apiMiddleware from "../../common/Server/apiMiddleware";
import { useQuery } from "react-query";
import { selectTeacher } from "../../../store/redux-slices/teacher_slice";
import { useSelector } from "react-redux";
import {
  createCloudinaryFormdata,
  uploadToCloudinary,
} from "../../../utils/cloudinarySetup";

export default function TeacherCourseCard({
  courseCode,
  courseId,
  name,
  description,
  strength,
  duration,
  author,
  category,
}) {
  const teacher = useSelector(selectTeacher);
  const toast = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    file: null,
  });
  const [loading, setLoading] = useState();

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

  const handleSubmit = async () => {
    setLoading(true);
    console.log(formData);
    if (formData.file) {
      // Upload the file to the server
      const formDataFile = createCloudinaryFormdata(
        formData.file,
        "ims_teacher_images",
        "ims_teacher_images"
      );
      const response = await uploadToCloudinary(formDataFile);
      console.log(response);
      if (response) {
        var fileUrl = response?.secure_url;
      }
    }
    const data = {
      title: formData.title,
      description: formData.description,
      doc: fileUrl,
      courseId: courseId,
      teacherId: teacher._id,
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const uploadCourseData = await apiMiddleware(
      "courses/create-course-material",
      requestOptions
    );
    if (uploadCourseData.success) {
      toast({
        title: "Course Material Added",
        description: "Course Material has been added successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      console.log(uploadCourseData);
      setFormData({
        title: "",
        description: "",
        file: null,
      });
    } else {
      toast({
        title: "Error",
        description: "Some thing went wrong. Course Material cannot be added",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    setLoading(false);
    setIsOpen(false);
  };
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="xl"
      backgroundColor="white"
      key={courseId}
    >
      <Box p="4">
        <Heading color={"#1D238F"} as="h1" size="xl">
          {courseId}
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
          </Tbody>
        </Table>
        <Stack>
          <Button
            as={Link}
            to={`${courseId}`}
            colorScheme="blue"
            _hover={{ backgroundColor: "blue.300", color: "white" }}
            color={"white"}
            leftIcon={<ViewIcon />}
          >
            View All Course Material
          </Button>
          <Button
            colorScheme="red"
            leftIcon={<AddIcon />}
            onClick={() => setIsOpen(true)}
          >
            Add Course Material
          </Button>
        </Stack>
      </Box>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent bgColor={"white"}>
          <ModalHeader>Add Course Material</ModalHeader>
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
              <FormLabel>Upload File</FormLabel>
              <InputGroup>
                <Input type="file" name="file" onChange={handleFileChange} />
              </InputGroup>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              {loading ? <Spinner size={"sm"} /> : "Submit"}
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
