import { Box, Heading, Text } from "@chakra-ui/react";

export default function AnnouncementCard({ data }) {
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

      {data &&
        data.map((announcement, index) => (
          <Box key={index} my={3}>
            <Heading as="h2" size="sm" my={3}>
              {announcement.title}
            </Heading>
            <Text fontSize="sm">{announcement.content}</Text>
          </Box>
        ))}
    </Box>
  );
}
