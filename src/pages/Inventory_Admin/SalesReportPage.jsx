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
import {
  selectIssuedProducts,
  selectProducts,
} from "../../store/redux-slices/products_slice";
import { useSelector } from "react-redux";

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
  const issuedProducts = useSelector(selectIssuedProducts);
  const products = useSelector(selectProducts);

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
          data: [...(issuedProducts?.map((product) => product.quantity) || [])],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    });
  }, []);

  return (
    <Box backgroundColor={"white"} borderRadius={10} p={4}>
      <Heading as="h1" mb={4} color={"#120E87"}>
        Sales Report
      </Heading>
      <Text fontSize="lg" fontWeight="bold">
        Total Sales: {issuedProducts?.length || 0}
      </Text>
      <Flex mt={4}>
        <Box flex="1" p={4} m={2} bg="white" borderRadius="md" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold">
            Top 5 Sales Products
          </Text>
          <List>
            {issuedProducts?.slice(0, 5).map((product, index) => (
              <ListItem key={index}>
                <ListIcon as="span" color="green.500" />
                {products?.find((p) => p._id === product.productId)?.name}-{" "}
                {product.quantity} sales
              </ListItem>
            ))}
          </List>
        </Box>
        <Box flex="1" p={4} m={2} bg="white" borderRadius="md" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold">
            Top 5 Categories
          </Text>
          <List>
            {issuedProducts?.slice(0, 5).map((product, index) => (
              <ListItem key={index}>
                <ListIcon as="span" color="green.500" />
                {products?.find((p) => p._id === product.productId)?.category}-
                {product.quantity} sales
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
