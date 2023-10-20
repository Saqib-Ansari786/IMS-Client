// src/pages/SalesReportPage.js
import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import SalesChart from "../../components/pages/Inventory_Admin/SalesChart";

const SalesReportPage = () => {
  const [totalSales, setTotalSales] = useState(0);
  const [topProducts, setTopProducts] = useState([]);
  const [topCategories, setTopCategories] = useState([]);
  const [salesData, setSalesData] = useState({
    labels: [],
    datasets: [
      {
        label: "Sales Data",
        data: [],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    // Simulated data, replace with actual data retrieval logic
    setTotalSales(250);
    setTopProducts([
      { name: "Product A", sales: 50 },
      { name: "Product B", sales: 45 },
      { name: "Product C", sales: 40 },
      { name: "Product D", sales: 35 },
      { name: "Product E", sales: 30 },
    ]);
    setTopCategories([
      { name: "Category X", sales: 60 },
      { name: "Category Y", sales: 55 },
      { name: "Category Z", sales: 50 },
      { name: "Category W", sales: 45 },
      { name: "Category V", sales: 40 },
    ]);

    // Simulated sales data, replace with actual data retrieval logic
    setSalesData({
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Sales Data",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    });
  }, []);

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Sales Report
      </Heading>
      <Text fontSize="lg" fontWeight="bold">
        Total Sales: {totalSales}
      </Text>
      <Flex mt={4}>
        <Box flex="1" p={4} m={2} bg="white" borderRadius="md" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold">
            Top 5 Sales Products
          </Text>
          <List>
            {topProducts.map((product, index) => (
              <ListItem key={index}>
                <ListIcon as="span" color="green.500" />
                {product.name} - {product.sales} sales
              </ListItem>
            ))}
          </List>
        </Box>
        <Box flex="1" p={4} m={2} bg="white" borderRadius="md" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold">
            Top 5 Categories
          </Text>
          <List>
            {topCategories.map((category, index) => (
              <ListItem key={index}>
                <ListIcon as="span" color="green.500" />
                {category.name} - {category.sales} sales
              </ListItem>
            ))}
          </List>
        </Box>
      </Flex>
      <Box p={4} m={2} bg="white" borderRadius="md" boxShadow="md">
        <Text fontSize="lg" fontWeight="bold">
          Sales Data
        </Text>
        <div style={{ height: "400px" }}>
          <SalesChart data={salesData} />
        </div>
      </Box>
    </Box>
  );
};

export default SalesReportPage;
