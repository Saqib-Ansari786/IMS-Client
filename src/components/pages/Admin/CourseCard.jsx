import React from "react";
import {
  Box,
  Image,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { FaCalendar, FaUser, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CourseCard({
  imageUrl,
  title,
  description,
  duration,
  author,
  category,
  courseId,
}) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="xl"
      backgroundColor="white"
      key={courseId}
    >
      <Link to={`/teacher/course-details/${courseId}`}>
        <Image
          src={imageUrl}
          alt={`Image for ${title}`}
          objectFit="cover"
          height="200px"
          width="100%"
        />
      </Link>
      <Box p="4">
        <Heading as="h4" size="md">
          <Link to={`/teacher/course-details/${courseId}`}>{title}</Link>
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
                <Stack spacing={1} direction="row" alignItems="center">
                  <FaUser color={"red"} />
                  <Text fontWeight="semibold">Author</Text>
                </Stack>
              </Td>
              <Td textAlign="right">{author}</Td>
            </Tr>
            <Tr>
              <Td>
                <Stack spacing={1} direction="row" alignItems="center">
                  <FaUsers color={"green"} />
                  <Text fontWeight="semibold">Category</Text>
                </Stack>
              </Td>
              <Td textAlign="right">{category}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}
