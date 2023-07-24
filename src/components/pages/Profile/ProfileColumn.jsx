import { EditIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, IconButton, Text } from "@chakra-ui/react";

const ProfileColumn = ({ name, phone, email, destination, description }) => {
  return (
    <Box
      bg={"white"}
      minH={{ base: "fit-content", md: "400px" }}
      boxShadow="xl"
      rounded="2xl"
      p={5}
    >
      <Flex justify="space-between" align="center" mb="4">
        <Heading size="md">Profile Information</Heading>
        <IconButton aria-label="Edit profile" icon={<EditIcon />} />
      </Flex>
      <Box textAlign={"left"} color={"gray.500"} fontWeight={"semibold"}>
        <Text width={{ md: "50%" }} lineHeight={"6"} mb={10}>
          {description}
        </Text>
        <Box lineHeight={"10"}>
          <Inputformat input={"Name"} inputvalue={name} />
          <Inputformat input={"Phone"} inputvalue={phone} />
          <Inputformat input={"Email"} inputvalue={email} />
          <Inputformat input={"Destination"} inputvalue={destination} />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileColumn;

const Inputformat = ({ input, inputvalue }) => {
  return (
    <Flex gap={20}>
      <Text>{input}:</Text>
      <Text color={"black"}>
        <b>{inputvalue}</b>
      </Text>
    </Flex>
  );
};
