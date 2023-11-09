import { Box, Text, Center, Icon } from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';

export default function ErrorComponent () {
    return (
  <Center>
    <Box
      p={4}
      w={"100%"}
      borderWidth="1px"
      borderRadius="md"
      borderColor="red.500"
      bg="white"
      color="red.600"
      maxW="md"
      textAlign="center"
      boxShadow="lg"
    >
      <Icon as={WarningIcon} w={12} h={12} color="red.500" />
      <Text fontSize="lg" fontWeight="bold">
        Error
      </Text>
      <Text>Failed to load data. Please try again later.</Text>
    </Box>
  </Center>
);}