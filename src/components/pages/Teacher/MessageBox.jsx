import { Avatar, Flex, Spacer, Text } from "@chakra-ui/react";

const MessageBox = ({ sender, message, time }) => {
    return (
      <Flex direction="row" alignItems="center" my={5}>
        <Avatar size="sm" name={sender} src="url_to_avatar_image" mr={3} />
        <Flex direction="column" textAlign={"left"}>
          <Text fontWeight="bold">{sender}</Text>
          <Text>{message}</Text>
        </Flex>
        <Spacer />
        <Text color="gray.500">{time}</Text>
      </Flex>
    );
  };

export default MessageBox;