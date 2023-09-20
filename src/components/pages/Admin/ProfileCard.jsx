import React from 'react';
import { Box, Text, Button, Avatar } from '@chakra-ui/react';

export default function ProfileCard({ imgUrl, name, designation, phoneNumber, address }) {
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
        <Text fontSize="xl" fontWeight="semibold" mt="2" mb="0">
          {name}
        </Text>
        <Text fontSize="md" color="gray.500">
          {designation}
        </Text>
        <Text fontSize="sm" color="gray.500" mt="1">
          {phoneNumber}
        </Text>
        <Text fontSize="md" mt="3" mb="4">
          {address}
        </Text>
        <Button
          colorScheme="blue"
          size="sm"
          borderRadius="sm"
        >
          Read More
        </Button>
      </Box>
    </Box>
  );
}
