import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Input,
  Select,
  Button,
  FormControl,
  FormLabel,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import apiMiddleware from "../../components/common/Server/apiMiddleware";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  category: Yup.string().required("Category is required"),
  quantity: Yup.number()
    .required("Quantity is required")
    .min(1, "Quantity must be at least 1"),
});

const CreateProductPage = () => {
  const toast = useToast();
  const [successMessage, setSuccessMessage] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      quantity: 0,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      postProduct(values);
    },
  });

  const postProduct = async (productData) => {
    try {
      const response = await apiMiddleware("admin/products/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (response.success) {
        setSuccessMessage("Product successfully added!");
        formik.resetForm();
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Product Creation Failed.",
        description: "Product could not be created.",
        status: "error",
        position: "top-right",
        containerStyle: { color: "white" },
        duration: 9000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    // Show the modal if there is a success message
    if (successMessage) {
      toast({
        title: "Product Created.",
        description: "Product has been created successfully.",
        status: "success",
        position: "top-right",
        colorScheme: "green",
        containerStyle: { color: "white" },
        duration: 9000,
        isClosable: true,
      });
    }
  }, [successMessage, toast]);

  return (
    <Box backgroundColor={"white"} p={4} borderRadius={8}>
      <Heading as="h1" mb={4} color={"#120E87"}>
        Add Product
      </Heading>
      <form onSubmit={formik.handleSubmit}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.name && formik.errors.name}
            placeholder="Product Name"
            required
          />
          {formik.touched.name && formik.errors.name && (
            <Box color="red">{formik.errors.name}</Box>
          )}
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Category</FormLabel>
          <Select
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.category && formik.errors.category}
            placeholder="Select Category"
            required
          >
            <option value="Food Items">Food Items</option>
            <option value="Stationary">Stationary</option>
            <option value="Furniture Items">Furniture Items</option>
          </Select>
          {formik.touched.category && formik.errors.category && (
            <Box color="red">{formik.errors.category}</Box>
          )}
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Quantity</FormLabel>
          <Input
            type="number"
            name="quantity"
            value={formik.values.quantity}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.quantity && formik.errors.quantity}
            placeholder="Quantity"
            required
          />
          {formik.touched.quantity && formik.errors.quantity && (
            <Box color="red">{formik.errors.quantity}</Box>
          )}
        </FormControl>
        <Button
          mt={4}
          backgroundColor={"primary.base"}
          color={"white"}
          _hover={{ bg: "primary.hover", color: "white" }}
          type="submit"
        >
          Create Product
        </Button>
      </form>
    </Box>
  );
};

export default CreateProductPage;
