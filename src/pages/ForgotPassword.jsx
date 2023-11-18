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
} from "@chakra-ui/react";
import image from "../assets/authimage.jpg";

const ForgotPassword = () => {
  const formWidth = useBreakpointValue({ base: "90%", md: "40%", lg: "30%" });

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
          <Image
            src={image}
            alt="Logo"
            maxWidth="80%"
            margin="0 auto"
          />
        </Box>
        <Box width="1px" bg="gray.300" my={4} mx={6} display={{ base: "none", md: "block" }}></Box>
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
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                type="email"
                placeholder="eg: abc@gmail.com"
                id="email"
                name="email"
                autoComplete="email"
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
            >
              {"Reset Password"}
            </Button>
            <Link color="primary.base" href="/verifycode" alignSelf="flex-start">
              Back to Sign In
            </Link>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ForgotPassword;
