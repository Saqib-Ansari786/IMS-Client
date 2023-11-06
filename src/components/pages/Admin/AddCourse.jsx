import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
} from "@chakra-ui/react";

export default function AddCourse() {
  return (
    <Box
      mt={4}
      p={4}
      backgroundColor="white"
      mx={3}
    >
        <Text color={"#120E87"} fontSize={"2xl"}>Add Course</Text>
      <form>
        <FormControl isRequired>
          <FormLabel>Course Code</FormLabel>
          <Input type="text" placeholder="Enter Course Code" />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Enter Course Name" />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Department</FormLabel>
          <Input type="text" placeholder="Enter Department" />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Strength</FormLabel>
          <Input type="number" placeholder="Enter Strength" />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Duration</FormLabel>
          <Input type="text" placeholder="Enter Duration" />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Author</FormLabel>
          <Input type="text" placeholder="Enter Author" />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Category</FormLabel>
          <Input type="text" placeholder="Enter Category" />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Description</FormLabel>
          <Input type="text" placeholder="Enter Description" />
        </FormControl>
        <Button type="submit" mt={6} colorScheme="blue" py={4} fontSize="1rem">
          Add Course
        </Button>
      </form>
    </Box>
  );
}
