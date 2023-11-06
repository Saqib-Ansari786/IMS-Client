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

export default function AddTeacher() {
  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    beltNo: "",
    joiningDate: "",
    designation: "",
    dob: "",
    gender: "",
    contactNo: "",
    homeNo: "",
    address: "",
    courseCode: "",
    picture: null,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      setFormData({
        ...formData,
        picture: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send the file to the server
    const cloudinaryFormData = createCloudinaryFormdata(
      formData.picture,
      "ims_teacher_images",
      "ims_teacher_images"
    );
    const cloudinaryResponse = await uploadToCloudinary(cloudinaryFormData);
    console.log("Cloudinary Response:", cloudinaryResponse);
    // Get the image URL from the response
    const profilePictureUrl = cloudinaryResponse.secure_url;

    // Add the image URL to the form data
    const updatedFormData = {
      ...formData,
      picture: profilePictureUrl,
    };

    console.log("Updated Form Data:", updatedFormData);

    const response = await apiMiddleware("admin/teachers/register", {
      method: "POST",
      body: JSON.stringify({
        ...updatedFormData,
        type: "Teacher",
      }),
      headers: { "Content-Type": "application/json" },
    });

    console.log("Response:", response);

    setFormData({
      email: "",
      firstname: "",
      lastname: "",
      beltNo: "",
      joiningDate: "",
      designation: "",
      dob: "",
      gender: "",
      contactNo: "",
      homeNo: "",
      address: "",
      courseCode: "",
      picture: null,
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
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            name="firstname"
            placeholder="Enter First Name"
            value={formData.firstname}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            name="lastname"
            placeholder="Enter Last Name"
            value={formData.lastname}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Belt No</FormLabel>
          <Input
            type="text"
            name="beltNo"
            placeholder="Enter Belt No"
            value={formData.beltNo}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Joining Date</FormLabel>
          <Input
            type="date"
            name="joiningDate"
            value={formData.joiningDate}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Designation</FormLabel>
          <Input
            type="text"
            name="designation"
            placeholder="Enter the designation"
            value={formData.designation}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Date Of Birth</FormLabel>
          <Input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Gender</FormLabel>
          <Select
            name="gender"
            placeholder="Select Gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Select>
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Personal Mobile No.</FormLabel>
          <Input
            type="tel"
            name="contactNo"
            placeholder="Enter Mobile No."
            value={formData.contactNo}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Home Phone No.</FormLabel>
          <Input
            type="tel"
            name="homeNo"
            placeholder="Enter Home Phone No."
            value={formData.homeNo}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Address</FormLabel>
          <Input
            type="text"
            name="address"
            placeholder="Enter Address"
            value={formData.address}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Course</FormLabel>
          <Select
            name="courseCode"
            placeholder="Select Class"
            value={formData.courseCode}
            onChange={handleChange}
          >
            <option value="Computer">Computer</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Commerce">Commerce</option>
          </Select>
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Profile Picture</FormLabel>
          <Input type="file" name="picture" onChange={handleChange} />
          <small id="fileHelp" className="form-text text-muted">
            Upload a profile picture.
          </small>
        </FormControl>
        <Button type="submit" mt={6} colorScheme="blue" py={4} fontSize="1rem">
          Add Teacher
        </Button>
      </form>
    </Box>
  );
}
