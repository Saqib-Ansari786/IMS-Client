import { useState } from "react";
import {
  Grid,
  GridItem,
  Heading,
  Container,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import CourseCard from "../../components/pages/Admin/CourseCard";
import { Link } from "react-router-dom";

const courseData = [
  {
    courseId: 1,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s",
    title: "PHP Development Course",
    description: "Look, my liege! The Knights Who Say Ni demand a sacrifice!",
    duration: "6 Months",
    author: "John Doe",
    category: "Web Development",
  },
  // Add more course data here
];

export default function ManageCourses() {
  const [isNoCourseMaterial, setIsNoCourseMaterial] = useState(false);

  return (
    <Container maxW="container.xl" mt="4">
      <Heading as="h1" size="xl" mb="4">
        Course Materials
      </Heading>

      {courseData.length === 0 ? (
        // Show this message when no course materials are available
        <Box>
          <Text fontSize="lg">No course materials have been added.</Text>
          <Link to="add-new-course">
            <Button colorScheme="blue" mt="4">
              Add New Course
            </Button>
          </Link>
        </Box>
      ) : (
        // Display course cards when course materials are available
        <Box>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={4}
          >
            {courseData.map((course) => (
              <GridItem key={course.id}>
                <CourseCard {...course} />
              </GridItem>
            ))}
          </Grid>
          <Link to="add-new-course">
            <Button colorScheme="blue" mt="4">
              Add New Course
            </Button>
          </Link>
        </Box>
      )}
    </Container>
  );
}
