// src/pages/SalesPage.js
import { useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import SalesTable from "../../components/pages/Inventory_Admin/SalesTable";
import apiMiddleware from "../../components/common/Server/apiMiddleware";

const SalesPage = () => {
  useEffect(() => {
    const fetchSales = async () => {
      try {
        const sales = await apiMiddleware("admin/sales/sales");
        console.log(sales);
        setSales(sales);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSales();
  }, []);

  const [sales, setSales] = useState([]);

  const handleEdit = (saleId) => {
    // Implement edit logic here
    console.log(`Edit sale with ID ${saleId}`);
  };

  const handleDelete = (saleId) => {
    // Implement delete logic here
    console.log(`Delete sale with ID ${saleId}`);
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Sales Page
      </Heading>
      {sales.length > 0 ? (
        <SalesTable sales={sales} onEdit={handleEdit} onDelete={handleDelete} />
      ) : (
        <p>No sales found</p>
      )}
    </Box>
  );
};

export default SalesPage;
