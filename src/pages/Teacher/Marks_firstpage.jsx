import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ClassesPage() {
  // Mock class data
  const classes = [
    { id: "A", studentsCount: 25 },
    { id: "B", studentsCount: 30 },
    { id: "C", studentsCount: 20 },
  ];

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Classes
      </Heading>
      <SimpleGrid columns={3} spacing={4}>
        {classes.map((cls) => (
          <Link to={`${cls.id}`} key={cls.id}>
            <Box
              borderWidth="1px"
              borderRadius="md"
              p={4}
              textAlign="center"
              cursor="pointer"
              _hover={{ bgColor: "gray.100" }}
            >
              <Heading as="h2" size="lg">
                Class {cls.id}
              </Heading>
              <p>Students: {cls.studentsCount}</p>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
}
