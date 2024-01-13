import { Box, SimpleGrid, Heading } from "@chakra-ui/react";
import TeacherCourseCard from "../../components/pages/Teacher/TeacherCourseCard";
import { useSelector } from "react-redux";
import { selectTeacher } from "../../store/redux-slices/teacher_slice";

const courses = [
  {
    courseCode: "CS14",
    name: "Programming Fundamentals",
    description: "Learn the basics of Programming in this introductory course.",
    duration: "7 weeks",
    author: "Ghulam Murtaza",
    category: "Computer Science",
    strength: "50",
  },
  {
    courseCode: "CS14",
    name: "Programming Fundamentals",
    description: "Learn the basics of Programming in this introductory course.",
    duration: "7 weeks",
    author: "Ghulam Murtaza",
    category: "Computer Science",
    strength: "50",
  },
  {
    courseCode: "CS14",
    name: "Programming Fundamentals",
    description: "Learn the basics of Programming in this introductory course.",
    duration: "7 weeks",
    author: "Ghulam Murtaza",
    category: "Computer Science",
    strength: "50",
  },
];

const ManageCourses = () => {
  const teacher = useSelector(selectTeacher);

  return (
    <Box
      borderRadius={10}
      p={4}
      backgroundColor={"white"}
      spacing="4"
      width="100%"
    >
      <Box py={2} bg="#1D238F" rounded="lg" boxShadow="md" mb={7}>
        <Heading as="h4" fontWeight={"semibold"} color={"white"} size="xl">
          All Courses
        </Heading>
      </Box>
      <SimpleGrid
        mt={5}
        columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
        spacing="4"
        width="100%"
      >
        {teacher?.courseId?.map((course, index) => (
          <TeacherCourseCard key={index} courseId={course} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ManageCourses;
