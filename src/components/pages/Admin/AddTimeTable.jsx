import { Box, Flex, FormControl, FormLabel, Input, Button, Heading, Select } from '@chakra-ui/react';

export default function AddTimeTable() {
  return (
    <Box bg="white" p={4} rounded="md">
      <Heading as="h5" size="md" mb={4} color={"#1D238F"}>
        Time Table
      </Heading>
      <form>
        <Flex direction="column" gridGap={4}>
          <FormControl isRequired>
            <FormLabel>Teacher Id</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Course</FormLabel>
            <Select placeholder="Select Class">
            <option value="Computer">Computer</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Commerce">Commerce</option>
          </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Section</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Subject</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Date</FormLabel>
            <Input type="date" placeholder="DD-MM-YYYY" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Start Time</FormLabel>
            <Input type="time" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>End Time</FormLabel>
            <Input type="time" />
          </FormControl>
          <Button type="submit" colorScheme="blue" mt={4}>
            Submit
          </Button>
        </Flex>
      </form>
    </Box>
  );
}
