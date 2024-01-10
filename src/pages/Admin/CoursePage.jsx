import { Grid, GridItem,  Container, Spinner, Box } from "@chakra-ui/react";
import CourseCard from "../../components/pages/Admin/CourseCard";
import apiMiddleware from "../../components/common/Server/apiMiddleware";
import { useQuery } from "react-query";
import CoursePageHeader from "../../components/pages/Admin/CoursePageHeader";
import NotDataFoundMessage from "../../components/pages/Admin/NoDataFoundMessage";
import ShowEntriesDropdown from "../../components/pages/Admin/ShowEntriesDropdown";
import { useState } from "react";
import ErrorComponent from "../../components/pages/Admin/ErrorComponent";

export default function CoursePage() {
  const [entries, setEntries] = useState(5);
  const {
    data: courses,
    isLoading,
    isError,
  } = useQuery("courses", () => apiMiddleware("admin/courses/courses"));
  return (
    <Box  mt="4">
      <CoursePageHeader>
      <ShowEntriesDropdown entries={entries} setEntries={setEntries} />
      <Grid
      p={6}
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          
        }}
        gap={4}
      >
        {isLoading ? (
          < >
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
          <ErrorComponent/>
        ) : courses.length > 0 ? (
          courses.slice(0, entries).map((course, index) => (
            <GridItem key={index}>
              <CourseCard {...course} />
            </GridItem>
          ))
        ) : (
          <NotDataFoundMessage/>
        )}
      </Grid>
      </CoursePageHeader>
    </Box>
  );
}
