import React from 'react';
import { Box, Text, Button, Avatar } from '@chakra-ui/react';

export default function ProfileCard({ imgUrl, name, designation, phoneNumber, address, beltNo, onReadMoreClick }) {
  return (
    <Box
      maxW="2xs"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"   
      backgroundColor={"white"}
      _hover={{ boxShadow: 'md' }}
    >
      <Box className="card-body text-center" p="4">
        <Avatar
          name={name}
          src={imgUrl}
          size="xl"
          mb="2"
        />
        <Text color={"#1D238F"} fontSize="xl" fontWeight="semibold" mt="2" mb="0">
          {name}
        </Text>
        <Text fontSize="md">
          {designation}
        </Text>
        <Text fontSize="sm" color="gray.500" mt="1">
          Phone No:  {phoneNumber}
        </Text>
        <Text fontSize="sm" color="gray.500" mt="1">
          Belt No:  {beltNo}
        </Text>
        <Text fontSize="md" mt="3" mb="4">
        <b>Address:</b>  {address}
        </Text>
        <Button
          colorScheme="blue"
          size="sm"
          borderRadius="sm"
          onClick={onReadMoreClick}
        >
          Read More
        </Button>
      </Box>
    </Box>
  );
}
