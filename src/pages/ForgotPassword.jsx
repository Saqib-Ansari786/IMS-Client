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
  useToast,
  Spinner,
} from "@chakra-ui/react";
import image from "../assets/authimage.jpg";
import { useState } from "react";
import apiMiddleware from "../components/common/Server/apiMiddleware";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const formWidth = useBreakpointValue({ base: "90%", md: "40%", lg: "30%" });
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can perform any actions with the email value here
    console.log("Email submitted:", email);
    // Add your logic for password reset here
    try {
      setLoading(true);
      const response = await apiMiddleware("auth/sendmail", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });
      console.log("Response:", response);
      if (response.success) {
        // If the password reset request is successful, show a toast notification
        toast({
          title: "Password Reset",
          description:
            "Password reset request has been sent successfully to your email",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
      navigate("/verifycode");
    } catch (error) {
      // If the password reset request is unsuccessful, show a toast notification
      toast({
        title: "Error",
        description: "Something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    setLoading(false);
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
            Forgot Password
          </Text>
          <Stack spacing={4}>
            <Text fontSize="md" textAlign="center" mb={4}>
              Enter your email address below to reset your password.
            </Text>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  type="email"
                  placeholder="eg: abc@gmail.com"
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </FormControl>
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
                disabled={loading}
                w="100%"
              >
                {loading ? <Spinner /> : "Send Email"}
              </Button>
            </form>
            <Link color="primary.base" to="/" alignSelf="flex-start">
              Back to Sign In
            </Link>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ForgotPassword;
