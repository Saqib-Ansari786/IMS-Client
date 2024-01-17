import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  Select,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import apiMiddleware from "../../common/Server/apiMiddleware";
import SuccessModal from "../Inventory_Admin/SucessModal";
import { useDispatch } from "react-redux";
import { fetchCourses } from "../../../store/redux-slices/courses_slice";

export default function AddCourse() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    courseCode: "",
    name: "",
    department: "",
    strength: "",
    duration: "", // Duration is now a dropdown value
    author: "",
    category: "",
    description: "",
  });
  const toast = useToast();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can access the form data as an object with the specified properties.

    try {
      setLoading(true);
      const response = await apiMiddleware("admin/courses/course", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
      if (response.success) {
        toast({
          title: "Course Added",
          description: "Course has been added successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        dispatch(fetchCourses());
      }
      setFormData({
        courseCode: "",
        name: "",
        department: "",
        strength: "",
        duration: "", // Duration is now a dropdown value
        author: "",
        category: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    setLoading(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSuccessMessage(null);
  };

  const [successMessage, setSuccessMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box mt={4} p={4} backgroundColor="white" mx={3}>
      <Text color={"#120E87"} fontSize={"2xl"}>
        Add Course
      </Text>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Course Code</FormLabel>
          <Input
            type="text"
            name="courseCode"
            placeholder="Enter Course Code"
            value={formData.courseCode}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            placeholder="Enter Course Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Department</FormLabel>
          <Input
            type="text"
            name="department"
            placeholder="Enter Department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Strength</FormLabel>
          <Input
            type="number"
            name="strength"
            placeholder="Enter Strength"
            value={formData.strength}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Duration</FormLabel>
          <Select
            name="duration"
            placeholder="Select Duration"
            value={formData.duration}
            onChange={handleChange}
            required
          >
            <option value="7">7</option>
            <option value="14">14</option>
            <option value="30">30</option>
          </Select>
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Author</FormLabel>
          <Input
            type="text"
            name="author"
            placeholder="Enter Author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Category</FormLabel>
          <Input
            type="text"
            name="category"
            placeholder="Enter Category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Description</FormLabel>
          <Input
            type="text"
            name="description"
            placeholder="Enter Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </FormControl>
        <Button
          type="submit"
          mt={6}
          colorScheme="blue"
          py={4}
          fontSize="1rem"
          disabled={loading}
        >
          {loading ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.300"
              size="md"
            />
          ) : (
            "Add Course"
          )}
        </Button>
      </form>
      <SuccessModal
        successMessage={successMessage}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
    </Box>
  );
}
