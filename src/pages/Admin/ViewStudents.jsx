import React, { useState } from "react";
import { Spinner, Stack } from "@chakra-ui/react";
import StudentSearch from "../../components/pages/Admin/StudentSearch";
import StudentView from "../../components/pages/Admin/StudentView";
import PageHeader from "../../components/pages/Admin/PageHeader";
import AddStudent from "../../components/pages/Admin/AddStudent";
import ShowEntriesDropdown from "../../components/pages/Admin/ShowEntriesDropdown";
import TeacherProfileView from "./TeacherProfileView";
import apiMiddleware from "../../components/common/Server/apiMiddleware";
import { useQuery } from "react-query";

const jsonData = {
  headers: [
    "BELT NO",
    "STUDENT NAME",
    "COURSE NAME",
    "EMAIL",
    "PHONE NO",
    "ADMISSION DTAE",
    "ACTION",
  ],
};
export default function ViewStudents() {
  const [entries, setEntries] = useState(5);
  const headers = jsonData.headers;
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

  const {
    data: students,
    isLoading,
    isError,
  } = useQuery("products", () => apiMiddleware("admin/students/students"));

  return (
    <PageHeader
      headers={headers}
      data={data}
      name={"Student"}
      handleListViewClick={handleListViewClick}
      handleAddClick={handleAddClick}
      handleGridClick={handleGridClick}
      role={"Student"}
    >
      {selectedComponent === "ListView" && (
        <>
          {isLoading ? (
            <>
              <Spinner
                marginTop={10}
                size="xl"
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.300"
              />
              <p>Loading...</p>
            </>
          ) : isError ? (
            <p>Error</p>
          ) : students.length > 0 ? (
            <>
              <StudentSearch />
              <ShowEntriesDropdown entries={entries} setEntries={setEntries} />
              <StudentView
                headers={headers}
                data={students}
                entries={entries}
              />
            </>
          ) : (
            <p>No Students Found</p>
          )}
        </>
      )}
      {selectedComponent === "Add" && <AddStudent />}
      {selectedComponent === "TeacherProfileView" && <TeacherProfileView />}
    </PageHeader>
  );
}
