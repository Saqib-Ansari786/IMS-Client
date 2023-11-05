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

export default function EditSaleModal({ isOpen, onClose, sale, onEdit }) {
  const [editedSale, setEditedSale] = useState({ ...sale });

  useEffect(() => {
    setEditedSale({ ...sale });
  }, [sale]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedSale((prevSale) => ({
      ...prevSale,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onEdit(editedSale);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent backgroundColor={"white"}>
        <ModalHeader>Edit Sale</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Date</FormLabel>
            <Input
              type="date"
              name="date"
              value={editedSale.date}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Quantity</FormLabel>
            <Input
              type="number"
              name="quantity"
              value={editedSale.quantity}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Product Name</FormLabel>
            <Input
              type="text"
              name="productName"
              value={editedSale.productName}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Customer Name</FormLabel>
            <Input
              type="text"
              name="customerName"
              value={editedSale.customerName}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Customer Type</FormLabel>
            <Select
              name="customerType"
              value={editedSale.customerType}
              onChange={handleInputChange}
            >
              <option value="Customer Type 1">Customer Type 1</option>
              <option value="Customer Type 2">Customer Type 2</option>
              <option value="Customer Type 3">Customer Type 3</option>
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
