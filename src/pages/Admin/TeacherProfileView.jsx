import React, {useState} from 'react';
import {Grid, Container } from '@chakra-ui/react';
import ProfileCard from '../../components/pages/Admin/ProfileCard';
import ShowEntriesDropdown from '../../components/pages/Admin/ShowEntriesDropdown';

export default function TeacherProfileView({teachers}) {
  const [entries, setEntries] = useState(5);
  return (
    <>
    <ShowEntriesDropdown  entries={entries} setEntries={setEntries} />
    <Container maxW="container.xl" mt="4">
    <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={4}>
        {teachers.map((teacher, index) => (
          <ProfileCard
            key={index}
            imgUrl={teacher.picture}
            name={`${teacher.firstname.charAt(0).toUpperCase()}${teacher.firstname.slice(1)} ${teacher.lastname.charAt(0).toUpperCase()}${teacher.lastname.slice(1)}`}
            designation={teacher.designation}
            phoneNumber={teacher.contactNo}
            beltNo={teacher.beltNo}
          />
        ))}
    </Grid>
  </Container>

</>
);

}
