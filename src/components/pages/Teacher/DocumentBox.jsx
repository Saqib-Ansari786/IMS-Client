import { Box, Flex, Text } from "@chakra-ui/react";
import { FaFile } from "react-icons/fa";

const DocumentBox = ({ name, time }) => {
  return (
    <Flex direction="row" alignItems="center" my={5}>
      <Box as={FaFile} fontSize="xl" color="primary.base" mr={3} />
      <Flex direction="column" textAlign={"left"}>
        <Text fontWeight="bold">{name}</Text>
        <Text color="gray.500">{time}</Text>
      </Flex>
    </Flex>
  );
};

export default DocumentBox;
