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
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { selectUser } from "../../../store/redux-slices/user_slice";
import { useSelector } from "react-redux";
import { useQueryClient } from "react-query";

export default function ViewLibraryTable({ headers, data }) {
  const [search, setSearch] = useState("");
  const user = useSelector(selectUser);
  const queryClient = useQueryClient();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [issueRequestId, setIssueRequestId] = useState(null);

  console.log(user);

  const handleIssueRequest = async (book) => {
    // Add logic here to handle issuing the book
    console.log(`Issuing request for ${book._id}`);
    setIssueRequestId(book._id);

    const issueRequest = {
      libraryItemId: book._id,
      studentId: user.id,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(issueRequest),
    };

    try {
      setLoading(true);
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}library/library-items/issue-request`,
        requestOptions
      );

      const data = await res.json();

      if (data?.success) {
        toast({
          title: "Issue request sent successfully!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        queryClient.invalidateQueries("books");
      } else if (data?.error === "Library item already requested") {
        toast({
          title: "Book already issued",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <Box p={3} borderRadius="lg" bgColor={"white"}>
      <Box mt={2} bg="white" mb={4} display="flex" alignItems="center">
        <Input
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          ml={2}
          backgroundColor={"primary.base"}
          color={"white"}
          _hover={{ bg: "primary.hover", color: "white" }}
        >
          Search
        </Button>
      </Box>
      <TableContainer borderWidth="1px" borderRadius="lg" bgColor={"white"}>
        <Table
          variant="striped"
          colorScheme="blackAlpha"
          backgroundColor={"white"}
          mt={3}
          borderRadius={8}
        >
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
              data
                .filter((row) => {
                  return search.toLowerCase() === ""
                    ? row
                    : row.title?.toLowerCase().includes(search) ||
                        row.authorName?.includes(search);
                })
                .map((row, rowIndex) => (
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
                        {row.availability === true
                          ? "Available"
                          : "Not Available"}
                      </span>
                    </Td>
                    <Td key={rowIndex} textAlign="center">
                      {row.availability === true ? (
                        <Button
                          size="sm"
                          backgroundColor={"primary.base"}
                          color={"white"}
                          _hover={{ bg: "primary.hover", color: "white" }}
                          onClick={() => handleIssueRequest(row)}
                        >
                          {loading && issueRequestId === row._id ? (
                            <Spinner size={"sm"} />
                          ) : (
                            "Issue Request"
                          )}
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
    </Box>
  );
}
