import React, { useState } from "react";
import { Spinner, Stack } from "@chakra-ui/react";
import PageHeader from "../../components/pages/Admin/PageHeader";
import ShowEntriesDropdown from "../../components/pages/Admin/ShowEntriesDropdown";
import TeacherProfileView from "./TeacherProfileView";
import AddTeacher from "../../components/pages/Admin/AddTeacher";
import TeacherView from "../../components/pages/Admin/TeacherView";
import apiMiddleware from "../../components/common/Server/apiMiddleware";
import { useQuery } from "react-query";
import NoDataFoundMessage from "../../components/pages/Admin/NoDataFoundMessage";
import Search from "../../components/pages/Admin/Search";
import ErrorComponent from "../../components/pages/Admin/ErrorComponent";

const jsonData = {
  headers: [
    "BELT NO",
    "NAME",
    "DESIGNATION",
    "EMAIL",
    "PHONE NO",
    "JOINING DTAE",
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
    setSelectedComponent("TeacherProfileView");
  };

  const {
    data: teachers,
    isLoading,
    isError,
  } = useQuery("teachers", () => apiMiddleware("admin/teachers/teachers"));

  return (
    <PageHeader
      headers={headers}
      data={teachers}
      entityName={"Teacher"}
      name={"Teacher"}
      handleListViewClick={handleListViewClick}
      handleAddClick={handleAddClick}
      handleGridClick={handleGridClick}
      role={"Teacher"}
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
          ) : teachers.length > 0 ? (
            <>
              <Search handleSearch={handleSearch} input1={"Belt No"} input2={"Name"} input3={"Designation"} />
              <ShowEntriesDropdown entries={entries} setEntries={setEntries} />
              <TeacherView
                headers={headers}
                data={teachers}
                entries={entries}
                search={search}
              />
            </>
          ) : (
           <NoDataFoundMessage/>
          )}
        </>
      )}
      {selectedComponent === "Add" && <AddTeacher />}
      {selectedComponent === "TeacherProfileView" && <TeacherProfileView teachers={teachers} />}
    </PageHeader>
  );
}
