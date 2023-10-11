import React, { useState } from "react";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import { DownloadIcon, AddIcon } from "@chakra-ui/icons";
import AddBook from "./AddBook";
import * as XLSX from "xlsx";

export default function LibraryManagementHeader({ children, data, headers }) {
  const [showAddBook, setShowAddBook] = useState(false);

  const toggleAddBook = () => {
    setShowAddBook(!showAddBook);
  };

  const downloadExcel = () => {
    const exportData = data.map((row) => [
      row.title,
      row.author,
      row.isbn,
      row.category,
      row.available ? "In Stock" : "Out of Stock",
    ]);

    const ws = XLSX.utils.aoa_to_sheet([headers, ...exportData]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Book Data");

    XLSX.writeFile(wb, "book_data.xlsx");
  };

  return (
    <Box py={4} bg="white" rounded="lg" boxShadow="md">
      <Flex justify="space-between" align="center" mx={4}>
        <Heading as="h3" size="lg" color={"#120E87"}>
          Library
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
            leftIcon={<AddIcon />}
            colorScheme="blue"
            _hover={{ bg: "blue.300", color: "white" }}
            onClick={toggleAddBook}
          >
            Add Book
          </Button>
        </Flex>
      </Flex>
      {showAddBook ? <AddBook /> : children}
    </Box>
  );
}
