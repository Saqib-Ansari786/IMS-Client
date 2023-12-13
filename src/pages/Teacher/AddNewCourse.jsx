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
  Select,
  useToast,
} from "@chakra-ui/react";
import apiMiddleware from "../../components/common/Server/apiMiddleware";
import {
  createCloudinaryFormdata,
  uploadToCloudinary,
} from "../../utils/cloudinarySetup";
import { selectUser } from "../../store/redux-slices/user_slice";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";

export default function AddNewCourse() {
  const { id: teacherId } = useSelector(selectUser);
  const [loading, setLoading] = useState(false);
  const [courseData, setCourseData] = useState({
    title: "",
    documentType: "link", // Default to uploading from computer
    doc: "",
    documentFile: null,
    description: "",
    courseId: "",
  });
  const toast = useToast();

  const {
    data: courses,
    isLoading,
    isError,
  } = useQuery("courses", () => apiMiddleware("admin/courses/courses"));

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Check if the file is uploaded
    if (name === "documentFile") {
      setCourseData({
        ...courseData,
        documentFile: e.target.files[0],
      });
    } else {
      setCourseData({
        ...courseData,
        [name]: value,
      });
    }
  };
  const handleDocumentTypeChange = (value) => {
    setCourseData((prevData) => ({
      ...prevData,
      documentType: value,
    }));
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    // Implement the logic to save the new course data
    console.log("New Course Data:", courseData);

    if (courseData.documentFile) {
      // Upload the file to the server
      const formData = createCloudinaryFormdata(
        courseData.documentFile,
        "ims_teacher_images",
        "ims_teacher_images"
      );
      const response = await uploadToCloudinary(formData);
      console.log(response);
      if (response) {
        setCourseData((prevData) => ({
          ...prevData,
          doc: response.url,
        }));
      }
    }

    // Save the course data to the database
    // Save the link to the database
    // Redirect to the ManageCourses page or perform any necessary actions
    const uploadCourseData = await apiMiddleware(
      "courses/create-course-material",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...courseData,
          teacherId,
        }),
      }
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
      setCourseData({
        title: "",
        documentType: "link",
        doc: "",
        description: "",
        courseId: "",
        documentFile: null,
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
              name="title"
              value={courseData.title}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Description</FormLabel>
            <Input
              type="text"
              name="description"
              value={courseData.description}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Course</FormLabel>
            <Select
              placeholder="Select Course"
              name="courseId"
              value={courseData.courseId}
              onChange={handleChange}
              required
            >
              {courses?.map((course) => (
                <option key={course._id} value={course._id}>
                  {course.name}
                </option>
              ))}
            </Select>
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
                name="documentFile"
                accept=".pdf, .doc, .docx"
                // Implement onChange logic to handle file upload
                onChange={handleChange}
                required
              />
            </FormControl>
          )}
          {courseData.documentType === "link" && (
            <FormControl mb="4">
              <FormLabel>Document Link</FormLabel>
              <Input
                type="text"
                name="doc"
                value={courseData.doc}
                onChange={handleChange}
                required
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
