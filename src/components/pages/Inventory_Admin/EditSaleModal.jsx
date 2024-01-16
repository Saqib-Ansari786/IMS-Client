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
import { selectProducts } from "../../../store/redux-slices/products_slice";
import { useSelector } from "react-redux";

export default function EditSaleModal({ isOpen, onClose, sale, onEdit }) {
  const [editedSale, setEditedSale] = useState({ ...sale });
  const products = useSelector(selectProducts);

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
            <Input type="date" name="date" value={editedSale?.date} disabled />
          </FormControl>
          <FormControl>
            <FormLabel>Quantity</FormLabel>
            <Input
              type="number"
              name="quantity"
              value={editedSale?.quantity}
              disabled
            />
          </FormControl>
          <FormControl>
            <FormLabel>Product Name</FormLabel>
            <Select name="productId" value={editedSale?.productId} disabled>
              <option value="" disabled selected hidden>
                Select Product
              </option>
              {products?.map((product, index) => (
                <option key={index} value={product._id}>
                  {product.name}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Customer Name</FormLabel>
            <Input
              type="text"
              name="customerName"
              value={editedSale?.customerName}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Customer Type</FormLabel>
            <Select
              name="customerType"
              value={editedSale?.customerType}
              onChange={handleInputChange}
            >
              <option value="" disabled selected hidden>
                Select Customer Type
              </option>
              <option value={"Student"}>Student</option>
              <option value={"Teacher"}>Teacher</option>
              <option value={"Staff"}>Staff</option>
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
