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
        setSales(sales.data);
        console.log(sales.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSales();
  }, []);

  const [sales, setSales] = useState([
    {
      id: 1,
      date: "2023-01-01",
      amount: 100,
      product_name: "Product 1",
      customer_name: "Customer 1",
      customer_type: "Customer Type 1",
    },
    {
      id: 2,
      date: "2023-01-02",
      amount: 150,
      product_name: "Product 2",
      customer_name: "Customer 2",
      customer_type: "Customer Type 2",
    },
    {
      id: 3,
      date: "2023-01-03",
      amount: 200,
      product_name: "Product 3",
      customer_name: "Customer 3",
      customer_type: "Customer Type 3",
    },
  ]);

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
