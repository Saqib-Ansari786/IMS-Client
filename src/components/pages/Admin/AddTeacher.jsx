import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Text,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import {
  createCloudinaryFormdata,
  uploadToCloudinary,
} from "../../../utils/cloudinarySetup";
import apiMiddleware from "../../common/Server/apiMiddleware";
import SuccessModal from "../Inventory_Admin/SucessModal";
import { useQuery } from "react-query";

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
    courseId: [],
    picture: null,
  });

  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const {
    data: courses,
    isLoading,
    isError,
  } = useQuery("courses", () => apiMiddleware("admin/courses/courses"));

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      setFormData({
        ...formData,
        picture: e.target.files[0],
      });
    } else if (name === "courseId") {
      // Check if the course is not already selected
      if (!formData.courseId.includes(value)) {
        // Check the number of selected courses
        if (formData.courseId.length < 3) {
          setFormData({
            ...formData,
            courseId: [...formData.courseId, value],
          });
        } else {
          // Display an error message or take appropriate action for exceeding the limit
          console.error("You can only select up to 3 courses.");
        }
      } else {
        // Display an error message or take appropriate action for duplicate selection
        console.error("You cannot select the same course again.");
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleRemoveCourse = (index) => {
    const updatedcourseIds = [...formData.courseId];
    updatedcourseIds.splice(index, 1);
    setFormData({
      ...formData,
      courseId: updatedcourseIds,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // Create a FormData object to send the file to the server

    if (formData.picture) {
      const cloudinaryFormData = createCloudinaryFormdata(
        formData.picture,
        "ims_teacher_images",
        "ims_teacher_images"
      );
      setLoading(true);
      const cloudinaryResponse = await uploadToCloudinary(cloudinaryFormData);
      console.log("Cloudinary Response:", cloudinaryResponse);
      // Get the image URL from the response
      const profilePictureUrl = cloudinaryResponse.secure_url;

      setFormData({
        ...formData,
        picture: profilePictureUrl,
      });

      console.log("Updated Form Data:", formData);
    }
    try {
      const response = await apiMiddleware("admin/teachers/register", {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          type: "teacher",
        }),
        headers: { "Content-Type": "application/json" },
      });

      console.log("Response:", response);

      if (response.success) {
        setSuccessMessage("Teacher successfully added!");
        setIsModalOpen(true);
        // Reset the form

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
          courseId: [],
          picture: null,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Some thing went wrong. Teacher cannot be added",
        status: "error",
        duration: 3000,
        isClosable: true,
        containerStyle: { color: "white" },
        position: "top-right",
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
            max={new Date().toISOString().split("T")[0]}
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
            name="courseId"
            placeholder="Select Class"
            value={formData.courseId[0]}
            onChange={handleChange}
          >
            {courses?.map((course) => (
              <option key={course._id} value={course._id}>
                {course.name}
              </option>
            ))}
          </Select>
        </FormControl>
        {/* Display selected courses below the dropdown */}
        <Box
          mt={2}
          flexDirection="row"
          display="flex"
          alignItems="center"
          justifyContent={"space-evenly"}
        >
          {formData.courseId.map((course, index) => (
            <Text key={index} mt={2} onClick={() => handleRemoveCourse(index)}>
              {course}
            </Text>
          ))}
        </Box>

        <FormControl mt={4}>
          <FormLabel>Profile Picture</FormLabel>
          <Input type="file" name="picture" onChange={handleChange} />
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
          {loading ? <Spinner color="white" /> : "Add Teacher"}
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
