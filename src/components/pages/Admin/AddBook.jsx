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
                <Box className="col-12 col-sm-4">
                  <FormControl className="form-group local-forms">
                    <FormLabel>
                      Book ID <Text as="span" className="login-danger">*</Text>
                    </FormLabel>
                    <Input type="text" className="form-control" />
                  </FormControl>
                </Box>
                <Box className="col-12 col-sm-4">
                  <FormControl className="form-group local-forms">
                    <FormLabel>
                      Book Name <Text as="span" className="login-danger">*</Text>
                    </FormLabel>
                    <Input type="text" className="form-control" />
                  </FormControl>
                </Box>
                <Box className="col-12 col-sm-4">
                  <FormControl className="form-group local-forms">
                    <FormLabel>
                      Language <Text as="span" className="login-danger">*</Text>
                    </FormLabel>
                    <Select className="form-control select select2-hidden-accessible">
                      <option data-select2-id="3">Select Language</option>
                      <option data-select2-id="15">English</option>
                      <option data-select2-id="16">Turkish</option>
                      <option data-select2-id="17">Chinese</option>
                      <option data-select2-id="18">Spanish</option>
                      <option data-select2-id="19">Arabic</option>
                    </Select>
                  </FormControl>
                </Box>
                <Box className="col-12 col-sm-4">
                  <FormControl className="form-group local-forms">
                    <FormLabel>
                      Department <Text as="span" className="login-danger">*</Text>
                    </FormLabel>
                    <Input type="text" className="form-control" />
                  </FormControl>
                </Box>
                <Box className="col-12 col-sm-4">
                  <FormControl className="form-group local-forms">
                    <FormLabel>Class</FormLabel>
                    <Select className="form-control select select2-hidden-accessible">
                      <option data-select2-id="6">Select Class *</option>
                      <option data-select2-id="21">LKG</option>
                      <option data-select2-id="22">UKG</option>
                      <option data-select2-id="23">1</option>
                      <option data-select2-id="24">2</option>
                      <option data-select2-id="25">3</option>
                      <option data-select2-id="26">4</option>
                      <option data-select2-id="27">5</option>
                      <option data-select2-id="28">6</option>
                      <option data-select2-id="29">7</option>
                      <option data-select2-id="30">8</option>
                      <option data-select2-id="31">9</option>
                      <option data-select2-id="32">10</option>
                      <option data-select2-id="33">11</option>
                      <option data-select2-id="34">12</option>
                    </Select>
                  </FormControl>
                </Box>
                <Box className="col-12 col-sm-4">
                  <FormControl className="form-group local-forms">
                    <FormLabel>
                      Type <Text as="span" className="login-danger">*</Text>
                    </FormLabel>
                    <Select className="form-control select select2-hidden-accessible">
                      <option data-select2-id="9">Select Type</option>
                      <option>Book</option>
                      <option>DVD</option>
                      <option>CD</option>
                      <option>Newspaper</option>
                    </Select>
                  </FormControl>
                </Box>
                <Box className="col-12 col-sm-4">
                  <FormControl className="form-group local-forms">
                    <FormLabel>
                      Status <Text as="span" className="login-danger">*</Text>
                    </FormLabel>
                    <Select className="form-control select select2-hidden-accessible">
                      <option data-select2-id="12">Select Status</option>
                      <option data-select2-id="36">In Stock</option>
                      <option data-select2-id="37">Out of Stock</option>
                    </Select>
                  </FormControl>
                </Box>
                <Box className="col-12">
                  <Box className="student-submit">
                    <Button type="submit" colorScheme="blue">
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
