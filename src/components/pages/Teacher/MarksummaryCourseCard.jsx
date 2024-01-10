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
} from "@chakra-ui/react";
import { FaCalendar, FaList, FaUser, FaUsers } from "react-icons/fa";

export default function MarksummaryCourseCard({
  courseCode,
  name,
  description,
  strength,
  duration,
  author,
  category
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
          {courseCode}
        </Heading>
        <Heading as="h4" size="md">
          {name}
        </Heading>
        <Text color="gray.600" mt="2">
          {description}
        </Text>
        <Table size="sm" mt="3">
          <Tbody>
            <Tr>
              <Td>
                <Stack spacing={1} direction="row" alignItems="center">
                  <FaCalendar color={"blue"} />
                  <Text fontWeight="semibold">Duration</Text>
                </Stack>
              </Td>
              <Td textAlign="right">{duration}</Td>
            </Tr>
            <Tr>
              <Td>
                <Stack pt={2} spacing={1} direction="row" alignItems="center">
                  <FaUser color={"red"} />
                  <Text fontWeight="semibold">Author</Text>
                </Stack>
              </Td>
              <Td textAlign="right">{author}</Td>
            </Tr>
            <Tr>
              <Td>
                <Stack spacing={1} direction="row" alignItems="center">
                  <FaList color={"green"} />
                  <Text fontWeight="semibold">Category</Text>
                </Stack>
              </Td>
              <Td textAlign="right">{category}</Td>
            </Tr>
            <Tr>
              <Td>
                <Stack spacing={1} direction="row" alignItems="center">
                  <FaUsers color={"blue"} />
                  <Text fontWeight="semibold">Strength</Text>
                </Stack>
              </Td>
              <Td textAlign="right">{strength}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
      
    </Box>
  );
}
