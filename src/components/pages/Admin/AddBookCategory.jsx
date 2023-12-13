import React, { useState } from "react";
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import apiMiddleware from "../../common/Server/apiMiddleware";
import SuccessModal from "../Inventory_Admin/SucessModal";

const AddBookCategory = () => {
  const [formData, setFormData] = useState({
    categoryName: "",
    description: "",

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData({
      categoryName: "",
      description: "",
    });
    setIsModalOpen(true);
    setSuccessMessage("Book category successfully added!");

    const response = apiMiddleware("admin/book-categories", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);

    setFormData({
      categoryName: "",
      description: "",
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSuccessMessage(null);
  };

  const [successMessage, setSuccessMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box backgroundColor={"white"} className="row">
      <Box className="col-sm-12">
        <Box className="card">
          <Box className="card-body">
            <form onSubmit={handleSubmit}>
              <Box className="row">
                <Box className="col-12">
                  <Text as="h5" className="form-title">
                    Book Category Information
                  </Text>
                </Box>
                <Box mt={3} className="col-12 col-sm-6">
                  <FormControl className="form-group local-forms">
                    <FormLabel>
                      Category Name{" "}
                      <Text as="span" className="login-danger">
                        *
                      </Text>
                    </FormLabel>
                    <Input
                      type="text"
                      name="categoryName"
                      className="form-control"
                      placeholder="Enter Category Name"
                      value={formData.categoryName}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Box>
                <Box mt={3} className="col-12 col-sm-6">
                  <FormControl className="form-group local-forms">
                    <FormLabel>
                      Description{" "}
                      <Text as="span" className="login-danger">
                        *
                      </Text>
                    </FormLabel>
                    <Input
                      type="text"
                      name="description"
                      className="form-control"
                      placeholder="Enter Description"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Box>
                <Box mt={6} className="col-12">
                  <Box className="student-submit">
                    <Button
                      type="submit"
                      colorScheme="blue"
                      _hover={{ bg: "blue.300", color: "white" }}
                    >
                      Submit
                    </Button>
                  </Box>
                </Box>
              </Box>
            </form>
          </Box>
          <SuccessModal
            successMessage={successMessage}
            isModalOpen={isModalOpen}
            closeModal={closeModal}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AddBookCategory;
