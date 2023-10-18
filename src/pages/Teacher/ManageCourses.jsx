import { useState } from "react";
import { Box, Text, Button, Grid } from "@chakra-ui/react";
import { AddIcon, AttachmentIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const initialCourseMaterials = [
  {
    title: "Course Material 1",
    document: "document1.pdf",
    description: "Description for Material 1",
  },
  {
    title: "Course Material 2",
    document: "document2.pdf",
    description: "Description for Material 2",
  },
  {
    title: "Course Material 3",
    document: "document3.pdf",
    description: "Description for Material 3",
  },
  {
    title: "Course Material 4",
    document: "document4.pdf",
    description: "Description for Material 3",
  },
  {
    title: "Course Material 5",
    document: "document4.pdf",
    description: "Description for Material 3",
  },
  // Add more course materials as needed
];

const CourseMaterialPage = () => {
  const [courseMaterials, setCourseMaterials] = useState(
    initialCourseMaterials
  );

  const addCourseMaterial = () => {
    // Implement logic to add a new course material here
  };

  return (
    <Box p={4}>
      <Button
        leftIcon={<AddIcon />}
        colorScheme="teal"
        onClick={addCourseMaterial}
        mb={4}
        as={Link}
        to="add-new-course"
      >
        Add New Course Material
      </Button>
      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={4}>
        {courseMaterials.map((material, index) => (
          <Box
            key={index}
            bg={"primary.base"}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            _hover={{ bg: "secondary.base" }}
            color={"white"}
          >
            <AttachmentIcon boxSize={8} />
            <Box ml={2}>
              <Text fontWeight="bold">{material.title}</Text>
              <Text>{material.description}</Text>
              <Text fontSize="sm">{material.document}</Text>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default CourseMaterialPage;
