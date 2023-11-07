import React from "react";
import {
  Box,
  Container,
  Text,
  Grid,
  GridItem,
  Image,
  List,
  Button,
  Flex,
  Table,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import { useParams } from "react-router";
import { useQueryClient } from "react-query";
import bookImage from "../../assets/bookimage.jpg"

const BookDetail = () => {
  const { book_isbn } = useParams();
  const queryClient = useQueryClient();
  const books = queryClient.getQueryData("books");

  const {
    title,
    authorName,
    publisherName,
    isbn,
    category,
    availability,
    language,
    quantity,
    department,
    courseCode,
  } = books.find((book) => book.isbn === book_isbn);

  return (
    <Container maxW="container.xl" mt="4">
      <Box p={4} bg="white" borderRadius="md" boxShadow="md">
        <List
          display="flex"
          listStyleType="none"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text
            color={"#1D238F"}
            fontSize="2xl"
            fontWeight={"bold"}
            textAlign={"left"}
          >
            Book Information
          </Text>
          <Box>
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
              onClick={() => window.print()}
            >
              Get Print
            </Button>
          </Box>
        </List>
        <Flex justifyContent="space-between">
          <Grid templateColumns="1fr 3fr" gap={4}>
            <GridItem>
              <Image
                borderRadius={5}
                height={"20em"}
                src={bookImage}
                alt="student"
              />
            </GridItem>

            <GridItem paddingTop={"3em"} textAlign={"left"}>
              <Text fontSize="4xl" fontWeight="medium">
              {title.charAt(0).toUpperCase() + title.slice(1)}
              </Text>
              <Text mt={4}>
                Aliquam erat volutpat. Curabiene natis massa sedde lacu stiquen
                sodale word moun taiery.Aliquam erat volutpat urabiene natis
                massa sedde sodale word moun taiery.
              </Text>
              <Table>
                <Tbody>
                  <Tr>
                    <Td fontWeight="bold">Isbn:</Td>
                    <Td>{isbn}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">Author Name:</Td>
                    <Td>{authorName}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">Publisher Name:</Td>
                    <Td>{publisherName}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">Category:</Td>
                    <Td>{category}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">Availability:</Td>
                    <Td>{availability? "available": "Not Available"}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">Language:</Td>
                    <Td>{language}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">Quantity:</Td>
                    <Td>{quantity}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">Department:</Td>
                    <Td>{department}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">Course Code:</Td>
                    <Td>{courseCode}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </GridItem>
          </Grid>
        </Flex>
      </Box>
    </Container>
  );
};

export default BookDetail;
