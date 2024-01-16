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
const CreateSalePage = () => {
  const products = useSelector(selectProducts);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  console.log(products);

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
      setSaleData({
        date: "",
        quantity: 0,
        customerName: "",
        customerType: "",
        productId: "",
      });
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
        Create Sale
      </Heading>

      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Date</FormLabel>
          <Input
            type="date"
            name="date"
            value={saleData.date}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Quantity</FormLabel>
          <Input
            type="number"
            name="quantity"
            value={saleData.quantity}
            onChange={handleChange}
            required
            min={1}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Select Product</FormLabel>
          <Select
            name="productId"
            value={saleData.productId}
            onChange={handleChange}
            required
          >
            <option value="" disabled selected hidden>
              Select Product
            </option>
            {products?.map((product) => (
              <option key={product._id} value={product._id}>
                {product.name}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Customer Name</FormLabel>
          <Input
            type="text"
            name="customerName"
            value={saleData.customerName}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Customer Type</FormLabel>
          <Select
            name="customerType"
            value={saleData.customerType}
            onChange={handleChange}
            required
          >
            <option value="" disabled selected hidden>
              Select Customer Type
            </option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Staff">Staff</option>
          </Select>
        </FormControl>
        <Button
          mt={4}
          backgroundColor={"primary.base"}
          color={"white"}
          _hover={{ bg: "primary.hover", color: "white" }}
          type="submit"
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
