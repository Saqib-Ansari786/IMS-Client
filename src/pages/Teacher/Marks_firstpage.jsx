import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MarksummaryCourseCard from "../../components/pages/Teacher/MarksummaryCourseCard";
import { selectTeacher } from "../../store/redux-slices/teacher_slice";
import { useSelector } from "react-redux";

export default function ClassesPage() {
  const teacher = useSelector(selectTeacher);
  const courses = [
    {
      id: 1,
      courseCode: "CS14",
      name: "Programming Fundamentals",
      description:
        "Learn the basics of Programming in this introductory course.",
      duration: "7 weeks",
      author: "Ghulam Murtaza",
      category: "Computer Science",
      strength: "50",
    },
    {
      id: 2,
      courseCode: "CS14",
      name: "Programming Fundamentals2",
      description:
        "Learn the basics of Programming in this introductory course.",
      duration: "7 weeks",
      author: "Ghulam Murtaza",
      category: "Computer Science",
      strength: "50",
    },
    {
      id: 3,
      courseCode: "CS14",
      name: "Programming Fundamentals3",
      description:
        "Learn the basics of Programming in this introductory course.",
      duration: "7 weeks",
      author: "Ghulam Murtaza",
      category: "Computer Science",
      strength: "50",
    },
  ];

  return (
    <Box bgColor={"white"} borderRadius={8} p={4}>
      <Box py={2} bg="#1D238F" rounded="lg" boxShadow="md" mb={7}>
        <Heading as="h4" fontWeight={"semibold"} color={"white"} size="xl">
          All Courses
        </Heading>
      </Box>
      <SimpleGrid columns={3} spacing={4}>
        {teacher?.courseId?.map((course, index) => (
          <Link to={`${course}`} key={course}>
            <MarksummaryCourseCard courseId={course} />
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
}
