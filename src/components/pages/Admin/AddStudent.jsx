import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Spinner,
} from "@chakra-ui/react";
import {
  createCloudinaryFormdata,
  uploadToCloudinary,
} from "../../../utils/cloudinarySetup";
import apiMiddleware from "../../common/Server/apiMiddleware";
import SuccessModal from "../Inventory_Admin/SucessModal";
import { useQuery } from "react-query";

export default function AddStudent() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    beltNo: "",
    email: "",
    registrationDate: "",
    courseId: "", // Updated from courseCode
    gender: "",
    contactNo: "",
    homeNo: "",
    dob: "",
    address: "",
    picture: null,
    teacherId: "", // Added teacherId
  });

  const [loading, setLoading] = useState(false);

  const {
    data: courses,
    isLoading,
    isError,
  } = useQuery("courses", () => apiMiddleware("admin/courses/courses"));

  const {
    data: teachers,
    isLoading: teachersLoading,
    isError: teachersError,
  } = useQuery("teachers", () => apiMiddleware("admin/teachers/teachers"));

  console.log("teachers", teachers);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      picture: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the form data
    const cloudinaryFormData = createCloudinaryFormdata(
      formData.picture,
      "ims-client-student",
      "ims_student_images"
    );

    setLoading(true);
    // Upload the image to Cloudinary
    const cloudinaryResponse = await uploadToCloudinary(cloudinaryFormData);
    console.log("Cloudinary Response:", cloudinaryResponse);

    // Get the image URL from the response
    const profilePictureUrl = cloudinaryResponse.secure_url;

    // Add the image URL to the form data
    const updatedFormData = {
      ...formData,
      picture: profilePictureUrl,
      type: "student",
    };

    console.log("Student Data:", updatedFormData);

    // POST studentData to your backend
    const response = await apiMiddleware("admin/students/register", {
      method: "POST",
      body: JSON.stringify(updatedFormData),
      headers: { "Content-Type": "application/json" },
    });

    console.log("Response:", response);

    setLoading(false);

    if (response.success) {
      setSuccessMessage("Student added successfully!");
      setIsModalOpen(true);
    } else {
      setSuccessMessage("Student addition failed!");
      setIsModalOpen(true);
    }

    // Clear the form
    setFormData({
      firstname: "",
      lastname: "",
      beltNo: "",
      email: "",
      registrationDate: "",
      courseId: "",
      gender: "",
      contactNo: "",
      homeNo: "",
      dob: "",
      address: "",
      picture: null,
      teacherId: "",
    });
  };

  const [successMessage, setSuccessMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    setSuccessMessage(null);
  };

  return (
    <Box
      mt={4}
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      backgroundColor="white"
      boxShadow="lg"
      mx={3}
    >
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter First Name"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl isRequired mt={4}>
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter Last Name"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl isRequired mt={4}>
          <FormLabel>Belt No</FormLabel>
          <Input
            type="text"
            placeholder="Enter Belt No"
            name="beltNo"
            value={formData.beltNo}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl isRequired mt={4}>
          <FormLabel>Registration Date</FormLabel>
          <Input
            type="date"
            name="registrationDate"
            value={formData.registrationDate}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl isRequired mt={4}>
          <FormLabel>Course</FormLabel>
          <Select
            placeholder="Select Course"
            name="courseId"
            value={formData.courseId}
            onChange={handleInputChange}
          >
            {courses?.map((course) => (
              <option key={course._id} value={course._id}>
                {course.name}
              </option>
            ))}
            {/* Add other course options as needed */}
          </Select>
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Teacher</FormLabel>
          <Select
            placeholder="Select Teacher"
            name="teacherId"
            value={formData.teacherId}
            onChange={handleInputChange}
          >
            {teachers?.map((teacher) => (
              <option key={teacher._id} value={teacher._id}>
                {teacher.firstname} {teacher.lastname}
              </option>
            ))}
            {/* Add other course options as needed */}
          </Select>
        </FormControl>

        <FormControl isRequired mt={4}>
          <FormLabel>Gender</FormLabel>
          <Select
            placeholder="Select Gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Select>
        </FormControl>

        <FormControl isRequired mt={4}>
          <FormLabel>Personal Mobile No.</FormLabel>
          <Input
            type="tel"
            placeholder="Enter Mobile No."
            name="contactNo"
            value={formData.contactNo}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl isRequired mt={4}>
          <FormLabel>Home Phone No.</FormLabel>
          <Input
            type="tel"
            placeholder="Enter Home Phone No."
            name="homeNo"
            value={formData.homeNo}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl isRequired mt={4}>
          <FormLabel>Date Of Birth</FormLabel>
          <Input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl isRequired mt={4}>
          <FormLabel>Address</FormLabel>
          <Input
            type="text"
            placeholder="Enter Address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Profile Picture</FormLabel>
          <Input
            type="file"
            name="picture"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <small id="fileHelp" className="form-text text-muted">
            Upload a profile picture.
          </small>
        </FormControl>

        <Button
          type="submit"
          mt={6}
          colorScheme="blue"
          py={4}
          fontSize="1rem"
          disabled={loading}
        >
          {loading ? <Spinner /> : "Add Student"}
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
