import { useState } from "react";
import { Container, Grid } from "@chakra-ui/react";
import ProfileCard from "../../components/pages/Admin/ProfileCard";
import ShowEntriesDropdown from "../../components/pages/Admin/ShowEntriesDropdown";

export default function StudentProfileView({ students }) {
  const [entries, setEntries] = useState(5);
  // const [selectedStudent, setSelectedStudent] = useState(null);

  // const handleReadMoreClick = (student) => {
  //   setSelectedStudent(student);
  // };

  

  return (
    <>
    <ShowEntriesDropdown  entries={entries} setEntries={setEntries} />
    <Container maxW="container.xl" mt="4">
      
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        gap={4}
      >
        {students.slice(0, entries).map((student, index) => (
          <ProfileCard
            key={index}
            imgUrl={student.picture}
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
