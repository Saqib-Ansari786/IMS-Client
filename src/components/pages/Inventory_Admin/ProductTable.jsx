// src/components/ProductTable.js
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const ProductTable = () => {
  // Sample product data
  const products = [
    { id: 1, name: "Product 1", category: "Category 1", price: 10 },
    { id: 2, name: "Product 2", category: "Category 2", price: 20 },
    { id: 3, name: "Product 3", category: "Category 1", price: 15 },
    { id: 4, name: "Product 4", category: "Category 3", price: 5 },
    { id: 5, name: "Product 5", category: "Category 2", price: 25 },
  ];

  return (
    <Table size="md">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Name</Th>
          <Th>Category</Th>
          <Th>Price</Th>
        </Tr>
      </Thead>
      <Tbody>
        {products.map((product) => (
          <Tr key={product.id}>
            <Td>{product.id}</Td>
            <Td>{product.name}</Td>
            <Td>{product.category}</Td>
            <Td>${product.price}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default ProductTable;
