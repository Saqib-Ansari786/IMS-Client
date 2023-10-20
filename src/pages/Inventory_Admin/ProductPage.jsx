// src/pages/ProductPage.js
import { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import ProductPageTable from "../../components/pages/Inventory_Admin/ProductPageTable";

const ProductPage = () => {
  // Sample product data
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", category: "Category A", price: 10 },
    { id: 2, name: "Product 2", category: "Category B", price: 20 },
    { id: 3, name: "Product 3", category: "Category A", price: 15 },
  ]);

  const handleEdit = (productId) => {
    // Implement edit logic here
    console.log(`Edit product with ID ${productId}`);
  };

  const handleDelete = (productId) => {
    // Implement delete logic here
    console.log(`Delete product with ID ${productId}`);
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Product Page
      </Heading>
      <ProductPageTable
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </Box>
  );
};

export default ProductPage;
