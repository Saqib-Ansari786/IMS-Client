import React, { useState } from "react";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import { DownloadIcon, AddIcon, RepeatIcon } from "@chakra-ui/icons";
import * as XLSX from "xlsx";

export default function PageHeader({
  children,
  name,
  data,
  headers,
  handleListViewClick,
  handleAddClick,
  handleGridClick,
  role
}) {
  const [selectedView, setSelectedView] = useState("ListView");

  const handleViewChange = (view) => {
    setSelectedView(view);
  };

  const downloadExcel = () => {
    const exportData = data.map((row) => [
      row.beltNo,
      row.name,
      row.courseName,
      row.email,
      row.phoneNo,
      row.admissionDate,
    ]);

    const ws = XLSX.utils.aoa_to_sheet([headers, ...exportData]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Student Data");

    XLSX.writeFile(wb, "student_data.xlsx");
  };

  return (
    <Box py={4} bg="white" rounded="lg" boxShadow="md">
      <Flex justify="space-between" align="center" mx={4}>
        <Heading as="h3" size="lg" color={"#120E87"}>
          {name}
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
            leftIcon={<RepeatIcon />}
            colorScheme="blue"
            variant={selectedView === "TeacherProfileView" ? "solid" : "outline"}
            _hover={{ bg: selectedView === "TeacherProfileView" ? "blue.300" : "blue.200", color: "white" }}
            onClick={() => {
              handleGridClick();
              handleViewChange("TeacherProfileView");
            }}
            mr={2}
          >
            Grid View
          </Button>
          <Button
            leftIcon={<AddIcon />}
            colorScheme="blue"
            variant={selectedView === "Add" ? "solid" : "outline"}
            _hover={{ bg: selectedView === "Add" ? "blue.300" : "blue.200", color: "white" }}
            onClick={() => {
              handleAddClick();
              handleViewChange("Add");
            }}
          >
           {role}
          </Button>
        </Flex>
      </Flex>
      {children}
    </Box>
  );
}
