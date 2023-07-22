import { AttachmentIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Box, HStack, Heading, IconButton, Text } from "@chakra-ui/react";

function CustomCard({ title, text }) {
  return (
    <Box
      bg="white"
      height="fit-content"
      boxShadow="xl"
      rounded="2xl"
      p={5}
      borderLeft={"8px"}
      borderColor={"primary.base"}
      _hover={{
        borderColor: "secondary.base",
      }}
    >
      <Heading as="h2" size="md" textAlign={"left"} mb={3}>
        Card
      </Heading>

      <Text textAlign="left" fontSize="md">
        lorem asda aksd ajsdnasd asjdahsda sdjasdhasd asjdahsdjasd asdjasdhasd
        asjdashdjas djasdas djasdhasd asjdasjd
      </Text>
      <HStack justifyContent="flex-end" mt={4}>
        <IconButton icon={<ViewIcon />} variant="ghost" />

        <IconButton icon={<EditIcon />} variant="ghost" />

        <IconButton icon={<AttachmentIcon />} variant="ghost" />
      </HStack>
    </Box>
  );
}

export default CustomCard;
