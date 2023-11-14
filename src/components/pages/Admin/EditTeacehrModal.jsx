import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Box,
  Text,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import apiMiddleware from "../../common/Server/apiMiddleware";

export default function EditTeacherModal({ isOpen, onClose, teacher }) {
  const [editedTeacher, setEditedTeacher] = useState({ ...teacher });
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  console.log("teacher", teacher);

  const {
    data: courses,
    isLoading,
    isError,
  } = useQuery("courses", () => apiMiddleware("admin/courses/courses"));

  useEffect(() => {
    setEditedTeacher({ ...teacher });
  }, [teacher]);

  const handleRemoveCourse = (index) => {
    const updatedcourseIds = [...editedTeacher.courseId];
    updatedcourseIds.splice(index, 1);
    setEditedTeacher({
      ...editedTeacher,
      courseId: updatedcourseIds,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "courseId") {
      if (!editedTeacher.courseId.includes(value)) {
        // Check the number of selected courses
        if (editedTeacher.courseId.length < 3) {
          setEditedTeacher({
            ...editedTeacher,
            courseId: [...editedTeacher.courseId, value],
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
      setEditedTeacher((prevTeacher) => ({
        ...prevTeacher,
        [name]: value,
      }));
    }
  };

  const handleSave = () => {
    onEdit(editedTeacher);
    onClose();
  };

  const onEdit = async (editedTeacher) => {
    setLoading(true);
    try {
      const response = await apiMiddleware(
        "admin/teachers/editTeacher",
        editedTeacher
      );
      console.log("response", response);
      if (response.success) {
        toast({
          title: "Teacher updated successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log("error", error);
      toast({
        title: "Error updating teacher",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    setLoading(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent backgroundColor={"white"}>
        <ModalHeader>Edit Teacher</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              name="firstname"
              value={editedTeacher.firstname}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              name="lastname"
              value={editedTeacher.lastname}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Belt Number</FormLabel>
            <Input
              type="text"
              name="beltNo"
              value={editedTeacher.beltNo}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Joining Date</FormLabel>
            <Input
              type="text"
              name="joiningDate"
              value={editedTeacher.joiningDate}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Date of Birth</FormLabel>
            <Input
              type="text"
              name="dob"
              value={editedTeacher.dob}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Contact Number</FormLabel>
            <Input
              type="text"
              name="contactNo"
              value={editedTeacher.contactNo}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Designation</FormLabel>
            <Input
              type="text"
              name="designation"
              value={editedTeacher.designation}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Course</FormLabel>
            <Select
              name="courseId"
              placeholder="Select Class"
              value={editedTeacher.courseId[0]}
              onChange={handleInputChange}
            >
              {courses?.map((course) => (
                <option key={course._id} value={course._id}>
                  {course.name}
                </option>
              ))}
            </Select>
          </FormControl>
          <Box
            mt={2}
            flexDirection="row"
            display="flex"
            alignItems="center"
            justifyContent={"space-evenly"}
          >
            {editedTeacher.courseId.map((course, index) => (
              <Text
                key={index}
                mt={2}
                onClick={() => handleRemoveCourse(index)}
              >
                {course}
              </Text>
            ))}
          </Box>
          <Button
            mt={4}
            colorScheme="blue"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? <Spinner /> : "Save"}
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
