import React, { useState } from "react";
import { Spinner, Stack } from "@chakra-ui/react";
import StudentView from "../../components/pages/Admin/StudentView";
import PageHeader from "../../components/pages/Admin/PageHeader";
import AddStudent from "../../components/pages/Admin/AddStudent";
import ShowEntriesDropdown from "../../components/pages/Admin/ShowEntriesDropdown";
import apiMiddleware from "../../components/common/Server/apiMiddleware";
import { useQuery } from "react-query";
import StudentProfileView from "./StudentProfileView";
import NotDataFoundMessage from "../../components/pages/Admin/NoDataFoundMessage";
import Search from "../../components/pages/Admin/Search";
import ErrorComponent from "../../components/pages/Admin/ErrorComponent";

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
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleListViewClick = () => {
    setSelectedComponent("ListView");
  };

  const handleAddClick = () => {
    setSelectedComponent("Add");
  };

  const handleGridClick = () => {
    setSelectedComponent("StudentProfileView");
  };

  const {
    data: students,
    isLoading,
    isError,
  } = useQuery("students", () => apiMiddleware("admin/students/students"));

  console.log(students);

  return (
    <PageHeader
      headers={headers}
      data={students}
      entityName={"Student"}
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
            <ErrorComponent/>
          ) : students.length > 0 ? (
            <>
              <Search handleSearch={handleSearch} input1={"BeltNo"} input2={"Name"} input3={"Course Name"} />
              <ShowEntriesDropdown entries={entries} setEntries={setEntries} />
              <StudentView
                headers={headers}
                data={students}
                entries={entries}
                search={search}
              />
            </>
          ) : (
            <NotDataFoundMessage />
          )}
        </>
      )}
      {selectedComponent === "Add" && <AddStudent />}
      {selectedComponent === "StudentProfileView" && (
        <StudentProfileView students={students} />
      )}
    </PageHeader>
  );
}
