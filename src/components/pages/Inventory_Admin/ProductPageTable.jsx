import { Table, Thead, Tbody, Tr, Th, Td, IconButton } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const ProductPageTable = ({ products, onEdit, onDelete }) => {
  return (
    <Table size="md">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Name</Th>
          <Th>Category</Th>
          <Th>Quantity</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {products &&
          products.map((product) => (
            <Tr key={product.id}>
              <Td>{product.id}</Td>
              <Td>{product.name}</Td>
              <Td>{product.category}</Td>
              <Td>{product.quantity}</Td>
              <Td>
                <IconButton
                  icon={<EditIcon />}
                  colorScheme="blue"
                  onClick={() => onEdit(product.id)}
                  mr={2}
                />
                <IconButton
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  onClick={() => onDelete(product.id)}
                />
              </Td>
            </Tr>
          ))}
      </Tbody>
    </Table>
  );
};

export default ProductPageTable;
