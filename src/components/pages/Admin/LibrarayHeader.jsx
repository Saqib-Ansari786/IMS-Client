import React, { useState } from "react";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";

export default function LibraryHeader({heading, children}) {

  return (
    <Box py={4} bg="white" rounded="lg" boxShadow="md">
      <Flex justify="space-between" align="center" mx={4}>
        <Heading as="h3" size="lg" color={"#120E87"}>
          {heading}
        </Heading>
      </Flex>
      {children}
    </Box>
  );
}
