import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import {
  createCloudinaryFormdata,
  uploadToCloudinary,
} from "../../../utils/cloudinarySetup";
import apiMiddleware from "../../common/Server/apiMiddleware";

export default function AddStudent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    beltNo: "",
    email: "",
    registrationDate: "",
    course: "",
    gender: "",
    personalMobileNo: "",
    homePhoneNo: "",
    dateOfBirth: "",
    address: "",
    profilePicture: null,
  });

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
      profilePicture: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the form data
    const cloudinaryFormData = createCloudinaryFormdata(
      formData.profilePicture,
      "ims-client-student",
      "ims_student_images"
    );
    // Upload the image to Cloudinary
    const cloudinaryResponse = await uploadToCloudinary(cloudinaryFormData);
    console.log("Cloudinary Response:", cloudinaryResponse);
    // Get the image URL from the response
    const profilePictureUrl = cloudinaryResponse.secure_url;

    // Add the image URL to the form data
    const updatedFormData = {
      ...formData,
      profilePicture: profilePictureUrl,
    };
    console.log("Student Data:", updatedFormData);
    // POST studentData to your backend

    const response = await apiMiddleware("admin/students/register", {
      method: "POST",
      body: JSON.stringify({
        firstname: updatedFormData.firstName,
        lastname: updatedFormData.lastName,
        beltNo: updatedFormData.beltNo,
        email: updatedFormData.email,
        registrationDate: updatedFormData.registrationDate,
        address: updatedFormData.address,
        gender: updatedFormData.gender,
        contactNo: updatedFormData.personalMobileNo,
        homeNo: updatedFormData.homePhoneNo,
        courseCode: updatedFormData.course,
        picture: updatedFormData.profilePicture,
        type: "Student",
        dob: updatedFormData.dateOfBirth,
      }),
      headers: { "Content-Type": "application/json" },
    });

    console.log("Response:", response);

    // Clear the form

    setFormData({
      firstName: "",
      lastName: "",
      beltNo: "",
      email: "",
      registrationDate: "",
      course: "",
      gender: "",
      personalMobileNo: "",
      homePhoneNo: "",
      dateOfBirth: "",
      address: "",
      profilePicture: null,
    });
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
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl isRequired mt={4}>
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            value={formData.lastName}
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
            placeholder="Select Class"
            name="course"
            value={formData.course}
            onChange={handleInputChange}
          >
            <option value="Computer">Computer</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Commerce">Commerce</option>
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
            name="personalMobileNo"
            value={formData.personalMobileNo}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl isRequired mt={4}>
          <FormLabel>Home Phone No.</FormLabel>
          <Input
            type="tel"
            placeholder="Enter Home Phone No."
            name="homePhoneNo"
            value={formData.homePhoneNo}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl isRequired mt={4}>
          <FormLabel>Date Of Birth</FormLabel>
          <Input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
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
            name="profilePicture"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <small id="fileHelp" className="form-text text-muted">
            Upload a profile picture.
          </small>
        </FormControl>

        <Button type="submit" mt={6} colorScheme="blue" py={4} fontSize="1rem">
          Add Student
        </Button>
      </form>
    </Box>
  );
}
