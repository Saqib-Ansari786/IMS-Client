import React from 'react';
import { Box, Text, FormControl, FormLabel, Input, Select, Button } from '@chakra-ui/react';

const AddBook = () => {
  return (
    <Box className="row">
      <Box className="col-sm-12">
        <Box className="card">
          <Box className="card-body">
            <form data-select2-id="14">
              <Box className="row">
                <Box className="col-12">
                  <Text as="h5" className="form-title">
                    Book Information
                  </Text>
                </Box>
                <Box mt={3} className="col-12 col-sm-4">
                  <FormControl className="form-group local-forms">
                    <FormLabel>
                      Book ISBN <Text as="span" className="login-danger">*</Text>
                    </FormLabel>
                    <Input type="text" className="form-control" placeholder="Enter ISBN" />
                  </FormControl>
                </Box>
                <Box mt={3} className="col-12 col-sm-4">
                  <FormControl className="form-group local-forms">
                    <FormLabel>
                      Book Title <Text as="span" className="login-danger">*</Text>
                    </FormLabel>
                    <Input type="text" className="form-control" placeholder="Enter Title" />
                  </FormControl>
                </Box>
                <Box mt={3} className="col-12 col-sm-4">
                  <FormControl className="form-group local-forms">
                    <FormLabel>
                      Author Name <Text as="span" className="login-danger">*</Text>
                    </FormLabel>
                    <Input type="text" className="form-control" placeholder="Enter Author Name" />
                  </FormControl>
                </Box>
                <Box mt={3} className="col-12 col-sm-4">
                  <FormControl className="form-group local-forms">
                    <FormLabel>
                      Language <Text as="span" className="login-danger">*</Text>
                    </FormLabel>
                    <Select className="form-control select select2-hidden-accessible" placeholder="Select Language">
                      <option data-select2-id="15">English</option>
                      <option data-select2-id="16">Urdu</option>
                      <option data-select2-id="17">Punjabi</option>
                    </Select>
                  </FormControl>
                </Box>
                <Box mt={3} className="col-12 col-sm-4">
                  <FormControl className="form-group local-forms">
                    <FormLabel>
                      Quantity <Text as="span" className="login-danger">*</Text>
                    </FormLabel>
                    <Input type="text" className="form-control" placeholder="Enter book Quantity" />
                  </FormControl>
                </Box>
                <Box mt={3} className="col-12 col-sm-4">
                  <FormControl className="form-group local-forms">
                    <FormLabel>
                      Department <Text as="span" className="login-danger">*</Text>
                    </FormLabel>
                    <Input type="text" className="form-control" placeholder="Enter Department" />
                  </FormControl>
                </Box>
                <Box mt={3} className="col-12 col-sm-4">
                  <FormControl className="form-group local-forms">
                    <FormLabel>Course</FormLabel>
                    <Select className="form-control select select2-hidden-accessible" placeholder="Select Course *">
                      <option data-select2-id="21">Computer Science</option>
                      <option data-select2-id="22"> English Literature</option>
                      <option data-select2-id="23">Urdu Literature</option>
                      <option data-select2-id="24">Mathematics</option>
                      <option data-select2-id="25">Physiology</option>
                    </Select>
                  </FormControl>
                </Box>
                <Box mt={3} className="col-12 col-sm-4">
                  <FormControl className="form-group local-forms">
                    <FormLabel>
                      Status <Text as="span" className="login-danger">*</Text>
                    </FormLabel>
                    <Select className="form-control select select2-hidden-accessible" placeholder="Select Status">
                      <option data-select2-id="12">Select Status</option>
                      <option data-select2-id="36">In Stock</option>
                      <option data-select2-id="37">Out of Stock</option>
                    </Select>
                  </FormControl>
                </Box>
                <Box mt={6} className="col-12">
                  <Box className="student-submit">
                    <Button type="submit" colorScheme="blue" _hover={{ bg: "blue.300", color: "white" }}>
                      Submit
                    </Button>
                  </Box>
                </Box>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddBook;
