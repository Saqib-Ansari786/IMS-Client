import { useEffect, useState } from "react";
import { Box, Flex, Text, Center, Heading } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import ProductTable from "../../components/pages/Inventory_Admin/ProductTable";
import CountingAnimation from "../../components/pages/Inventory_Admin/CountingAnimation";

const InventoryDashboard = () => {
  // Sample data for the chart
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales in a Month",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box p={4}>
      <Heading mb={"5"} as="h3" size="md" color="#120E87">
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
        <CountingAnimation label="Total Products" total={100} />
       </Box>
        <Box flex="1" p={4} m={2} bg="white" borderRadius="md" boxShadow="md">
        <CountingAnimation label="Total Categories" total={150} />
        </Box>
      </Flex>
      <Box p={4} m={2} bg="white" borderRadius="md" boxShadow="md">
        <ProductTable />
      </Box>
    </Box>
  );
};

export default InventoryDashboard;
