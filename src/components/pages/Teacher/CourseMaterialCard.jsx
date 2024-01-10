import { DownloadIcon } from "@chakra-ui/icons";
import { Box, Text, Button, Flex } from "@chakra-ui/react";
import { FaFile } from "react-icons/fa";

const CourseMaterialCard = ({ title, description, fileLink }) => {
  const handleDownload = () => {
    console.log(`Downloading: ${title}`);
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="md"
      backgroundColor="white"
      justifyContent="center"
      alignItems="center"
      p="4"
      textAlign="center"
    >
      <Flex justifyContent="center" alignItems="center" mb="4">
        <FaFile color="#E4203A" size="15%" />
      </Flex>
      <Text fontWeight="semibold" color="black" fontSize="xl" mb="2">
        {title}
      </Text>
      <Text color="gray.600" mb="4">
        {description}
      </Text>
      <Button
        colorScheme="blue"
        onClick={handleDownload}
        leftIcon={<DownloadIcon />}
        _hover={{ backgroundColor: "blue.300", color: "white" }}
      >
        Download
      </Button>
    </Box>
  );
};

export default CourseMaterialCard;
