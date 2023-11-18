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

const NewPassword = () => {
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
            New Password
          </Text>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel htmlFor="newPassword">New Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter new password"
                id="newPassword"
                name="newPassword"
                minLength={8}
                autoComplete="new-password"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
              <Input
                type="password"
                placeholder="Confirm new password"
                id="confirmPassword"
                name="confirmPassword"
                minLength={8}
                autoComplete="new-password"
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
            <Link color="blue.400" href="/" alignSelf="flex-end" mt={4}>
              Back to Sign In
            </Link>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default NewPassword;
