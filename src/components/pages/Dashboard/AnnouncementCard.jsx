import { Box, Heading, Text } from "@chakra-ui/react";

export default function AnnouncementCard() {
  return (
    <Box bg="white" height="fit-content" boxShadow="xl" rounded="2xl" p={5}>
      <Heading as="h2" size="sm" textAlign="left" my={3}>
        Card
      </Heading>
      <Text textAlign="left" fontSize="sm">
        lorem asda aksd ajsdnasd asjdahsda sdjasdhasd asjdahsdjasd asdjasdhasd
        asjdashdjas djasdas djasdhasd asjdasjd
      </Text>
      <Heading as="h2" size="sm" textAlign="left" my={3}>
        Card
      </Heading>
      <Text textAlign="left" fontSize="sm">
        lorem asda aksd ajsdnasd asjdahsda sdjasdhasd asjdahsdjasd asdjasdhasd
        asjdashdjas djasdas djasdhasd asjdasjd
      </Text>
      <Heading as="h2" size="sm" textAlign="left" my={3}>
        Card
      </Heading>
      <Text textAlign="left" fontSize="sm">
        lorem asda aksd ajsdnasd asjdahsda sdjasdhasd asjdahsdjasd asdjasdhasd
        asjdashdjas djasdas djasdhasd asjdasjd
      </Text>
    </Box>
  );
}
