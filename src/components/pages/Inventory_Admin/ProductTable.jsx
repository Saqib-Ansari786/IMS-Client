import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
} from "@chakra-ui/react";

const ProductTable = ({ products }) => {
  return (
    <TableContainer
      borderWidth="1px"
      borderRadius="lg"
      borderColor={"white"}
      p={4}
      backgroundColor="white"
    >
      <Heading mb={"5"} as="h3" size="md" color="#120E87">
        Recent Products
      </Heading>
      <Table
        borderRadius={"4px"}
        border={"1px"}
        borderColor={"#F0F0F0"}
        variant="striped"
        colorScheme="blackAlpha"
      >
        <Thead>
          <Tr>
            <Th textAlign="center">ID</Th>
            <Th textAlign="center">Name</Th>
            <Th textAlign="center">Category</Th>
            <Th textAlign="center">Quantity</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products &&
            products.slice(0, 5).map((product, index) => (
              <Tr key={index}>
                <Td textAlign="center">{index + 1}</Td>
                <Td textAlign="center">{product?.name}</Td>
                <Td textAlign="center">{product?.category}</Td>
                <Td textAlign="center">{product?.quantity}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
