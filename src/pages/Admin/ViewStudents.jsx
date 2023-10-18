import React, { useState } from 'react';
import { Stack } from '@chakra-ui/react';
import StudentSearch from '../../components/pages/Admin/StudentSearch';
import StudentView from '../../components/pages/Admin/StudentView';
import PageHeader from '../../components/pages/Admin/PageHeader';
import AddStudent from '../../components/pages/Admin/AddStudent';
import ShowEntriesDropdown from '../../components/pages/Admin/ShowEntriesDropdown';
import TeacherProfileView from './TeacherProfileView';

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
    const [entries, setEntries] = useState(5);
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
      <PageHeader
        headers={headers}
        data={data}
        name={"Student"}
        handleListViewClick={handleListViewClick}
        handleAddClick={handleAddClick}
        handleGridClick={handleGridClick}
      >
        {selectedComponent === 'ListView' && (
          <>
            <StudentSearch />
            <ShowEntriesDropdown entries={entries} setEntries={setEntries} />
            <StudentView headers={headers} data={data} entries={entries} />
          </>
        )}
        {selectedComponent === 'Add' && <AddStudent/>}
        {selectedComponent === 'TeacherProfileView' && <TeacherProfileView/>}
      </PageHeader>
    );
  }
  