import React, { useState } from "react";
import {
  Box,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  Stack,
  Heading,
  Button,
} from "@chakra-ui/react";
import { FaClock, FaUsers } from "react-icons/fa";
import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function UploadedAssignmentCard({
  id,
  courseCode,
  title,
  description,
  noofSubmittedStudents,
  notSubmittedStudents,
  strength,
  startDate,
  endDate,
}) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="xl"
      transition="all 0.3s ease"
      backgroundColor="white"
      _hover={{ 
        transform: 'scale(1.05)',
        boxShadow: 'lg',
        color: "black"
      }}
      key={courseCode}
    >
      <Box p="4">
        <Heading color={"#1D238F"} as="h1" size="xl">
          {title}
        </Heading>
        <Text color="gray.600" mt="2">
          {description}
        </Text>
        <Table size="sm" mt="3">
          <Tbody>
          <Tr>
              <Td>
                <Stack spacing={1} direction="row" alignItems="center">
                  <FaUsers color={"blue"} />
                  <Text fontWeight="semibold">Total Strength</Text>
                </Stack>
              </Td>
              <Td textAlign="right">{strength}</Td>
            </Tr>
            <Tr>
              <Td>
                <Stack pt={2} spacing={1} direction="row" alignItems="center">
                  <FaUsers color={"green"} />
                  <Text fontWeight="semibold">Submitted Students</Text>
                </Stack>
              </Td>
              <Td textAlign="right">{noofSubmittedStudents}</Td>
            </Tr>
            <Tr>
              <Td>
                <Stack pt={2} spacing={1} direction="row" alignItems="center">
                  <FaUsers color={"red"} />
                  <Text fontWeight="semibold">Not Submitted Students</Text>
                </Stack>
              </Td>
              <Td textAlign="right">{notSubmittedStudents}</Td>
            </Tr>
            <Tr>
              <Td>
                <Stack spacing={1} direction="row" alignItems="center">
                  <FaClock color={"green"} />
                  <Text fontWeight="semibold">StartDate</Text>
                </Stack>
              </Td>
              <Td textAlign="right">{startDate}</Td>
            </Tr>
            <Tr>
              <Td>
                <Stack spacing={1} direction="row" alignItems="center">
                  <FaClock color={"red"} />
                  <Text fontWeight="semibold">EndDate</Text>
                </Stack>
              </Td>
              <Td textAlign="right">{endDate}</Td>
            </Tr>
           
          </Tbody>
        </Table>
        <Stack>
        <Button
          as={Link}
            to={`detail/${id}`}
            colorScheme="teal"
            _hover={{ backgroundColor: "teal.300", color: "white" }}
            color={"white"}
            leftIcon={<ViewIcon />}
            
          >
            View Detail
          </Button>
          <Button
            to={""}
            colorScheme="blue"
            _hover={{ backgroundColor: "blue.300", color: "white" }}
            color={"white"}
            leftIcon={<EditIcon />}
            onClick={() => alert("HEllo")}
          >
            Edit Assignment
          </Button>
        </Stack>
      </Box>
      
    </Box>
  );
}
