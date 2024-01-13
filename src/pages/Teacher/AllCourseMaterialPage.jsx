import {
  Heading,
  Box,
  SimpleGrid,
  GridItem,
  Spinner,
  Alert,
} from "@chakra-ui/react";
import CourseMaterialCard from "../../components/pages/Teacher/CourseMaterialCard";
import { useParams } from "react-router-dom";
import { selectTeacher } from "../../store/redux-slices/teacher_slice";
import { useSelector } from "react-redux";
import apiMiddleware from "../../components/common/Server/apiMiddleware";
import { useQuery } from "react-query";

const courseMaterials = [
  {
    id: 1,
    title: "Introduction to Programming Fundamentals",
    description:
      "This is the book of programming fundamentals to learn how to program.",
    fileLink: "/link-to-file-1.pdf",
  },
  {
    id: 1,
    title: "Introduction to Programming Fundamentals",
    description:
      "This is the book of programming fundamentals to learn how to program.",
    fileLink: "/link-to-file-1.pdf",
  },
  {
    id: 1,
    title: "Introduction to Programming Fundamentals",
    description:
      "This is the book of programming fundamentals to learn how to program.",
    fileLink: "/link-to-file-1.pdf",
  },
  {
    id: 1,
    title: "Introduction to Programming Fundamentals",
    description:
      "This is the book of programming fundamentals to learn how to program.",
    fileLink: "/link-to-file-1.pdf",
  },
  {
    id: 1,
    title: "Introduction to Programming Fundamentals",
    description:
      "This is the book of programming fundamentals to learn how to program.",
    fileLink: "/link-to-file-1.pdf",
  },
  {
    id: 1,
    title: "Introduction to Programming Fundamentals",
    description:
      "This is the book of programming fundamentals to learn how to program.",
    fileLink: "/link-to-file-1.pdf",
  },
];

const AllCourseMaterialPage = () => {
  const { courseId } = useParams();
  const Teacher = useSelector(selectTeacher);

  const {
    data: teacherCourseMaterial,
    isLoading,
    isError,
    error,
  } = useQuery("teacherCourseMaterial", () =>
    apiMiddleware(`courses/course-materials/${courseId}/${Teacher._id}`)
  );

  return (
    <Box borderRadius={8} bgColor={"white"} p={5} spacing="4">
      <Box py={2} bg="#1D238F" rounded="lg" boxShadow="md" mb={7}>
        <Heading as="h4" fontWeight={"semibold"} color={"white"} size="xl">
          All Course Material
        </Heading>
      </Box>
      <SimpleGrid
        mt={5}
        columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
        spacing="4"
        width="100%"
      >
        {isLoading ? (
          <Spinner size="xl" />
        ) : isError ? (
          <Alert status="error">
            <Alert.Icon />
            <Alert.Title mr={2}>Error!</Alert.Title>
            <Alert.Description>{error.message}</Alert.Description>
          </Alert>
        ) : (
          teacherCourseMaterial?.map((courseMaterial, index) => (
            <GridItem key={index}>
              <CourseMaterialCard {...courseMaterial} />
            </GridItem>
          ))
        )}
      </SimpleGrid>
    </Box>
  );
};

export default AllCourseMaterialPage;
