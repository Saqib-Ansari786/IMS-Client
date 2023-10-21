import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from '@chakra-ui/react';

export default function AddTeacher() {
  return (
    <Box
      mt={4}
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      backgroundColor="white"
      boxShadow="lg"
    //   maxWidth="500px"
    //   mx="auto"
    >
      <form>
        <FormControl isRequired>
          <FormLabel>First Name</FormLabel>
          <Input type="text" placeholder="Enter First Name" />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Last Name</FormLabel>
          <Input type="text" placeholder="Enter Last Name" />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Belt No</FormLabel>
          <Input type="text" placeholder="Enter Belt No" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter Email" />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Joining Date</FormLabel>
          <Input type="date" />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Designation</FormLabel>
          <Input type="text" placeholder='Enter the designation' />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Course</FormLabel>
          <Select placeholder="Select Class">
            <option value="Computer">Computer</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Commerce">Commerce</option>
          </Select>
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Gender</FormLabel>
          <Select placeholder="Select Gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Select>
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Personal Mobile No.</FormLabel>
          <Input type="tel" placeholder="Enter Mobile No." />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Home Phone No.</FormLabel>
          <Input type="tel" placeholder="Enter Home Phone No." />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Date Of Birth</FormLabel>
          <Input type="date" />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel>Address</FormLabel>
          <Input type="text" placeholder="Enter Address" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Profile Picture</FormLabel>
          <Input type="file" />
          <small id="fileHelp" className="form-text text-muted">
            Upload a profile picture.
          </small>
        </FormControl>
        <Button
          type="submit"
          mt={6}
          colorScheme="blue"
       
          py={4}
          fontSize="1rem"
        >
          Add Student
        </Button>
      </form>
    </Box>
  );
}
