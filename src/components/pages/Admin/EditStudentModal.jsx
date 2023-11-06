import React, { useState } from "react";
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
} from "@chakra-ui/react";

export default function EditStudentModal({ isOpen, onClose, student, onEdit }) {
  const [editedStudent, setEditedStudent] = useState({ ...student });

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

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent backgroundColor={"white"}>
        <ModalHeader>Edit Student</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={editedStudent.name}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Course Name</FormLabel>
            <Input
              type="text"
              name="courseName"
              value={editedStudent.courseName}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              name="email"
              value={editedStudent.email}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Phone No</FormLabel>
            <Input
              type="text"
              name="phoneNo"
              value={editedStudent.phoneNo}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Admission Date</FormLabel>
            <Input
              type="text"
              name="admissionDate"
              value={editedStudent.admissionDate}
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
