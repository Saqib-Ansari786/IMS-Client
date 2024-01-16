// src/pages/CreateSalePage.js
import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import apiMiddleware from "../../components/common/Server/apiMiddleware";
import { useSelector } from "react-redux";
import { selectProducts } from "../../store/redux-slices/products_slice";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  date: Yup.date().required("Date is required"),
  quantity: Yup.number()
    .required("Quantity is required")
    .min(1, "Quantity must be at least 1"),
  productId: Yup.string().required("Product is required"),
  customerName: Yup.string().required("Customer Name is required"),
  customerType: Yup.string().required("Customer Type is required"),
});

const CreateSalePage = () => {
  const products = useSelector(selectProducts);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      date: "",
      quantity: 0,
      customerName: "",
      customerType: "",
      productId: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      postsale(values);
      console.log("Sale data submitted:", values);
    },
  });

  const postsale = async (saleData) => {
    try {
      setLoading(true);
      const response = await apiMiddleware("admin/sales/sales", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(saleData),
      });
      console.log(response);
      if (response.success) {
        toast({
          title: "Sale Created.",
          description: "Sale has been created successfully.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
      formik.resetForm();
    } catch (error) {
      toast({
        title: "Sale Creation Failed.",
        description: "Sale could not be created.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      console.log(error);
    }
    setLoading(false);
  };
  const [saleData, setSaleData] = useState({
    date: "",
    quantity: 0,
    customerName: "",
    customerType: "",
    productId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSaleData({ ...saleData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to create the sale using saleData
    postsale(saleData);
    console.log("Sale data submitted:", saleData);
  };

  return (
    <Box backgroundColor={"white"} p={4} borderRadius={8}>
      <Heading as="h1" mb={4} color={"#120E87"}>
        Issue Request
      </Heading>

      <form onSubmit={formik.handleSubmit}>
        <FormControl>
          <FormLabel>Date</FormLabel>
          <Input
            type="date"
            name="date"
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.date && formik.errors.date}
            required
          />
          {formik.touched.date && formik.errors.date && (
            <Box color="red">{formik.errors.date}</Box>
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
            required
          />
          {formik.touched.quantity && formik.errors.quantity && (
            <Box color="red">{formik.errors.quantity}</Box>
          )}
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Product</FormLabel>
          <Select
            name="productId"
            value={formik.values.productId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.productId && formik.errors.productId}
            required
          >
            <option value="" disabled selected hidden>
              Select Product
            </option>
            {products?.map((product, index) => (
              <option key={index} value={product._id}>
                {product.name}
              </option>
            ))}
          </Select>
          {formik.touched.productId && formik.errors.productId && (
            <Box color="red">{formik.errors.productId}</Box>
          )}
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Customer Name</FormLabel>
          <Input
            type="text"
            name="customerName"
            value={formik.values.customerName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={
              formik.touched.customerName && formik.errors.customerName
            }
            required
          />
          {formik.touched.customerName && formik.errors.customerName && (
            <Box color="red">{formik.errors.customerName}</Box>
          )}
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Customer Type</FormLabel>
          <Select
            name="customerType"
            value={formik.values.customerType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={
              formik.touched.customerType && formik.errors.customerType
            }
            required
          >
            <option value="" disabled selected hidden>
              Select Customer Type
            </option>
            <option value={"Student"}>Student</option>
            <option value={"Teacher"}>Teacher</option>
            <option value={"Staff"}>Staff</option>
          </Select>
          {formik.touched.customerType && formik.errors.customerType && (
            <Box color="red">{formik.errors.customerType}</Box>
          )}
        </FormControl>
        <Button
          mt={4}
          backgroundColor={"primary.base"}
          color={"white"}
          _hover={{ bg: "primary.hover", color: "white" }}
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <Spinner
              size="sm"
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="primary.base"
            />
          ) : (
            "Create Sale"
          )}
        </Button>
      </form>
    </Box>
  );
};

export default CreateSalePage;
