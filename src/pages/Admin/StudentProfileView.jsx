import React, {useState} from 'react';
import { Container, Grid, GridItem } from '@chakra-ui/react';
import ProfileCard from '../../components/pages/Admin/ProfileCard';
import StudentDetail from './StudentDetail';

export default function StudentProfileView({ students }) {
  // const [selectedStudent, setSelectedStudent] = useState(null);

  // const handleReadMoreClick = (student) => {
  //   setSelectedStudent(student);
  // };

  

  return (
    <>
    <Container maxW="container.xl" mt="4">
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        gap={4}
      >
        {students.map((student, index) => (
          <ProfileCard
            key={index}
            imgUrl={student.imgUrl}
            name={`${student.firstname.charAt(0).toUpperCase()}${student.firstname.slice(1)} ${student.lastname.charAt(0).toUpperCase()}${student.lastname.slice(1)}`}
            designation={`${student.type.charAt(0).toUpperCase()}${student.type.slice(1)}`}
            phoneNumber={student.contactNo}
            beltNo={student.beltNo}
            // onReadMoreClick={() => handleReadMoreClick(student)}
          />
        ))}
      </Grid>
    </Container>
    {/* {selectedStudent && (
      <StudentDetail student={selectedStudent} onClose={() => setSelectedStudent(null)} />
    )} */}
    </>
  );
}
