import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  Select,
} from "@chakra-ui/react";
import apiMiddleware from "../../common/Server/apiMiddleware";

export default function AddCourse() {
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
    console.log("Form Data:", formData);

    const response = await apiMiddleware("admin/courses/course", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    console.log(response);
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
  };

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
          />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Duration</FormLabel>
          <Select
            name="duration"
            placeholder="Select Duration"
            value={formData.duration}
            onChange={handleChange}
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
          />
        </FormControl>
        <Button type="submit" mt={6} colorScheme="blue" py={4} fontSize="1rem">
          Add Course
        </Button>
      </form>
    </Box>
  );
}
