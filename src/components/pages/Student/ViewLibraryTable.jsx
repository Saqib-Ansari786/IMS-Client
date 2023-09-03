import { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Input, Button, Box } from "@chakra-ui/react";

  
  export default function ViewLibraryTable({ headers, data }) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = data.filter((row) =>
      row.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const handleSearch = () => {
      
    };
  
    return (
      <TableContainer>
        <Box mb={4} bg="white" p={2} display="flex" alignItems="center">
        <Input
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button ml={2} colorScheme="blue" onClick={handleSearch}>
          Search
        </Button>
      </Box>
        <Table variant="simple" backgroundColor={"white"} mt={3} borderRadius={8}>
          <Thead>
            <Tr>
              {headers &&
                headers.map((header, index) => (
                  <Th key={index} textAlign="center">
                    {header}
                  </Th>
                ))}
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.map((row, rowIndex) => (
                <Tr key={rowIndex}>
                  <Td key={rowIndex} textAlign="center">
                    {row.title}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                   {row.autherName}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    {row.publisherName}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    {row.isbn}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                    {row.category}
                  </Td>
                  <Td key={rowIndex} textAlign="center">
                  <span
                      style={{
                        color: row.availability === "Available" ? "green" : "red",
                      }}
                    >
                      {row.availability}
                    </span>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    );
  }
  