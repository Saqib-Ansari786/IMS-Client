import React from 'react';
import {
  Box,
  InputGroup,
  Input,
  Button,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export default function SearchBook() {
  return (
    <Box
      backgroundColor="white"
      padding={{ base: 3, md: 4 }}
      mt={5}
    >
      <Grid templateColumns="repeat(12, 1fr)" gap={{ base: 2, md: 4 }}>
        <GridItem colSpan={{ base: 12, md: 3 }}>
          <InputGroup>
            <Input type="text" placeholder="Search by ISBN" />
          </InputGroup>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 4 }}>
          <InputGroup>
            <Input type="text" placeholder="Search by Title" />
          </InputGroup>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 4 }}>
          <InputGroup>
            <Input type="text" placeholder="Search by Author Name" />
          </InputGroup>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 1 }}>
          <Button
            leftIcon={<SearchIcon />}
            colorScheme="blue"
            _hover={{ bg: "blue.300", color: "white" }}
            width={{ base: '100%', md: 'auto' }}
          >
            SEARCH
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
}
