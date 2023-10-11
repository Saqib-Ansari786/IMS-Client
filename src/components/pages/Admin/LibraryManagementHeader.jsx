import React, { useState } from "react";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import { DownloadIcon, AddIcon } from "@chakra-ui/icons";
import AddBook from "./AddBook";

export default function LibraryManagementHeader({children}) {
  const [showAddBook, setShowAddBook] = useState(false);

  const toggleAddBook = () => {
    setShowAddBook(!showAddBook);
  };

  return (
    <Box py={4} bg="white" rounded="lg" boxShadow="md">
      <Flex justify="space-between" align="center" mx={10}>
        <Heading as="h3" size="lg" color={"#120E87"}>
          Library
        </Heading>
        <Flex align="center">
          <Button
            leftIcon={<DownloadIcon />}
            colorScheme="green"
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
