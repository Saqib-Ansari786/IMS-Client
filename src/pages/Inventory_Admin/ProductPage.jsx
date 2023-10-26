// // src/pages/ProductPage.js
// import { useState } from "react";
// import { Box, Heading } from "@chakra-ui/react";
// import ProductPageTable from "../../components/pages/Inventory_Admin/ProductPageTable";
// import apiMiddleware from "../../components/common/Server/apiMiddleware";
// import { useQuery } from "react-query";
// import ShowEntriesDropdown from "../../components/pages/Admin/ShowEntriesDropdown";

// const ProductPage = () => {
//   const [entries, setEntries] = useState(5);
//   const {
//     data: products,
//     isLoading,
//     isError,
//   } = useQuery("products", () => apiMiddleware("admin/products/products"));

//   const handleEdit = (productId) => {
//     // Implement edit logic here
//     console.log(`Edit product with ID ${productId}`);
//   };

//   const handleDelete = (productId) => {
//     // Implement delete logic here
//     console.log(`Delete product with ID ${productId}`);
//   };

//   return (
//     <Box p={4}>
//       <Heading as="h1" mb={4}>
//         Product Page
//       </Heading>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : isError ? (
//         <p>Error</p>
//       ) : products.length > 0 ? (
//         <>
//         <ShowEntriesDropdown entries={entries} setEntries={setEntries} />
//         <ProductPageTable
//           products={products}
//           onEdit={handleEdit}
//           onDelete={handleDelete}
//           entries={entries}
//         />
//         </>
//       ) : (
//         <p>No products found</p>
//       )}
//     </Box>
//   );
// };

// export default ProductPage;


import React, { useState } from 'react';
import ShowEntriesDropdown from '../../components/pages/Admin/ShowEntriesDropdown';
import ProductpageHeader from '../../components/pages/Inventory_Admin/ProductPageHeader';
import ProductPageTable from '../../components/pages/Inventory_Admin/ProductPageTable';
import apiMiddleware from "../../components/common/Server/apiMiddleware";
import { useQuery } from "react-query";
import CreateProductPage from './CreateProductPage';

  export default function ProductPage() {
    const [entries, setEntries] = useState(5);
    const [selectedComponent, setSelectedComponent] = useState('ListView');
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

  
      const handleListViewClick = () => {
        setSelectedComponent('ListView');
      };
    
      const handleAddClick = () => {
        setSelectedComponent('Add');
      };
    
    return (
      <ProductpageHeader
      handleListViewClick={handleListViewClick}
      handleAddClick={handleAddClick}
      products={products}
      >
        {selectedComponent === 'ListView' && (
          <>
         {isLoading ? (
                  <p>Loading...</p>
                ) : isError ? (
                  <p>Error</p>
                ) : products.length > 0 ? (
                  <>
                  <ShowEntriesDropdown entries={entries} setEntries={setEntries} />
                  <ProductPageTable
                    products={products}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    entries={entries}
                  />
                  </>
                ) : (
                  <p>No products found</p>
                )}
                </>
        )}
        {selectedComponent === 'Add' && <CreateProductPage/>}
      </ProductpageHeader>
    );
  }
  