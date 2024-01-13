import React, { useState } from "react";
import {
  Box,
  InputGroup,
  Input,
  Button,
  Grid,
  GridItem,
  FormControl,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function Search({ handleSearch, input1, input2, input3 }) {
  return (
    <Box backgroundColor="white" padding={{ base: 3, md: 4 }} mt={5}>
      <FormControl>
        <Grid templateColumns="repeat(12, 1fr)" gap={4}>
          <GridItem colSpan={{ base: 12, md: 2 }}>
            <InputGroup>
              <Input type="text" placeholder={input1} onChange={handleSearch} />
            </InputGroup>
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 4 }}>
            <InputGroup>
              <Input type="text" placeholder={input2} onChange={handleSearch} />
            </InputGroup>
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 4 }}>
            <InputGroup>
              <Input type="text" placeholder={input3} onChange={handleSearch} />
            </InputGroup>
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 2 }}>
            <Button
              width="100%"
              size="md"
              leftIcon={<SearchIcon />}
              backgroundColor={"primary.base"}
              color={"white"}
              _hover={{ bg: "primary.hover", color: "white" }}
            >
              Search
            </Button>
          </GridItem>
        </Grid>
      </FormControl>
    </Box>
  );
}
