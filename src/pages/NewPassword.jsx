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
} from "@chakra-ui/react";
import image from "../assets/authimage.jpg";
import apiMiddleware from "../components/common/Server/apiMiddleware";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const NewPassword = () => {
  const formWidth = useBreakpointValue({ base: "90%", md: "40%", lg: "30%" });
  const toast = useToast();
  const { state } = useLocation();
  const { email, type } = state;

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate passwords and perform your password reset logic here
    if (newPassword === confirmPassword) {
      //make a fetch post call on /changepassword with payload including email,type,password

      const payload = {
        email,
        type,
        password: newPassword,
      };

      const response = await apiMiddleware("auth/changepassword", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });

      if (response.success === true) toast({
        title: "Password Reset",
        description: "Password reset successful",
        status: "success",
        duration: 3000,
        isClosable: true,
      });


      // Add your logic for setting the new password here
    } else {
      // Passwords do not match, handle the error
      console.error("Passwords do not match");
      // Add your error handling logic here
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
            New Password
          </Text>
          <Stack spacing={4}>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel htmlFor="newPassword">New Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter new password"
                  id="newPassword"
                  name="newPassword"
                  minLength={8}
                  autoComplete="new-password"
                  onChange={handleNewPasswordChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="confirmPassword">
                  Confirm Password
                </FormLabel>
                <Input
                  type="password"
                  placeholder="Confirm new password"
                  id="confirmPassword"
                  name="confirmPassword"
                  minLength={8}
                  autoComplete="new-password"
                  onChange={handleConfirmPasswordChange}
                />
              </FormControl>
              <Button
                type="submit"
                bg={"primary.base"}
                color={"white.base"}
                size="lg"
                mt={4}
                width="100%"
                _hover={{
                  bg: "primary.hover",
                  color: "white.base",
                }}
              >
                {"Set New Password"}
              </Button>
            </form>
            <Button
              color="blue.400"
              to="/"
              alignSelf="flex-end"
              mt={4}
              as={Link}
            >
              Back to Sign In
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default NewPassword;
