// src/pages/CreateProductPage.js
import { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Select,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const CreateProductPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    quantity: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to create the product using productData
    console.log("Product data submitted:", productData);
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Create Product
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            placeholder="Product Name"
            required
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Category</FormLabel>
          <Select
            name="category"
            value={productData.category}
            onChange={handleChange}
            placeholder="Select Category"
            required
          >
            <option value="Category A">Category A</option>
            <option value="Category B">Category B</option>
            <option value="Category C">Category C</option>
          </Select>
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Quantity</FormLabel>
          <Input
            type="number"
            name="quantity"
            value={productData.quantity}
            onChange={handleChange}
            placeholder="Quantity"
            required
          />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Create Product
        </Button>
      </form>
    </Box>
  );
};

export default CreateProductPage;
