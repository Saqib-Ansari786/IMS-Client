import React from "react";
import { Box, Flex, Select } from "@chakra-ui/react";

const ShowEntriesDropdown = ({ entries, setEntries }) => {
  const options = [5, 10, 25, 50, 100];

  return (
    <Flex ml={5} mt={5} alignItems="center">
      <Box mr={2}>Show</Box>
      <Select
        w={85}
        value={entries}
        onChange={(e) => setEntries(parseInt(e.target.value))}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
      <Box ml={2}>entries</Box>
    </Flex>
  );
};

export default ShowEntriesDropdown;
