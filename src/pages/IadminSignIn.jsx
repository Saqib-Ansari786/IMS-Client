import { LockIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  useBreakpointValue,
  Image,
  Stack,
  FormControl,
  FormLabel,
  Link,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import image from "../assets/authimage.jpg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import apiMiddleware from "../components/common/Server/apiMiddleware";
import { setUser } from "../store/redux-slices/user_slice";
import { useNavigate } from "react-router-dom";

const IadminSignIn = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const formWidth = useBreakpointValue({ base: "90%", md: "40%", lg: "30%" });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    type: "iadmin",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    try {
      setLoading(true);
      const response = await apiMiddleware("auth/login", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
      console.log("Response:", response);
      console.log("User", response.user);

      if (response.success) {
        toast({
          title: "Logged in successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        dispatch(setUser({ ...response.data.user, type: "iadmin" }));
        navigate("/inventory_admin");
      }
    } catch (error) {
      console.log("Error:", error);
      toast({
        title: "Login failed",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
      setFormData({
        email: "",
        password: "",
        type: "iadmin",
      });
    }
  };

  return (
    <Flex
      minHeight="100vh"
      align="center"
      justify="center"
      bgGradient="linear(to-r, #080F86, #FF0000)"
    >
      <Flex
        p={8}
        maxWidth={formWidth}
        width="100%"
        bg="white"
        borderRadius="md"
        boxShadow="md"
        position="relative"
        minWidth={{ base: "80%" }}
        minHeight={{ base: "80vh" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box flex={{ base: "1", md: "1", lg: "1" }} alignSelf={"center"}>
          <Image src={image} alt="Logo" maxWidth="80%" margin="0 auto" />
        </Box>
        <Box
          width="1px"
          bg="gray.300"
          my={4}
          mx={6}
          display={{ base: "none", md: "block" }}
        ></Box>
        <Box flex="1" p={8}>
          <LockIcon mb={3} w={10} h={10} color="#FFBF01" />
          <Text
            as="h2"
            color="primary.base"
            fontSize="2xl"
            fontWeight="bold"
            textAlign="center"
            mb={"3"}
          >
            Inventory Admin Login
          </Text>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  type="email"
                  placeholder="eg: abc@gmail.com"
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  type="password"
                  placeholder="*********"
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  minLength={8}
                  value={formData.password}
                  onChange={handleChange}
                />
              </FormControl>
              <Link
                color="primary.base"
                to="/forget-password"
                alignSelf="flex-start"
              >
                Forgot Password?
              </Link>
              <Button
                type="submit"
                bg={"primary.base"}
                color={"white.base"}
                size="lg"
                mt={4}
                _hover={{
                  bg: "primary.hover",
                  color: "white.base",
                }}
              >
                {loading ? <Spinner /> : "Login"}
              </Button>
            </Stack>
          </form>
        </Box>
      </Flex>
    </Flex>
  );
};

export default IadminSignIn;
