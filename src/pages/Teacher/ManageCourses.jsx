import { Grid, GridItem, Heading, Container } from "@chakra-ui/react";
import CourseCard from "../../components/pages/Admin/CourseCard";

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
  {
    courseId: 2,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s",
    title: "PHP Development Course",
    description: "Look, my liege! The Knights Who Say Ni demand a sacrifice!",
    duration: "6 Months",
    author: "John Doe",
    category: "Web Development",
  },
  {
    courseId: 3,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s",
    title: "PHP Development Course",
    description: "Look, my liege! The Knights Who Say Ni demand a sacrifice!",
    duration: "6 Months",
    author: "John Doe",
    category: "Web Development",
  },
  {
    courseId: 4,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s",
    title: "PHP Development Course",
    description: "Look, my liege! The Knights Who Say Ni demand a sacrifice!",
    duration: "6 Months",
    author: "John Doe",
    category: "Web Development",
  },
  {
    courseId: 5,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s",
    title: "PHP Development Course",
    description: "Look, my liege! The Knights Who Say Ni demand a sacrifice!",
    duration: "6 Months",
    author: "John Doe",
    category: "Web Development",
  },
  {
    courseId: 6,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s",
    title: "PHP Development Course",
    description: "Look, my liege! The Knights Who Say Ni demand a sacrifice!",
    duration: "6 Months",
    author: "John Doe",
    category: "Web Development",
  },
];

export default function ManageCourses() {
  return (
    <Container maxW="container.xl" mt="4">
      <Heading as="h1" size="xl" mb="4">
        Courses Materials
      </Heading>
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
    </Container>
  );
}
