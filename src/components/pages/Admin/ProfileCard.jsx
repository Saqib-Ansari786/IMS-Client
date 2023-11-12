import React from 'react';
import { Box, Text, Button, Avatar } from '@chakra-ui/react';
import { Link } from "react-router-dom";

export default function ProfileCard({ imgUrl, name, designation, phoneNumber, address, beltNo, onReadMoreClick }) {
  return (
    <Link to={`${beltNo}`}>
    <Box
      maxW="2xs"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"   
      backgroundColor={"white"}
      transition="box-shadow 0.3s"
      _hover={{ 
        boxShadow: 'lg', 
        transform: 'scale(1.02)',       }}
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
          Belt No:  {beltNo}
        </Text>
        <Text fontSize="sm" color="gray.500" mt="1">
          Phone No:  {phoneNumber}
        </Text>
      </Box>
    </Box>
    </Link>
  );
}
