import {
  Box,
  Heading,
  Grid,
  GridItem,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

export default function AssessmentsPage() {
  // Mock assessment data
  const assessments = ["Exam 1", "Exam 2", "Final Exam"];

  const { classId } = useParams();

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Assessments for Class {classId}
      </Heading>
      <Grid
        templateColumns={{
          base: "1fr", // On mobile devices, one box in one row
          md: "repeat(3, 1fr)", // On larger screens, three boxes in a row
        }}
        gap={4}
      >
        {assessments.map((assessment) => (
          <GridItem key={assessment}>
            <ChakraLink as={Link} to={`assessment/${assessment}`}>
              <Box
                bgColor={"primary.base"}
                color={"white"}
                p={5}
                fontSize={"xl"}
                borderRadius={"lg"}
                _hover={{ bgColor: "secondary.base" }}
              >
                {assessment}
              </Box>
            </ChakraLink>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
