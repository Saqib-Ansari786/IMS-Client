// import * as React from "react";
// import {
//   Avatar,
//   Box,
//   Button,
//   Checkbox,
//   Flex,
//   FormControl,
//   FormLabel,
//   Grid,
//   GridItem,
//   Image,
//   Input,
//   Link,
//   Stack,
//   Text,
// } from "@chakra-ui/react";
// import { LockIcon } from "@chakra-ui/icons";
// import logo from "../assets/logo.png"

// export default function SignIn() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//   };

//   return (
//     <Grid templateColumns={{ base: "1fr", md: "3fr 2fr" }}>
//       <GridItem display={{ base: "none", md: "block" }}>
//         <Image
//           src={logo}
//           alt="Background Image"
//           objectFit="cover"
//           height="50%"
//           width="50%"
//         />
//         <Text as="h1" color="primary.base" fontSize="2xl" fontWeight="bold" mb={4}> Police Training Institute</Text>
//       </GridItem>
//       <GridItem bg={{ base: "gray.50", md: "white" }} p={8}>
//         <Flex
//           direction="column"
//           alignItems="center"
//           height="100%"
//           justifyContent="center"
//         >
//           <LockIcon mb={3} w={10} h={10} color="primary.base" />
//           <Text as="h1" fontSize="2xl" fontWeight="bold" mb={4}>
//             Welcome to SignIn Page
//           </Text>
//           <Box as="form" onSubmit={handleSubmit} width="100%">
//             <Stack spacing={4}>
//               <FormControl isRequired>
//                 <FormLabel htmlFor="email">Email Address</FormLabel>
//                 <Input
//                   type="email"
//                   placeholder="eg: abc@gmail.com"
//                   id="email"
//                   name="email"
//                   autoComplete="email"
//                   autoFocus
//                 />
//               </FormControl>
//               <FormControl isRequired>
//                 <FormLabel htmlFor="password">Password</FormLabel>
//                 <Input
//                   type="password"
//                   id="password"
//                   name="password"
//                   autoComplete="current-password"
//                 />
//               </FormControl>
//               <FormControl>
//                 <Checkbox colorScheme="blue">Remember me</Checkbox>
//               </FormControl>
//               <Button
//                 type="submit"
//                 bg={"primary.base"}
//                 color={"white.base"}
//                 size="lg"
//                 mt={4}
//               >
//                 Sign In
//               </Button>
//               <Stack direction="row" justifyContent="space-between">
//                 <Link href="#" fontSize="sm">
//                   Forgot password?
//                 </Link>
//               </Stack>
//             </Stack>
//           </Box>
//         </Flex>
//       </GridItem>
//     </Grid>
//   );
// }
// import React from "react";
// import {
//   Avatar,
//   Box,
//   Button,
//   Checkbox,
//   Flex,
//   FormControl,
//   FormLabel,
//   Grid,
//   GridItem,
//   Image,
//   Input,
//   Link,
//   Stack,
//   Text,
// } from "@chakra-ui/react";
// import { LockIcon } from "@chakra-ui/icons";
// import logo from "../assets/logo.png";

// export default function SignIn() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//   };

//   return (
//     <Grid templateColumns={{ base: "1fr", md: "3fr 2fr" }}>
//       <GridItem bg="#F3EFEF" display={{ base: "none", md: "block" }} p={8}>
//         <Flex direction="column" alignItems="center">
//           <Image src={logo} alt="Logo" objectFit="contain" w="50%" mb={4} />
//           <Text
//             as="h1"
//             color="primary.base"
//             fontSize="2xl"
//             fontWeight="bold"
//             textAlign="center"
//           >
//             Police Training Institute
//           </Text>
//           <Stack direction="row" spacing={3} mt={5}>
//             <Button bg="primary.base" color="white">Student</Button>
//             <Button bg="primary.base" color="white">Teacher</Button>
//           </Stack>
//         </Flex>
//       </GridItem>
//       <GridItem bg={{ base: "gray.50", md: "white" }} p={8}>
//         <Flex
//           direction="column"
//           alignItems="center"
//           height="100%"
//           justifyContent="center"
//         >
//           <LockIcon mb={3} w={10} h={10} color="primary.base" />
//           <Text as="h1" fontSize="2xl" fontWeight="bold" mb={9}>
//             Welcome to SignIn Page
//           </Text>
//           <Box as="form" onSubmit={handleSubmit} width="100%">
//             <Stack spacing={4}>
//               <FormControl isRequired>
//                 <FormLabel htmlFor="email">Email Address</FormLabel>
//                 <Input
//                   type="email"
//                   placeholder="eg: abc@gmail.com"
//                   id="email"
//                   name="email"
//                   autoComplete="email"
//                   autoFocus
//                 />
//               </FormControl>
//               <FormControl isRequired>
//                 <FormLabel htmlFor="password">Password</FormLabel>
//                 <Input
//                   type="password"
//                   id="password"
//                   name="password"
//                   autoComplete="current-password"
//                 />
//               </FormControl>
//               <FormControl>
//                 <Checkbox colorScheme="blue">Remember me</Checkbox>
//               </FormControl>
//               <Button
//                 type="submit"
//                 bg={"primary.base"}
//                 color={"white.base"}
//                 size="lg"
//                 mt={4}
//               >
//                 Sign In
//               </Button>
//               <Stack direction="row" justifyContent="space-between">
//                 <Link href="#" fontSize="sm">
//                   Forgot password?
//                 </Link>
//               </Stack>
//             </Stack>
//           </Box>
//         </Flex>
//       </GridItem>
//     </Grid>
//   );
// }
import React from "react";
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
import logo from "../assets/logo.png";

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
    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} minH="100vh">
      <GridItem bg="#F3EFEF">
        <Flex direction="column" alignItems="center" justifyContent="center" h="100%" >
          <Image src={logo} alt="Logo" objectFit="contain" w="50%" mb={4}/>
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
            <Button bg="primary.base" color="white">Student</Button>
            <Button bg="primary.base" color="white">Teacher</Button>
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
          <Text as="h1" fontSize="2xl" fontWeight="bold" mb={9}>
            Welcome to SignIn Page
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
                  autoFocus
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
                />
              </FormControl>
              <FormControl>
              <Stack direction="row" justifyContent="space-between">
                <Checkbox colorScheme="blue">Remember me</Checkbox>
                </Stack>
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
              </Stack>
            </Stack>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}
