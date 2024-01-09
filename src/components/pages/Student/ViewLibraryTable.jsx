import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Input,
  Button,
  Box,
  Badge,
} from "@chakra-ui/react";
import { selectUser } from "../../../store/redux-slices/user_slice";
import { useSelector } from "react-redux";
import apiMiddleware from "../../common/Server/apiMiddleware";

export default function ViewLibraryTable({ headers, data }) {
  const [search, setSearch] = useState("");
  const user = useSelector(selectUser);

  console.log(user);

  const handleIssueRequest = async (book) => {
    // Add logic here to handle issuing the book
    console.log(`Issuing request for ${book._id}`);

    const issueRequest = {
      libraryItemId: book._id,
      studentId: user.id,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(issueRequest),
    };

    const response = await apiMiddleware(
      "library/library-items/issue-request",
      requestOptions
    );

    console.log(response);

    if (response.success) {
      alert("Issue request sent successfully!");
    } else {
      alert("Error sending issue request!");
    }
  };

  return (
    <TableContainer bgColor={"white"}>
      <Box mb={4} bg="white" p={2} display="flex" alignItems="center">
        <Input
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button ml={2} colorScheme="blue">
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
            data?.map((row, rowIndex) => (
              <Tr key={row._id}>
                <Td key={rowIndex} textAlign="center">
                  {row.title}
                </Td>
                <Td key={rowIndex} textAlign="center">
                  {row.authorName}
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
                      color: row.availability === true ? "green" : "red",
                    }}
                  >
                    {row.availability === true ? "Available" : "Not Available"}
                  </span>
                </Td>
                <Td key={rowIndex} textAlign="center">
                  {row.availability === true ? (
                    <Button
                      size="sm"
                      colorScheme="blue"
                      onClick={() => handleIssueRequest(row)}
                    >
                      Issue Request
                    </Button>
                  ) : (
                    <Badge colorScheme="red">Not Available</Badge>
                  )}
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
