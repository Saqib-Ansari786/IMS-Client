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

export default function EditCourseModal({ isOpen, onClose, course }) {
  console.log(course);
  const [editedCourse, setEditedCourse] = useState({ ...course });
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setEditedCourse({ ...course });
  }, [course]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onEdit(editedCourse);
    onClose();
  };

  const onEdit = async (course) => {
    setLoading(true);
    try {
      const response = await apiMiddleware(
        `admin/courses/course/${course._id}`,
        {
          method: "POST",
          body: JSON.stringify(course),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.success) {
        toast({
          title: "Course Edited",
          description: "Course has been edited successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
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
        <ModalHeader>Edit Course</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Course Code</FormLabel>
            <Input
              type="text"
              name="courseCode"
              value={editedCourse.courseCode}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={editedCourse.name}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Department</FormLabel>
            <Input
              type="text"
              name="department"
              value={editedCourse.department}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Strength</FormLabel>
            <Input
              type="number"
              name="strength"
              value={editedCourse.strength}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Duration</FormLabel>
            <Select
              name="duration"
              placeholder="Select Duration"
              value={editedCourse.duration}
              onChange={handleInputChange}
              required
            >
              <option value="7">7</option>
              <option value="14">14</option>
              <option value="30">30</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Author</FormLabel>
            <Input
              type="text"
              name="author"
              value={editedCourse.author}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Category</FormLabel>
            <Input
              type="text"
              name="category"
              value={editedCourse.category}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Input
              type="text"
              name="description"
              value={editedCourse.description}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <Button
            mt={4}
            colorScheme="blue"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? <Spinner /> : "Save Changes"}
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
