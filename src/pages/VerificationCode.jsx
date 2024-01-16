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
} from "@chakra-ui/react";
import image from "../assets/authimage.jpg";
import { useState } from "react";
import apiMiddleware from "../components/common/Server/apiMiddleware";
import { Link, useNavigate, useLocation } from "react-router-dom";

const VerificationCode = () => {
  const formWidth = useBreakpointValue({ base: "90%", md: "40%", lg: "30%" });
  const [verificationCode, setVerificationCode] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { pincode, email, type } = state;

  const handleVerificationCodeChange = (e) => {
    // Allow only digits
    const sanitizedValue = e.target.value.replace(/\D/g, "");
    setVerificationCode(sanitizedValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (verificationCode.toString() === pincode.toString()) {
        toast({
          title: "Verification Code",
          description: "Verification code is valid",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/newpass",
          {
            state: {
              email: email,
              type: type,
            }
          });
      }
      else toast({
        title: "Error",
        description: "Invalid verification code",
        status: "error",
        duration: 3000,
        isClosable: true,
      });


    } catch (error) {
      // If the verification code is invalid, show a toast notification
      toast({
        title: "Error",
        description: "Invalid verification code",
        status: "error",
        duration: 3000,
        isClosable: true,
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
            Verification Code
          </Text>
          <Stack spacing={4}>
            <Text fontSize="md" textAlign="center" mb={4}>
              Please enter the verification code sent to your email.
            </Text>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel htmlFor="verificationCode">
                  Verification Code
                </FormLabel>
                <Input
                  type="number"
                  placeholder="Enter code"
                  id="verificationCode"
                  name="verificationCode"
                  autoComplete="off"
                  maxLength={4}
                  pattern="\d{4}" // Allow only digits and enforce a 4-digit pattern
                  value={verificationCode}
                  onChange={handleVerificationCodeChange}
                />
              </FormControl>
              <Button
                type="submit"
                bg={"primary.base"}
                color={"white.base"}
                onClick={handleSubmit}
                size="lg"
                mt={4}
                _hover={{
                  bg: "primary.hover",
                  color: "white.base",
                }}
                w="100%"
              >
                {"Verify"}
              </Button>
            </form>
            <Button color="blue.400" to="/" alignSelf="flex-end" as={Link}>
              Back to Sign In
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default VerificationCode;
