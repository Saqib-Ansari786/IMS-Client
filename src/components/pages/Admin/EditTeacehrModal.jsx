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

export default function EditTeacherModal({ isOpen, onClose, teacher, onEdit }) {
  const [editedTeacher, setEditedTeacher] = useState({ ...teacher });

  useEffect(() => {
    setEditedTeacher({ ...teacher });
  }, [teacher]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTeacher((prevTeacher) => ({
      ...prevTeacher,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onEdit(editedTeacher);
    onClose();
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
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              name="email"
              value={editedTeacher.email}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Type</FormLabel>
            <Input
              type="text"
              name="type"
              value={editedTeacher.type}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <Input
              type="text"
              name="gender"
              value={editedTeacher.gender}
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
            <FormLabel>Home Number</FormLabel>
            <Input
              type="text"
              name="homeNo"
              value={editedTeacher.homeNo}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input
              type="text"
              name="address"
              value={editedTeacher.address}
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
            <FormLabel>Course Code</FormLabel>
            <Input
              type="text"
              name="courseCode"
              value={editedTeacher.courseCode}
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
