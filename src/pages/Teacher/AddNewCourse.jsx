import { useState } from "react";
import {
  Container,
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

export default function AddNewCourse() {
  const [courseData, setCourseData] = useState({
    courseName: "",
    documentType: "link", // Default to uploading from computer
    documentLink: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleDocumentTypeChange = (value) => {
    setCourseData((prevData) => ({
      ...prevData,
      documentType: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic to save the new course data
    console.log("New Course Data:", courseData);
    // Redirect to the ManageCourses page or perform any necessary actions
  };

  return (
    <Container
      maxW="container.lg"
      mt="4"
      bgColor={"white"}
      p={10}
      borderRadius={10}
    >
      <Heading as="h1" size="xl" mb="4">
        Add New Course
      </Heading>
      <Box>
        <form onSubmit={handleSubmit}>
          <FormControl mb="4">
            <FormLabel>Course Material Name</FormLabel>
            <Input
              type="text"
              name="courseName"
              value={courseData.courseName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Description</FormLabel>
            <Input
              type="text"
              name="description"
              value={courseData.description}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mb="4">
            <FormLabel>Document Type</FormLabel>
            <RadioGroup
              name="documentType"
              value={courseData.documentType}
              onChange={handleDocumentTypeChange}
            >
              <Stack direction="row">
                <Radio value="computer">Upload from Computer</Radio>
                <Radio value="link">Add Link</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          {courseData.documentType === "computer" && (
            <FormControl mb="4">
              <FormLabel>Upload Document</FormLabel>
              <Input
                type="file"
                accept=".pdf, .doc, .docx"
                // Implement onChange logic to handle file upload
              />
            </FormControl>
          )}
          {courseData.documentType === "link" && (
            <FormControl mb="4">
              <FormLabel>Document Link</FormLabel>
              <Input
                type="text"
                name="documentLink"
                value={courseData.documentLink}
                onChange={handleChange}
              />
            </FormControl>
          )}
          <Button colorScheme="blue" type="submit">
            Save
          </Button>
        </form>
      </Box>
    </Container>
  );
}
