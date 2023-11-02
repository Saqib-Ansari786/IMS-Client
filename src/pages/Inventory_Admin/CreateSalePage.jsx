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
import apiMiddleware from "../../components/common/Server/apiMiddleware";

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
    } catch (error) {
      console.log(error);
    }
  };

  const [saleData, setSaleData] = useState({
    id: 0,
    date: "",
    quantity: 0,
    productName: "",
    customerName: "",
    customerType: "",
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
            value={saleData.amount}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Product Name</FormLabel>
          <Input
            type="text"
            name="productName"
            value={saleData.product_name}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Customer Name</FormLabel>
          <Input
            type="text"
            name="customerName"
            value={saleData.customer_name}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Customer Type</FormLabel>
          <Select
            name="customerType"
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
