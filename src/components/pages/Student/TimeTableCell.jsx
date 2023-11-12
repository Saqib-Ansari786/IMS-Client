import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

const TimetableCell = ({ courseId, lecture, location }) => {
  return (
    <Box bg="#2FB5EE" p={4} borderRadius="md">
      <Flex direction="column" align="center">
        <Text fontWeight="bold" fontSize="md" textDecoration="underline">
          {courseId} - {lecture}
        </Text>
        <Text fontWeight="bold" fontSize="md" mt={1}>
          {location}
        </Text>
      </Flex>
    </Box>
  );
};

export default TimetableCell;
