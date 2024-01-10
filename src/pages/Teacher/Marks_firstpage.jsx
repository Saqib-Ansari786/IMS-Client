import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import TeacherCourseCard from "../../components/pages/Teacher/TeacherCourseCard";
import MarksummaryCourseCard from "../../components/pages/Teacher/MarksummaryCourseCard";

export default function ClassesPage() {
  // Mock class data
  const classes = [
    { id: "A", studentsCount: 25 },
    { id: "B", studentsCount: 30 },
    { id: "C", studentsCount: 20 },
  ];
  const courses = [
    {
      id: 1,
      courseCode: "CS14",
      name: 'Programming Fundamentals',
      description: 'Learn the basics of Programming in this introductory course.',
      duration: '7 weeks',
      author: 'Ghulam Murtaza',
      category: 'Computer Science',
      strength: "50"
      
    },
    {
      id: 2,
      courseCode: "CS14",
      name: 'Programming Fundamentals2',
      description: 'Learn the basics of Programming in this introductory course.',
      duration: '7 weeks',
      author: 'Ghulam Murtaza',
      category: 'Computer Science',
      strength: "50"
      
    },
    {
      id: 3,
      courseCode: "CS14",
      name: 'Programming Fundamentals3',
      description: 'Learn the basics of Programming in this introductory course.',
      duration: '7 weeks',
      author: 'Ghulam Murtaza',
      category: 'Computer Science',
      strength: "50"
      
    },
    
  ];

  return (
    <Box bgColor={"white"} borderRadius={8} p={4}>
      <Heading as="h1" color={"#1D238F"} 
       size="xl"  mb={7}>
        All Courses
      </Heading>
      <SimpleGrid columns={3} spacing={4}>
        {courses.map((data) => (
          <Link to={`${data.id}`} key={data.id}>
            <MarksummaryCourseCard {...data}/>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
}
