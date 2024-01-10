import {
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FaClipboardCheck } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

export default function AssessmentsPage() {
  const assessments = ["Exam 1", "Exam 2", "Final Exam"];
  const { classId } = useParams();

  return ( 
    <Box bgColor={"whiteAlpha.700"} borderRadius={8} p={6}>
      <Heading as="h1" color={"#1D238F"} size="xl" mb={4}>
        Assessments for Class {classId}
      </Heading>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {assessments.map((assessment) => (
          <GridItem key={assessment}>
            <ChakraLink as={Link} to={`assessment/${assessment}`} style={{ textDecoration: 'none' }}>
              <Box
                display="flex"
                maxW="sm"
                borderWidth="1px"
                borderRadius="xl"
                overflow="hidden"
                boxShadow="xl"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                bgColor={"white"}
                color={"red.500"}
                p={6}
                fontSize={"lg"}
              
                textAlign="center"
                transition="all 0.3s ease"
                _hover={{
                  // bgColor: "red",
                  color: "#1D238F",
                  transform: "scale(1.05)",
                  boxShadow: "lg",
                }}
              >
                <FaClipboardCheck size={"15%"} mb={4} />
                <Text fontWeight={"semibold"} fontSize={"3xl"}>
                  {assessment}
                </Text>
              </Box>
            </ChakraLink>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
