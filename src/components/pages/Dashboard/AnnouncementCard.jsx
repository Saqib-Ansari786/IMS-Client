import { Box, Heading, Text } from "@chakra-ui/react";

export default function AnnouncementCard() {
  return (
    <Box
      bg="white"
      height="fit-content"
      boxShadow="xl"
      rounded="2xl"
      p={5}
      textAlign={"left"}
    >
      <Heading size="md">Announcements</Heading>

      <Heading as="h2" size="sm" my={3}>
        Card
      </Heading>
      <Text fontSize="sm">
        lorem asda aksd ajsdnasd asjdahsda sdjasdhasd asjdahsdjasd asdjasdhasd
        asjdashdjas djasdas djasdhasd asjdasjd
      </Text>
      <Heading as="h2" size="sm" my={3}>
        Card
      </Heading>
      <Text fontSize="sm">
        lorem asda aksd ajsdnasd asjdahsda sdjasdhasd asjdahsdjasd asdjasdhasd
        asjdashdjas djasdas djasdhasd asjdasjd
      </Text>
      <Heading as="h2" size="sm" my={3}>
        Card
      </Heading>
      <Text fontSize="sm">
        lorem asda aksd ajsdnasd asjdahsda sdjasdhasd asjdahsdjasd asdjasdhasd
        asjdashdjas djasdas djasdhasd asjdasjd
      </Text>
    </Box>
  );
}
