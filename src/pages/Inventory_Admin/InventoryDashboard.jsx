import { Box, Flex, Text, Center, Heading } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import ProductTable from "../../components/pages/Inventory_Admin/ProductTable";
import CountingAnimation from "../../components/pages/Inventory_Admin/CountingAnimation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchIssuedProducts,
  fetchProducts,
  selectIssuedProducts,
  selectProducts,
} from "../../store/redux-slices/products_slice";

const InventoryDashboard = () => {
  // Sample data for the chart
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchIssuedProducts());
  }, [dispatch]);
  const products = useSelector(selectProducts);
  const issuedProducts = useSelector(selectIssuedProducts);
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales in a Month",
        data: [...(issuedProducts?.map((product) => product.quantity) || [])],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box bgColor={"white"} p={4}>
      <Heading mb={"5"} as="h1" size="xl" color="#120E87">
        Welcome Inventory Admin!
      </Heading>
      <Flex justify="space-between" flexWrap="wrap">
        <Box flex="1" p={4} m={2} bg="white" borderRadius="md" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold">
            Sales in a Month
          </Text>
          <Center>
            <Bar data={chartData} options={{ maintainAspectRatio: false }} />
          </Center>
        </Box>
        <Box flex="1" p={4} m={2} bg="white" borderRadius="md" boxShadow="md">
          <CountingAnimation label="Total Products" total={products?.length} />
        </Box>
        <Box flex="1" p={4} m={2} bg="white" borderRadius="md" boxShadow="md">
          <CountingAnimation
            label="Total Sales"
            total={issuedProducts?.length}
          />
        </Box>
      </Flex>
      <Box p={4} m={2} bg="white" borderRadius="md" boxShadow="lg">
        <ProductTable products={products} />
      </Box>
    </Box>
  );
};

export default InventoryDashboard;
