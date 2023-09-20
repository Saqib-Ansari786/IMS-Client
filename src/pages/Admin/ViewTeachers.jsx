import React, { useState } from 'react';
import { Stack } from '@chakra-ui/react';
import PageHeader from '../../components/pages/Admin/PageHeader';
import TeacherView from '../../components/pages/Admin/TeacherView';
import AddTeacher from '../../components/pages/Admin/AddTeacher';
import TeacherProfileView from './TeacherProfileView';

const jsonData = {
    headers: ["BELT NO", "NAME", "DESIGNATION", "EMAIL", "PHONE NO", "JOINING DTAE", "ACTION"],
    data: [
      {
        beltNo: "A123",
        name: "Ghulam Murtaza",
        designation: "professor",
        email: "check@gmail.com",
        phoneNo: "0321-1234567",
        joiningDate: "04 Jan, 2019",
  
      },
      {
        beltNo: "A123",
        name: "Ghulam Murtaza",
        designation: "professor",
        email: "check@gmail.com",
        phoneNo: "0321-1234567",
        joiningDate: "04 Jan, 2019",
  
      },
      {
        beltNo: "A123",
        name: "Ghulam Murtaza",
        designation: "professor",
        email: "check@gmail.com",
        phoneNo: "0321-1234567",
        joiningDate: "04 Jan, 2019",
  
      },
      {
        beltNo: "A123",
        name: "Ghulam Murtaza",
        designation: "professor",
        email: "check@gmail.com",
        phoneNo: "0321-1234567",
        joiningDate: "04 Jan, 2019",
  
      },
      {
        beltNo: "A123",
        name: "Ghulam Murtaza",
        designation: "professor",
        email: "check@gmail.com",
        phoneNo: "0321-1234567",
        joiningDate: "04 Jan, 2019",
  
      },
      
      
    ],
  };
export default function ViewTeachers() {
  const headers = jsonData.headers;
  const data = jsonData.data;
  const [selectedComponent, setSelectedComponent] = useState('ListView');

  const handleListViewClick = () => {
    setSelectedComponent('ListView');
  };

  const handleAddClick = () => {
    setSelectedComponent('Add');
  };
  const handleGridClick = () => {
    setSelectedComponent('TeacherProfileView');
  };

  return (
    <Stack minW="100%">
      <PageHeader
        handleListViewClick={handleListViewClick}
        handleAddClick={handleAddClick}
        handleGridClick={handleGridClick}
      />
      {selectedComponent === 'ListView' && (
        <>
          <TeacherView headers={headers} data={data} />
        </>
      )}
      {selectedComponent === 'Add' && <AddTeacher/>}
      {selectedComponent === 'TeacherProfileView' && <TeacherProfileView/>}
    </Stack>
  );
}
