import React, { useState } from "react";
import { Stack } from "@chakra-ui/react";
import StudentSearch from "../../components/pages/Admin/StudentSearch";
import PageHeader from "../../components/pages/Admin/PageHeader";
import ShowEntriesDropdown from "../../components/pages/Admin/ShowEntriesDropdown";
import TeacherProfileView from "./TeacherProfileView";
import AddTeacher from "../../components/pages/Admin/AddTeacher";
import TeacherView from "../../components/pages/Admin/TeacherView";

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
export default function ViewStudents() {
  const [entries, setEntries] = useState(5);
  const headers = jsonData.headers;
  const data = jsonData.data;
  const [selectedComponent, setSelectedComponent] = useState("ListView");

  const handleListViewClick = () => {
    setSelectedComponent("ListView");
  };

  const handleAddClick = () => {
    setSelectedComponent("Add");
  };

  const handleGridClick = () => {
    setSelectedComponent("TeacherProfileView");
  };

  return (
    <PageHeader
      headers={headers}
      data={data}
      name={"Teacher"}
      handleListViewClick={handleListViewClick}
      handleAddClick={handleAddClick}
      handleGridClick={handleGridClick}
      role={"Teacher"}
    >
      {selectedComponent === "ListView" && (
        <>
          <StudentSearch />
          <ShowEntriesDropdown entries={entries} setEntries={setEntries} />
          <TeacherView headers={headers} data={data} entries={entries} />
        </>
      )}
      {selectedComponent === "Add" && <AddTeacher />}
      {selectedComponent === "TeacherProfileView" && <TeacherProfileView />}
    </PageHeader>
  );
}
