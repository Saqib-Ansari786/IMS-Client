import React, { useState } from "react";
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  useToast,
} from "@chakra-ui/react";
import apiMiddleware from "../../common/Server/apiMiddleware";
import SuccessModal from "../Inventory_Admin/SucessModal";
import { useSelector } from "react-redux";
import { selectCourses } from "../../../store/redux-slices/courses_slice";
import { useQueryClient } from "react-query";

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    authorName: "",
    publisherName: "",
    isbn: "",
    category: "",
    availability: "",
    language: "",
    quantity: "",
    department: "",
    courseId: "",
  });
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const queryClient = useQueryClient();

  const courses = useSelector(selectCourses);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can access the form data as an object with the specified properties.
    console.log("Form Data:", formData);

    setIsModalOpen(true);
    setSuccessMessage("Book successfully added!");

    const response = await apiMiddleware("admin/libraries/library-items", {
      method: "POST",
      body: JSON.stringify({
        ...formData,
        availability: formData.availability === "In Stock" ? true : false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (response.success) {
      queryClient.invalidateQueries("books");
      toast({
        title: "Book Added",
        description: "Book has been added successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // Reset the form
      setFormData({
        title: "",
        authorName: "",
        publisherName: "",
        isbn: "",
        category: "",
        availability: "",
        language: "",
        quantity: "",
        department: "",
        courseId: "",
      });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSuccessMessage(null);
  };

  const [successMessage, setSuccessMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box bgColor={"white"} borderRadius={"md"} className="row">
      <Box className="col-sm-12">
        <Box className="card">
          <Box className="card-body">
            <form onSubmit={handleSubmit}>
              <Box className="row">
                <Box className="col-12">
                  <Text as="h5" className="form-title">
                    Book Information
                  </Text>
                </Box>
                <Box mt={3} className="col-12 col-sm-4">
                  <FormControl className="form-group local-forms">
                    <FormLabel>
                      Book ISBN{" "}
                      <Text as="span" className="login-danger">
                        *
                      </Text>
                    </FormLabel>
                    <Input
                      type="text"
                      name="isbn"
                      className="form-control"
                      placeholder="Enter ISBN"
                      value={formData.isbn}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Box>
                <Box mt={3} className="col-12 col-sm-4">
                  <FormControl className="form-group local-forms">
                    <FormLabel>
                      Book Title{" "}
                      <Text as="span" className="login-danger">
                        *
                      </Text>
                    </FormLabel>
                    <Input
                      type="text"
                      name="title"
                      className="form-control"
                      placeholder="Enter Title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                  </FormControl>
                </Box>
                <Box mt={3} className="col-12 col-sm-4">
                  <FormControl className="form-group local-forms">
                    <FormLabel>
                      Author Name{" "}
                      <Text as="span" className="login-danger">
                        *
                      </Text>
                    </FormLabel>
                    <Input
                      type="text"
                      name="authorName"
                      className="form-control"
                      placeholder="Enter Author Name"
                      value={formData.authorName}
                      onChange={handleChange}
                      required
                    />
                  </FormControl>
                </Box>
                <Box mt={3} className="col-12 col-sm-4">
                  <FormControl className="form-group local-forms">
                    <FormLabel>
                      Language{" "}
                      <Text as="span" className="login-danger">
                        *
                      </Text>
                    </FormLabel>
                    <Select
                      className="form-control select select2-hidden-accessible"
                      placeholder="Select Language"
                      name="language"
                      value={formData.language}
                      onChange={handleChange}
                      required
                    >
                      <option>English</option>
                      <option>Urdu</option>
                      <option>Punjabi</option>
                    </Select>
                  </FormControl>
                </Box>
                <Box mt={3} className="col-12 col-sm-4">
                  <FormControl className="form-group local-forms">
                    <FormLabel>
                      Quantity{" "}
                      <Text as="span" className="login-danger">
                        *
                      </Text>
                    </FormLabel>
                    <Input
                      type="text"
                      name="quantity"
                      className="form-control"
                      placeholder="Enter book Quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                    />
                  </FormControl>
                </Box>
                <Box mt={3} className="col-12 col-sm-4">
                  <FormControl className="form-group local-forms">
                    <FormLabel>
                      Department{" "}
                      <Text as="span" className="login-danger">
                        *
                      </Text>
                    </FormLabel>
                    <Input
                      type="text"
                      name="department"
                      className="form-control"
                      placeholder="Enter Department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                    />
                  </FormControl>
                </Box>
                <Box mt={3} className="col-12 col-sm-4">
                  <FormControl className="form-group local-forms">
                    <FormLabel>
                      Publisher Name{" "}
                      <Text as="span" className="login-danger">
                        *
                      </Text>
                    </FormLabel>
                    <Input
                      type="text"
                      name="publisherName"
                      className="form-control"
                      placeholder="Enter Publisher Name"
                      value={formData.publisherName}
                      onChange={handleChange}
                      required
                    />
                  </FormControl>
                </Box>
                <Box mt={3} className="col-12 col-sm-4">
                  <FormControl className="form-group local-forms">
                    <FormLabel>
                      Category{" "}
                      <Text as="span" className="login-danger">
                        *
                      </Text>
                    </FormLabel>
                    <Select
                      className="form-control select select2-hidden-accessible"
                      placeholder="Select Category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                    >
                      <option>Computer Science</option>
                      <option>English Literature</option>
                      <option>Urdu Literature</option>
                      <option>Mathematics</option>
                      <option>Physiology</option>
                    </Select>
                  </FormControl>
                </Box>
                <Box mt={3} className="col-12 col-sm-4">
                  <FormControl className="form-group local-forms">
                    <FormLabel>
                      Course
                      <Text as="span" className="login-danger">
                        *
                      </Text>
                    </FormLabel>
                    <Select
                      className="form-control select select2-hidden-accessible"
                      placeholder="Select Course"
                      name="courseId"
                      value={formData.courseId}
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
                </Box>
                <Box mt={3} className="col-12 col-sm-4">
                  <FormControl className="form-group local-forms">
                    <FormLabel>
                      Status{" "}
                      <Text as="span" className="login-danger">
                        *
                      </Text>
                    </FormLabel>
                    <Select
                      className="form-control select select2-hidden-accessible"
                      placeholder="Select Status"
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      required
                    >
                      <option>In Stock</option>
                      <option>Out of Stock</option>
                    </Select>
                  </FormControl>
                </Box>
                <Box mt={6} className="col-12">
                  <Box className="student-submit">
                    <Button
                      type="submit"
                      colorScheme="blue"
                      _hover={{ bg: "blue.300", color: "white" }}
                    >
                      Submit
                    </Button>
                  </Box>
                </Box>
              </Box>
            </form>
          </Box>
          <SuccessModal
            successMessage={successMessage}
            isModalOpen={isModalOpen}
            closeModal={closeModal}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AddBook;
