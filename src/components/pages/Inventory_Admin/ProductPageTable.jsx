// import { Table, Thead, Tbody, Tr, Th, Td, IconButton } from "@chakra-ui/react";
// import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

// const ProductPageTable = ({ products, onEdit, onDelete }) => {
//   return (
//     <Table size="md">
//       <Thead>
//         <Tr>
//           <Th>ID</Th>
//           <Th>Name</Th>
//           <Th>Category</Th>
//           <Th>Quantity</Th>
//           <Th>Actions</Th>
//         </Tr>
//       </Thead>
//       <Tbody>
//         {products &&
//           products.map((product) => (
//             <Tr key={product.id}>
//               <Td>{product.id}</Td>
//               <Td>{product.name}</Td>
//               <Td>{product.category}</Td>
//               <Td>{product.quantity}</Td>
//               <Td>
//                 <IconButton
//                   icon={<EditIcon />}
//                   colorScheme="blue"
//                   onClick={() => onEdit(product.id)}
//                   mr={2}
//                 />
//                 <IconButton
//                   icon={<DeleteIcon />}
//                   colorScheme="red"
//                   onClick={() => onDelete(product.id)}
//                 />
//               </Td>
//             </Tr>
//           ))}
//       </Tbody>
//     </Table>
//   );
// };

// export default ProductPageTable;


import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Icon,
  TableContainer,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, ViewIcon } from "@chakra-ui/icons";

export default function ProductPageTable({ products, onEdit, onDelete, entries }) {
    return (
      <TableContainer mt={3} borderWidth="1px" borderRadius="lg" p={4} mx={3} backgroundColor="white">
        <Table  variant="striped" colorScheme="blackAlpha">
        <Thead>
         <Tr>
           <Th textAlign="center">ID</Th>
           <Th textAlign="center">Name</Th>
           <Th textAlign="center">Category</Th>
           <Th textAlign="center">Quantity</Th>
           <Th textAlign="center">Actions</Th>
         </Tr>
      </Thead>
          <Tbody>
            {products &&
              products.slice(0, entries).map((product) => (
                <Tr key={product.id}>
                 <Td textAlign="center">
                   {product.id}
                 </Td>
                 <Td textAlign="center">
                   {product.name}
                 </Td>
                 <Td textAlign="center">
                   {product.category}
                 </Td>
                 <Td textAlign="center">
                   {product.quantity}
                 </Td>
                 <Td textAlign="center">
                   <IconButton
                    size="sm"
                    colorScheme="blue"
                    title="View"
                    icon={<Icon as={ViewIcon} />}
                    mr={2} 
                  />
                  <IconButton
                    size="sm"
                    colorScheme="blue"
                    title="Edit"
                    icon={<Icon as={EditIcon} />}
                    mr={2} 
                  />
                  <IconButton
                    size="sm"
                    colorScheme="red"
                    title="Delete"
                    icon={<Icon as={DeleteIcon} />}
                  />
                </Td>
              </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    );
  }
  
