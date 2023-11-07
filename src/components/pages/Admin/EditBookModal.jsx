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
} from "@chakra-ui/react";

export default function EditBookModal({ isOpen, onClose, book, onEdit }) {
  const [editedBook, setEditedBook] = useState({ ...book });

  useEffect(() => {
    setEditedBook({ ...book });
  }, [book]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onEdit(editedBook);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent backgroundColor={"white"}>
        <ModalHeader>Edit Book</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              name="title"
              value={editedBook.title}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Author Name</FormLabel>
            <Input
              type="text"
              name="authorName"
              value={editedBook.authorName}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Publisher Name</FormLabel>
            <Input
              type="text"
              name="publisherName"
              value={editedBook.publisherName}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>ISBN</FormLabel>
            <Input
              type="text"
              name="isbn"
              value={editedBook.isbn}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Category</FormLabel>
            <Select
              placeholder="Select Category"
              name="category"
              value={editedBook.category}
              onChange={handleInputChange}
            >
              <option>Computer Science</option>
              <option>English Literature</option>
              <option>Urdu Literature</option>
              <option>Mathematics</option>
              <option>Physiology</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Availability</FormLabel>
            <Select
              name="availability"
              value={editedBook.availability ? "true" : "false"}
              onChange={handleInputChange}
            >
              <option value="true">In Stock</option>
              <option value="false">Out of Stock</option>
            </Select>
          </FormControl>
          <Button mt={4} colorScheme="blue" onClick={handleSave}>
            Save
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
