import { Box, Flex, Spacer, Text } from "@chakra-ui/react";

const ActivityBox = ({ date, activity, place, time, status }) => {
  return (
    <Flex direction="row" alignItems="center" my={5}>
      <Box
        backgroundColor="primary.base"
        color="white"
        p={2}
        borderRadius={5}
        mr={3}
      >
        {date}
      </Box>
      <Flex direction="column">
        <Text color={"primary.base"} fontWeight={"bold"}>
          {activity}
        </Text>
        <Text color={"gray.600"}>{place}</Text>
      </Flex>
      <Spacer />
      <Flex direction="column">
        <Text>{time}</Text>
        <Text color={status === "Upcoming" ? "secondary.base" : "primary.base"}>
          {status}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ActivityBox;
