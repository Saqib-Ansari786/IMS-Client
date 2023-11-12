import React from "react";
import { Box, Text, Badge } from "@chakra-ui/react";

const AssignmentCard = ({
  title,
  totalMarks,
  obtainedMarks,
  dateTime,
  teacherComment,
}) => {
  return (
    <Box
    bg={"white"}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
    >
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            Assignment
          </Badge>
          <Text
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            ml="2"
          >
            {dateTime}
          </Text>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {title}
        </Box>

        <Box>
          <Text color="gray.500">
            Total Marks: {totalMarks} | Obtained Marks: {obtainedMarks}
          </Text>
        </Box>

        <Box>
          <Text color="gray.500">Teacher Comment: {teacherComment}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default AssignmentCard;
