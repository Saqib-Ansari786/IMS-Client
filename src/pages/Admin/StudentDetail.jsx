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
import { EditIcon, DownloadIcon } from "@chakra-ui/icons";
import { useParams } from "react-router";
import { useQueryClient } from "react-query";

const StudentDetail = () => {
  const { st_ID } = useParams(); // Get the course ID from the URL
  const queryClient = useQueryClient();
  const students = queryClient.getQueryData("students");

  const {
    beltNo,
    firstname,
    lastname,
    dob,
    email,
    gender,
    contactNo,
    homeNo,
    address,
    courseCode,
    picture,
    registrationDate,
    type
  } = students.find((student) => student.beltNo === st_ID);

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
            About Student
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
                src={
                  picture
                    ? picture
                    : "https://www.w3schools.com/howto/img_avatar.png"
                }
                alt="student"
              />
            </GridItem>

            <GridItem paddingTop={"3em"} textAlign={"left"}>
              <Text fontSize="4xl" fontWeight="medium">
              {`${firstname.charAt(0).toUpperCase() + firstname.slice(1)} ${lastname.charAt(0).toUpperCase() + lastname.slice(1)}`}
              </Text>
              <Text mt={4}>
                Aliquam erat volutpat. Curabiene natis massa sedde lacu stiquen
                sodale word moun taiery.Aliquam erat volutpat urabiene natis
                massa sedde sodale word moun taiery.
              </Text>
              <Table>
                <Tbody>
                  <Tr>
                    <Td fontWeight="bold">Belt No:</Td>
                    <Td>{beltNo}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">Name:</Td>
                    <Td>{firstname + " " + lastname}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">Type:</Td>
                    <Td>{type}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">Registration Date:</Td>
                    <Td>{registrationDate}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">Date Of Birth:</Td>
                    <Td>{new Date(dob).toLocaleDateString()}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">Email:</Td>
                    <Td>{email}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">Gender:</Td>
                    <Td>{gender}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">Contact No:</Td>
                    <Td>{contactNo}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">Home No:</Td>
                    <Td>{homeNo}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">Address:</Td>
                    <Td>{address}</Td>
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

export default StudentDetail;
