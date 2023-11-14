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
  useToast,
  Spinner,
} from "@chakra-ui/react";
import apiMiddleware from "../../common/Server/apiMiddleware";
import { useQuery, useQueryClient } from "react-query";

export default function EditStudentModal({ isOpen, onClose, student }) {
  const [editedStudent, setEditedStudent] = useState({ ...student });
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const clientquery = useQueryClient;
  useEffect(() => {
    setEditedStudent({ ...student });
  }, [student]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onEdit(editedStudent);
    onClose();
  };

  const onEdit = async (student) => {
    console.log("Student", student);
    try {
      setLoading(true);
      const response = await apiMiddleware(
        `admin/students/edit/${student._id}`,
        {
          method: "POST",
          body: JSON.stringify(student),
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Response:", response);
      if (response.success) {
        toast({
          title: "Student Edited",
          description: "Student has been edited successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        clientquery.invalidateQueries("students");
      }
    } catch (error) {
      console.log("Error", error);
      toast({
        title: "Error",
        description: "Error editing student",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    setLoading(false);
  };

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
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent backgroundColor={"white"}>
        <ModalHeader>Edit Student</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              name="firstname"
              value={editedStudent.firstname}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              name="lastname"
              value={editedStudent.lastname}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Belt Number</FormLabel>
            <Input
              type="text"
              name="beltNo"
              value={editedStudent.beltNo}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Registration Date</FormLabel>
            <Input
              type="text"
              name="registrationDate"
              value={editedStudent.registrationDate}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Date of Birth</FormLabel>
            <Input
              type="text"
              name="dob"
              value={editedStudent.dob}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Contact Number</FormLabel>
            <Input
              type="text"
              name="contactNo"
              value={editedStudent.contactNo}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Course</FormLabel>
            <Select
              placeholder="Select Course"
              name="courseId"
              value={editedStudent.courseId}
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
          <FormControl>
            <FormLabel>Teacher</FormLabel>
            <Select
              placeholder="Select Teacher"
              name="teacherId"
              value={editedStudent.teacherId}
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
