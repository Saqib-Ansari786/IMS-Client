import { TableContainer, Table, Thead, Tbody, Tr, Th, Td, Heading } from "@chakra-ui/react";

const ProductTable = () => {
  const products = [
    { id: 1, name: "Product 1", category: "Category 1", price: 10 },
    { id: 2, name: "Product 2", category: "Category 2", price: 20 },
    { id: 3, name: "Product 3", category: "Category 1", price: 15 },
    { id: 4, name: "Product 4", category: "Category 3", price: 5 },
    { id: 5, name: "Product 5", category: "Category 2", price: 25 },
  ];

  return (
    <TableContainer borderWidth="1px" borderRadius="lg" borderColor={"white"} p={4}  backgroundColor="white">
    <Heading mb={"5"} as="h3" size="md" color="#120E87" >
     Recent Products
   </Heading>
  <Table borderRadius={"4px"} border={"1px"} borderColor={"#F0F0F0"} variant="striped" colorScheme="blackAlpha">
     <Thead>
       <Tr>
         <Th textAlign="center">ID</Th>
         <Th textAlign="center" >Name</Th>
         <Th textAlign="center">Category</Th>
         <Th textAlign="center">Price</Th>
       </Tr>
     </Thead>
     <Tbody>
       {products.map((product) => (
         <Tr key={product.id}>
           <Td textAlign={"center"}>{product.id}</Td>
           <Td textAlign="center">{product.name}</Td>
           <Td textAlign="center">{product.category}</Td>
           <Td textAlign="center">{product.price}$</Td>
         </Tr>
       ))}
     </Tbody>
   </Table>
   </TableContainer>
  );
};

export default ProductTable;

   
 