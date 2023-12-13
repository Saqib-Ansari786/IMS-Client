import { Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LibraryCard = ({ icon, name, link }) => {
  const cardContent = (
    <Box
      w="250px"
      h="150px"
      mr={4}
      bg="gray.200"
      borderRadius="md"
      p="4"
      textAlign="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      transition="all 0.3s"
      bgColor={"white"}
      _hover={{
        bg: 'blue.300',
        transform: 'scale(1.05)',
        boxShadow: 'lg',
        color: "white"
      }}
    >
      <Box fontSize="5xl" mb="4">
        {icon}
      </Box>
      <Text fontSize="2xl" fontWeight="bold">
        {name}
      </Text>
    </Box>
  );

  
  return link ? (
    <Link to={link}>
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
};

export default LibraryCard;
