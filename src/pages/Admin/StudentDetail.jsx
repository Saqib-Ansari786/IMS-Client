import React from 'react';
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
} from '@chakra-ui/react';
import { EditIcon, DownloadIcon } from '@chakra-ui/icons';

const studentData = {
  _id: "653946a07941151a0129f1ed",
  firstname: "umair",
  lastname: "farooqui",
  beltNo: "123ABC",
  registrationDate: "2023-01-03T19:00:00.000Z",
  dob: "1998-12-31T19:00:00.000Z",
  email: "omairfic922@gmail.com",
  type: "student",
  gender: "Male",
  contactNo: "0123455",
  homeNo: "1934343",
  address: "ST 02 Lahore",
  courseCode: "CSE111",
  CourseId: [],
  createdAt: "2023-10-25T16:47:28.606Z",
  updatedAt: "2023-10-25T16:47:28.606Z",
};

const StudentDetail = () => {
  const {
    firstname,
    lastname,
    dob,
    email,
    gender,
    contactNo,
    homeNo,
    address,
    courseCode,
  } = studentData;

  return (
    <Container maxW="container.xl" mt="4">
      <Box p={4} bg="white" borderRadius="md" boxShadow="md">
        <List display="flex" listStyleType="none" justifyContent="space-between" alignItems="center">
          <Text color={"#1D238F"} fontSize="2xl" fontWeight={"bold"} textAlign={'left'}>About Student</Text>
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
              Download
            </Button>
            <Button
              leftIcon={<EditIcon />}
              colorScheme="blue"
              variant="solid"
              _hover={{ bg: "blue.300", color: "white" }}
              mr={2}
            >
              Edit Student
            </Button>
          </Box>
        </List>
        <Flex justifyContent="space-between">
          <Grid templateColumns="1fr 3fr" gap={4}>
            <GridItem>
              <Image
                borderRadius={5}
                height={"20em"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&sg"
                alt="student"
              />
            </GridItem>
            
            <GridItem paddingTop={"3em"} textAlign={'left'}>
              <Text fontSize="4xl" fontWeight="medium">
                {firstname + " " + lastname}
              </Text>
              <Text mt={4}>
                Aliquam erat volutpat. Curabiene natis massa sedde lacu stiquen
                sodale word moun taiery.Aliquam erat volutpat urabiene natis massa
                sedde sodale word moun taiery.
              </Text>
              <Table>
                <Tbody>
                  <Tr>
                    <Td fontWeight="bold">Name:</Td>
                    <Td>{firstname + " " + lastname}</Td>
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
