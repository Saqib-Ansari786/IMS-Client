import React from 'react';
import { Box, Grid, GridItem, Heading, Container } from '@chakra-ui/react';
import CourseCard from '../../components/pages/Admin/CourseCard';


const courseData = [
  {
    id: 1,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s',
    title: 'PHP Development Course',
    description: 'Look, my liege! The Knights Who Say Ni demand a sacrifice!',
    duration: '6 Months',
    fees: '$1,674',
    students: '125+',
  },
  {
    id: 1,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s',
    title: 'PHP Development Course',
    description: 'Look, my liege! The Knights Who Say Ni demand a sacrifice!',
    duration: '6 Months',
    fees: '$1,674',
    students: '125+',
  },
  {
    id: 1,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s',
    title: 'PHP Development Course',
    description: 'Look, my liege! The Knights Who Say Ni demand a sacrifice!',
    duration: '6 Months',
    fees: '$1,674',
    students: '125+',
  },
  {
    id: 1,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s',
    title: 'PHP Development Course',
    description: 'Look, my liege! The Knights Who Say Ni demand a sacrifice!',
    duration: '6 Months',
    fees: '$1,674',
    students: '125+',
  },
  {
    id: 1,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s',
    title: 'PHP Development Course',
    description: 'Look, my liege! The Knights Who Say Ni demand a sacrifice!',
    duration: '6 Months',
    fees: '$1,674',
    students: '125+',
  },
  {
    id: 1,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s',
    title: 'PHP Development Course',
    description: 'Look, my liege! The Knights Who Say Ni demand a sacrifice!',
    duration: '6 Months',
    fees: '$1,674',
    students: '125+',
  },
  
];

export default function CoursePage() {
  return (
    <Container maxW="container.xl" mt="4">
      <Heading as="h1" size="xl" mb="4">
        Courses
      </Heading>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={4}>
        {courseData.map((course) => (
          <GridItem key={course.id}>
            <CourseCard {...course} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}
