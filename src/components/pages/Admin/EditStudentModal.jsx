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
} from "@chakra-ui/react";

export default function EditStudentModal({ isOpen, onClose, student, onEdit }) {
  const [editedStudent, setEditedStudent] = useState({...student});
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
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              name="email"
              value={editedStudent.email}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Type</FormLabel>
            <Input
              type="text"
              name="type"
              value={editedStudent.type}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <Input
              type="text"
              name="gender"
              value={editedStudent.gender}
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
            <FormLabel>Home Number</FormLabel>
            <Input
              type="text"
              name="homeNo"
              value={editedStudent.homeNo}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input
              type="text"
              name="address"
              value={editedStudent.address}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Course Code</FormLabel>
            <Input
              type="text"
              name="courseCode"
              value={editedStudent.courseCode}
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