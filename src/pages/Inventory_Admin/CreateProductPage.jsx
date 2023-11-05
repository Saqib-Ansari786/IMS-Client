import { useState, useEffect } from "react";
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
import SuccessModal from "../../components/pages/Inventory_Admin/SucessModal";

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
      setSuccessMessage("Product successfully added!");
      setProductData({
        name: "",
        category: "",
        quantity: 0,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [productData, setProductData] = useState({
    name: "",
    category: "",
    quantity: 0,
  });

  const [successMessage, setSuccessMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to create the product using productData
    postProduct(productData);
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
      <Heading as="h1" mb={4} color={"#120E87"}>
        Add Product
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
      <SuccessModal
        successMessage={successMessage}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />

    </Box>
  );
};

export default CreateProductPage;
