import * as React from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Grid templateColumns={{ base: "1fr", md: "3fr 2fr" }}>
      <GridItem display={{ base: "none", md: "block" }}>
        <Image
          src="https://source.unsplash.com/random?wallpapers"
          alt="Background Image"
          objectFit="cover"
          height="100%"
          width="100%"
        />
      </GridItem>
      <GridItem bg={{ base: "gray.50", md: "white" }} p={8}>
        <Flex
          direction="column"
          alignItems="center"
          height="100%"
          justifyContent="center"
        >
          <Avatar bg="blue.500" m={1}>
            <LockIcon />
          </Avatar>
          <Text as="h1" fontSize="2xl" fontWeight="bold" mb={4}>
            Sign in
          </Text>
          <Box as="form" onSubmit={handleSubmit} width="100%">
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="current-password"
                />
              </FormControl>
              <FormControl>
                <Checkbox colorScheme="blue">Remember me</Checkbox>
              </FormControl>
              <Button
                type="submit"
                bg={"primary.base"}
                color={"white.base"}
                size="lg"
                mt={4}
              >
                Sign In
              </Button>
              <Stack direction="row" justifyContent="space-between">
                <Link href="#" fontSize="sm">
                  Forgot password?
                </Link>
                <Link href="#" fontSize="sm">
                  Don't have an account? Sign Up
                </Link>
              </Stack>
            </Stack>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}
