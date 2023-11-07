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
  Select
} from "@chakra-ui/react";

export default function EditCourseModal({ isOpen, onClose, course, onEdit }) {
    console.log(course)
  const [editedCourse, setEditedCourse] = useState({ ...course });

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
            />
          </FormControl>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={editedCourse.name}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Department</FormLabel>
            <Input
              type="text"
              name="department"
              value={editedCourse.department}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Strength</FormLabel>
            <Input
              type="number"
              name="strength"
              value={editedCourse.strength}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Duration</FormLabel>
            <Select
            name="duration"
            placeholder="Select Duration"
            value={editedCourse.duration}
            onChange={handleInputChange}
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
            />
          </FormControl>
          <FormControl>
            <FormLabel>Category</FormLabel>
            <Input
              type="text"
              name="category"
              value={editedCourse.category}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Input
              type="text"
              name="description"
              value={editedCourse.description}
              onChange={handleInputChange}
            />
          </FormControl>
          <Button mt={4} colorScheme="blue" onClick={handleSave}>
            Save
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
