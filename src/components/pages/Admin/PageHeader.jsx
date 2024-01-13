import React from "react";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import { DownloadIcon, AddIcon, RepeatIcon } from "@chakra-ui/icons";
import * as XLSX from "xlsx";

export default function PageHeader({
  children,
  entityName,
  data,
  headers,
  handleListViewClick,
  handleAddClick,
  handleGridClick,
}) {
  const [selectedView, setSelectedView] = React.useState("ListView");

  const handleViewChange = (view) => {
    setSelectedView(view);
  };

  const downloadExcel = () => {
    const exportData = data.map((row) => [
      row.beltNo,
      row.firstname + row.lastname,
      row.courseCode,
      row.email,
      row.contactNo,
      row.registrationDate,
    ]);

    const ws = XLSX.utils.aoa_to_sheet([headers, ...exportData]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws);

    XLSX.writeFile(wb, `${entityName}_data.xlsx`);
  };

  return (
    <Box py={4} bg="white" rounded="lg" boxShadow="md">
      <Flex justify="space-between" align="center" mx={4}>
        <Heading as="h3" size="lg" color={"#120E87"}>
          {entityName}
        </Heading>
        <Flex align="center">
          <Button
            leftIcon={<DownloadIcon />}
            colorScheme="green"
            onClick={downloadExcel}
            variant="outline"
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
            backgroundColor={
              selectedView === "ListView" ? "primary.base" : "white"
            }
            color={selectedView !== "ListView" ? "primary.base" : "white"}
            variant={selectedView === "ListView" ? "solid" : "outline"}
            _hover={{
              bg:
                selectedView === "ListView" ? "primary.base" : "primary.hover",
              color: "white",
            }}
            onClick={() => {
              handleListViewClick();
              handleViewChange("ListView");
            }}
            mr={2}
          >
            List View
          </Button>
          <Button
            leftIcon={<RepeatIcon />}
            backgroundColor={
              selectedView === "Grid View" ? "primary.base" : "white"
            }
            color={selectedView !== "Grid View" ? "primary.base" : "white"}
            variant={selectedView === "Grid View" ? "solid" : "outline"}
            _hover={{
              bg:
                selectedView === "Grid View" ? "primary.base" : "primary.hover",
              color: "white",
            }}
            onClick={() => {
              handleGridClick();
              handleViewChange("Grid View");
            }}
            mr={2}
          >
            Grid View
          </Button>
          <Button
            leftIcon={<AddIcon />}
            backgroundColor={selectedView === "Add" ? "primary.base" : "white"}
            color={selectedView !== "Add" ? "primary.base" : "white"}
            variant={selectedView === "Add" ? "solid" : "outline"}
            _hover={{
              bg: selectedView === "Add" ? "primary.base" : "primary.hover",
              color: "white",
            }}
            onClick={() => {
              handleAddClick();
              handleViewChange("Add");
            }}
          >
            Add {entityName}
          </Button>
        </Flex>
      </Flex>
      {children}
    </Box>
  );
}
