// src/pages/ProductPage.js
import { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import ProductPageTable from "../../components/pages/Inventory_Admin/ProductPageTable";
import apiMiddleware from "../../components/common/Server/apiMiddleware";
import { useQuery } from "react-query";

const ProductPage = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery("products", () => apiMiddleware("admin/products/products"));

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
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error</p>
      ) : products.length > 0 ? (
        <ProductPageTable
          products={products}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ) : (
        <p>No products found</p>
      )}
    </Box>
  );
};

export default ProductPage;
