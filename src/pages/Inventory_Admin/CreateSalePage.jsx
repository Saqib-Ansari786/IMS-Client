// src/pages/CreateSalePage.js
import { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";

const CreateSalePage = () => {
  const [saleData, setSaleData] = useState({
    id: 0,
    date: "",
    amount: 0,
    product_name: "",
    customer_name: "",
    customer_type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSaleData({ ...saleData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to create the sale using saleData
    console.log("Sale data submitted:", saleData);
  };

  return (
    <Box p={4}>
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
          <FormLabel>Amount</FormLabel>
          <Input
            type="number"
            name="amount"
            value={saleData.amount}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Product Name</FormLabel>
          <Input
            type="text"
            name="product_name"
            value={saleData.product_name}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Customer Name</FormLabel>
          <Input
            type="text"
            name="customer_name"
            value={saleData.customer_name}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Customer Type</FormLabel>
          <Select
            name="customer_type"
            value={saleData.customer_type}
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
    </Box>
  );
};

export default CreateSalePage;
