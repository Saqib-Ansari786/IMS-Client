import React, { useState } from "react";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import { DownloadIcon, AddIcon, RepeatIcon } from "@chakra-ui/icons";
import * as XLSX from "xlsx";

export default function SalesPageHeader({ children, handleListViewClick, handleAddClick, sales}) {

  const [selectedView, setSelectedView] = useState("ListView");

  const handleViewChange = (view) => {
    setSelectedView(view);
  };

  const downloadExcel = () => {
    const exportData = sales.map((sale, index) => [
      index + 1,
      sale.date,
      sale.quantity,
      sale.productName,
      sale.customerName,
      sale.customerType,
    ]);

    const ws = XLSX.utils.aoa_to_sheet([sales, ...exportData]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sales Data");

    XLSX.writeFile(wb, "Sales_data.xlsx");
  };

  return (
    <Box py={4} bg="white" rounded="lg" boxShadow="md">
      <Flex justify="space-between" align="center" mx={4}>
        <Heading as="h3" size="lg" color={"#120E87"}>
          Sales
        </Heading>
        <Flex align="center">
          <Button
            leftIcon={<DownloadIcon />}
            colorScheme="green"
            variant="outline"
            onClick={downloadExcel}
            _hover={{
              bg: "green.500",
              color: "white",
              borderColor: "green.500",
            }}
            mr={2}
          >
            Download
          </Button>
          <Button
            leftIcon={<RepeatIcon />}
            colorScheme="blue"
            variant={selectedView === "ListView" ? "solid" : "outline"}
            _hover={{ bg: selectedView === "ListView" ? "blue.300" : "blue.200", color: "white" }}
            onClick={() => {
              handleListViewClick();
              handleViewChange("ListView");
            }}
            mr={2}
          >
            List View
          </Button>
          <Button
            leftIcon={<AddIcon />}
            colorScheme="blue"
            _hover={{ bg: "blue.300", color: "white" }}
           onClick={() => {
              handleAddClick();
              handleViewChange("Add");
            }}
          >
            Add Sales
          </Button>
        </Flex>
      </Flex>
      {children}
    </Box>
  );
}
