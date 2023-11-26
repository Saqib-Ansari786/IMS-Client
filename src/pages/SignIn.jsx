import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Input,
  Spinner,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.png";
import apiMiddleware from "../components/common/Server/apiMiddleware";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../store/redux-slices/user_slice";

export default function SignIn() {
  const [selectedRole, setSelectedRole] = useState("student");
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      type: selectedRole,
      email: data.get("email"),
      password: data.get("password"),
    });
    try {
      setLoading(true);
      const response = await apiMiddleware("auth/login", {
        method: "POST",
        body: JSON.stringify({
          type: selectedRole,
          email: data.get("email"),
          password: data.get("password"),
        }),
        headers: { "Content-Type": "application/json" },
      });
      console.log("Response:", response);
      console.log("User", response.user);

      if (response.success) {
        switch (selectedRole) {
          case "student":
            dispatch(setUser({ ...response.user, type: "student" }));
            break;
          case "teacher":
            dispatch(setUser({ ...response.user, type: "teacher" }));
            break;
          case "admin":
            dispatch(setUser({ ...response.data.user, type: "admin" }));
            break;
          case "iadmin":
            dispatch(setUser({ ...response.data.user, type: "iadmin" }));
            break;
          default:
            break;
        }
        setLoading(false);

        toast({
          title: "Login Successfull",
          description: "You are logged in successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
          colorScheme: "green",
          containerStyle: { color: "white" },
        });
      }
      event.target.reset();
    } catch (error) {
      setLoading(false);
      toast({
        title: "Login Failed",
        description: "Please check your credentials",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
        containerStyle: { color: "white" },
      });
    }
  };

  const renderInterface = () => {
    switch (selectedRole) {
      case "student":
        return "Student Login";
      case "teacher":
        return "Teacher Login";
      case "admin":
        return "Admin Login";
      case "iadmin":
        return "Inventory Admin Login";
      default:
        return null;
    }
  };

  if (user) {
    if (user.type) {
      switch (user.type) {
        case "student":
          return <Navigate to="/student" />;
        case "teacher":
          return <Navigate to="/teacher" />;
        case "admin":
          return <Navigate to="/admin" />;
        case "iadmin":
          return <Navigate to="/iadmin" />;
        default:
          return null;
      }
    }
  }

  return (
    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} minH="100vh">
      <GridItem bg="#F3EFEF">
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          h="100%"
        >
          <Image src={logo} alt="Logo" objectFit="contain" w="50%" mb={4} />
          <Text
            as="h1"
            color="primary.base"
            fontSize="2xl"
            fontWeight="bold"
            textAlign="center"
          >
            Police Training Institute
          </Text>
          <Stack direction="row" spacing={3} mt={5}>
            <Button
              bg={selectedRole === "student" ? "primary.base" : "gray.300"}
              color={selectedRole === "student" ? "white" : "black"}
              onClick={() => setSelectedRole("student")}
            >
              Student
            </Button>
            <Button
              bg={selectedRole === "teacher" ? "primary.base" : "gray.300"}
              color={selectedRole === "teacher" ? "white" : "black"}
              onClick={() => setSelectedRole("teacher")}
            >
              Teacher
            </Button>
            <Button
              bg={selectedRole === "admin" ? "primary.base" : "gray.300"}
              color={selectedRole === "admin" ? "white" : "black"}
              onClick={() => setSelectedRole("admin")}
            >
              Admin
            </Button>
            <Button
              bg={selectedRole === "iadmin" ? "primary.base" : "gray.300"}
              color={selectedRole === "iadmin" ? "white" : "black"}
              onClick={() => setSelectedRole("iadmin")}
            >
              Inventory Admin
            </Button>
          </Stack>
        </Flex>
      </GridItem>
      <GridItem
        bg={{ base: "gray.50", md: "white" }}
        p={8}
        boxShadow={{ base: "none", md: "xl" }}
        w="100%"
      >
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <LockIcon mb={3} w={10} h={10} color="primary.base" />
          <Text
            as="h2"
            color="primary.base"
            fontSize="2xl"
            fontWeight="bold"
            textAlign="center"
          >
            {renderInterface()}
          </Text>
          <Box as="form" onSubmit={handleSubmit} width="100%">
            <Stack spacing={4}>
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
              <FormControl isRequired>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  type="password"
                  placeholder="*********"
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  minLength={8}
                />
              </FormControl>
              <Link
                color="primary.base"
                alignSelf="flex-start"
                to={"/forget-password"}
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
                disabled={loading}
              >
                {loading ? <Spinner color="white" /> : "Sign In"}
              </Button>
            </Stack>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}
