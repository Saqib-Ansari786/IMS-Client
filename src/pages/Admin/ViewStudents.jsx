import React, { useState } from 'react';
import { Stack } from '@chakra-ui/react';
import StudentSearch from '../../components/pages/Admin/StudentSearch';
import StudentView from '../../components/pages/Admin/StudentView';
import PageHeader from '../../components/pages/Admin/PageHeader';
import AddStudent from '../../components/pages/Admin/AddStudent';

const jsonData = {
    headers: ["BELT NO", "STUDENT NAME", "COURSE NAME", "EMAIL", "PHONE NO", "ADMISSION DTAE", "ACTION"],
    data: [
      {
        beltNo: "A123",
        name: "Ghulam Murtaza",
        courseName: "Programming",
        email: "check@gmail.com",
        phoneNo: "0321-1234567",
        admissionDate: "04 Jan, 2019",
  
      },
      {
        beltNo: "A123",
        name: "Ghulam Murtaza",
        courseName: "Programming",
        email: "check@gmail.com",
        phoneNo: "0321-1234567",
        admissionDate: "04 Jan, 2019",
  
      },
      {
        beltNo: "A123",
        name: "Ghulam Murtaza",
        courseName: "Programming",
        email: "check@gmail.com",
        phoneNo: "0321-1234567",
        admissionDate: "04 Jan, 2019",
  
      },
      {
        beltNo: "A123",
        name: "Ghulam Murtaza",
        courseName: "Programming",
        email: "check@gmail.com",
        phoneNo: "0321-1234567",
        admissionDate: "04 Jan, 2019",
  
      },
      
    ],
  };
export default function ViewStudents() {
  const headers = jsonData.headers;
  const data = jsonData.data;
  const [selectedComponent, setSelectedComponent] = useState('ListView');

  const handleListViewClick = () => {
    setSelectedComponent('ListView');
  };

  const handleAddClick = () => {
    setSelectedComponent('Add');
  };

  return (
    <Stack minW="100%">
      <PageHeader
        handleListViewClick={handleListViewClick}
        handleAddClick={handleAddClick}
      />
      {selectedComponent === 'ListView' && (
        <>
          <StudentSearch />
          <StudentView headers={headers} data={data} />
        </>
      )}
      {selectedComponent === 'Add' && <AddStudent/>}
    </Stack>
  );
}
