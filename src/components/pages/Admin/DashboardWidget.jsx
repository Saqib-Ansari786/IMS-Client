import React from 'react';
import { Box, Flex, Text, Image, Avatar } from '@chakra-ui/react';

export default function DashboardWidget({ title, value, iconSrc, altText }) {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} boxShadow="md" backgroundColor={"white"}>
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Text fontSize="medium" color="#1D238F" >
            {title}
          </Text>
          <Text fontSize="xl">{value}</Text>
        </Box>
        <Box className="db-icon">
        <Avatar
          name={altText}
          src={iconSrc}
          size="md"
          mb="2"
        />
        </Box>
      </Flex>
    </Box>
  );
}
