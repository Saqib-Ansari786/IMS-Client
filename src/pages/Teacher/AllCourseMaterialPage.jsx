import { Heading, Box, SimpleGrid, GridItem } from "@chakra-ui/react";
import CourseMaterialCard from "../../components/pages/Teacher/CourseMaterialCard";

const courseMaterials = [
  {
    id: 1,
    title: "Introduction to Programming Fundamentals",
    description: "This is the book of programming fundamentals to learn how to program.",
    fileLink: "/link-to-file-1.pdf", 
  },
  {
    id: 1,
    title: "Introduction to Programming Fundamentals",
    description: "This is the book of programming fundamentals to learn how to program.",
    fileLink: "/link-to-file-1.pdf", 
  },
  {
    id: 1,
    title: "Introduction to Programming Fundamentals",
    description: "This is the book of programming fundamentals to learn how to program.",
    fileLink: "/link-to-file-1.pdf", 
  },
  {
    id: 1,
    title: "Introduction to Programming Fundamentals",
    description: "This is the book of programming fundamentals to learn how to program.",
    fileLink: "/link-to-file-1.pdf", 
  },
  {
    id: 1,
    title: "Introduction to Programming Fundamentals",
    description: "This is the book of programming fundamentals to learn how to program.",
    fileLink: "/link-to-file-1.pdf", 
  },
  {
    id: 1,
    title: "Introduction to Programming Fundamentals",
    description: "This is the book of programming fundamentals to learn how to program.",
    fileLink: "/link-to-file-1.pdf", 
  },
  
];

const AllCourseMaterialPage = () => {
 
  return (
    <Box borderRadius={8} bgColor={"white"} p={5} spacing="4">
       <Box py={2} bg="#1D238F" rounded="lg" boxShadow="md" mb={7}>
      <Heading as="h4" fontWeight={"semibold"} color={"white"} 
       size="xl" >
        All Course Material
      </Heading>
      </Box>
      <SimpleGrid mt={5} columns={{ base: 1, sm: 2, md: 2, lg: 3, }} spacing="4" width="100%">
        {courseMaterials.map((data) => (
          <GridItem key={data.id}>
            <CourseMaterialCard {...data} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default AllCourseMaterialPage;
