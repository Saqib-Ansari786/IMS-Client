import { Grid, GridItem, Heading, Container, Spinner } from "@chakra-ui/react";
import CourseCard from "../../components/pages/Admin/CourseCard";
import apiMiddleware from "../../components/common/Server/apiMiddleware";
import { useQuery } from "react-query";

export default function CoursePage() {
  const {
    data: courses,
    isLoading,
    isError,
  } = useQuery("courses", () => apiMiddleware("admin/courses/courses"));
  return (
    <Container maxW="container.xl" mt="4">
      <Heading as="h1" size="xl" mb="4">
        Courses
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
      >
        {isLoading ? (
          <>
            <Spinner
              marginTop={10}
              size="xl"
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.300"
            />
            <p>Loading...</p>
          </>
        ) : isError ? (
          <p>Error</p>
        ) : courses.length > 0 ? (
          courses.map((course, index) => (
            <GridItem key={index}>
              <CourseCard {...course} />
            </GridItem>
          ))
        ) : (
          <p>No data</p>
        )}
      </Grid>
    </Container>
  );
}
