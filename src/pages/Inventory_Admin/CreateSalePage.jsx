// src/pages/CreateSalePage.js
import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import apiMiddleware from "../../components/common/Server/apiMiddleware";
import SuccessModal from "../../components/pages/Inventory_Admin/SucessModal";
const CreateSalePage = () => {
  const postsale = async (saleData) => {
    try {
      const response = await apiMiddleware("admin/sales/sales", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(saleData),
      });
      console.log(response);
      setSuccessMessage("Product successfully added!");
      setSaleData({
        date: "",
        quantity: 0,
        productName: "",
        customerName: "",
        customerType: "",
      });
      setIsModalOpen(true);
    } catch (error) {
      console.log(error);
    }
  };
  const [successMessage, setSuccessMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saleData, setSaleData] = useState({
    date: "",
    quantity: 0,
    productName: "",
    customerName: "",
    customerType: "Customer Type 1",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSaleData({ ...saleData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to create the sale using saleData
    postsale(saleData);
    console.log("Sale data submitted:", saleData);
  };
  useEffect(() => {
    // Show the modal if there is a success message
    if (successMessage) {
      setIsModalOpen(true);
    }
  }, [successMessage]);

  const closeModal = () => {
    setIsModalOpen(false);
    setSuccessMessage(null);
  };
  return (
    <Box backgroundColor={"white"} p={4}>
      <Heading as="h1" mb={4}>
        Create Sale
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Date</FormLabel>
          <Input
            type="date"
            name="date"
            value={saleData.date}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Quantity</FormLabel>
          <Input
            type="number"
            name="quantity"
            value={saleData.quantity}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Product Name</FormLabel>
          <Input
            type="text"
            name="productName"
            value={saleData.productName}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Customer Name</FormLabel>
          <Input
            type="text"
            name="customerName"
            value={saleData.customerName}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Customer Type</FormLabel>
          <Select
            name="customerType"
            value={saleData.customerType}
            onChange={handleChange}
            required
          >
            <option value="Customer Type 1">Customer Type 1</option>
            <option value="Customer Type 2">Customer Type 2</option>
            <option value="Customer Type 3">Customer Type 3</option>
          </Select>
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Create Sale
        </Button>
      </form>
      <SuccessModal
        successMessage={successMessage}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
    </Box>
  );
};

export default CreateSalePage;
