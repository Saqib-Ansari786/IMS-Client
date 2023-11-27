import {
  Center,
  Heading,
  Text,
  Button,
  Link,
  Image as ChakraImage,
  Flex,
} from "@chakra-ui/react"; // Rename the Image component here
import { Link as RouterLink } from "react-router-dom";
import errorImage from "../../src/assets/logo.png"; // Import your error image

const NotFound = () => {
  return (
    <Center height="100vh">
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <ChakraImage src={errorImage} alt="Error Image" mb={4} h={60} w={350} />
        <Heading size="xl" mb={4}>
          404 - Page Not Found
        </Heading>
        <Text fontSize="lg" mb={4}>
          The page you are looking for does not exist or has been moved.
        </Text>
        <Link as={RouterLink} to="/" textDecoration="none">
          <Button colorScheme="blue">Go Home</Button>
        </Link>
      </Flex>
    </Center>
  );
};

export default NotFound;
