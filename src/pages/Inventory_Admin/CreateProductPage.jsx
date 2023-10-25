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
import apiMiddleware from "../../components/common/Server/apiMiddleware";

const CreateProductPage = () => {
  const postProduct = async (productData) => {
    try {
      const response = await apiMiddleware("admin/products/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

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
    postProduct(productData);
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
