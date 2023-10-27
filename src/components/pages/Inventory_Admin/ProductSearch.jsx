import React from 'react';
import {
  Box,
  InputGroup,
  Input,
  Button,
  Grid,
  GridItem,
} from '@chakra-ui/react';

export default function ProductSearch() {
  return (
    <Box
    backgroundColor="white"
    padding={{ base: 3, md: 4 }}
    mt={5}
      
    >
      <Grid templateColumns="repeat(12, 1fr)" gap={4}>
        <GridItem colSpan={{ base: 12, md: 2 }}>
          <InputGroup>
            <Input type="text" placeholder="Id" />
          </InputGroup>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 4 }}>
          <InputGroup>
            <Input type="text" placeholder="Name" />
          </InputGroup>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 4 }}>
          <InputGroup>
            <Input type="text" placeholder="Category Name" />
          </InputGroup>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 2 }}>
          <Button width="100%" colorScheme="blue" size="md">
            Search
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
}

