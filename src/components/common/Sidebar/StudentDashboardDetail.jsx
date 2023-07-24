import { Box } from "@chakra-ui/react";

export default function StudentDashboardDetail({text}) {
  return (
    <Box
      w="100%"
      h="100%"
      bg="#180E8A"
      boxShadow="0px 20px 27px rgba(0, 0, 0, 0.05)"
      borderRadius={8}
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="white"
      fontSize="3xl"
      fontWeight="bold"
      mt={30}
    >
        {text}
    </Box>
  );
}
