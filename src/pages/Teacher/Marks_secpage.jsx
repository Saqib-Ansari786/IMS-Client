import { Box, Heading, List, ListItem } from "@chakra-ui/react";
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
      <List spacing={4}>
        {assessments.map((assessment) => (
          <ListItem key={assessment}>
            <Link to={`assessment/${assessment}`}>{assessment}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
