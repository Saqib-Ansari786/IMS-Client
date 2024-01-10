import { DownloadIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, Text, Button, Flex, IconButton } from "@chakra-ui/react";
import { FaFile } from "react-icons/fa";

const CourseMaterialCard = ({ title, description, fileLink }) => {
  const handleDownload = () => {
    console.log(`Downloading: ${title}`);
  };

  const handleEdit = () => {
    console.log(`Editing: ${title}`);
    // Add logic to handle editing
  };

  const handleDelete = () => {
    console.log(`Deleting: ${title}`);
    // Add logic to handle deletion
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
      <IconButton
        colorScheme="teal"
        aria-label="Edit"
        icon={<EditIcon />}
        onClick={handleEdit}
        mr={2}
      />
      <IconButton
        colorScheme="red"
        aria-label="Delete"
        icon={<DeleteIcon />}
        onClick={handleDelete}
        mr={2}
      />
      <IconButton
        colorScheme="blue"
        onClick={handleDownload}
        icon={<DownloadIcon />}
        _hover={{ backgroundColor: "blue.300", color: "white" }}
        mr={2}
      />
    </Box>
  );
};

export default CourseMaterialCard;
