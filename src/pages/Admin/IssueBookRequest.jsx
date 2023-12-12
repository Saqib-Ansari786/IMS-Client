import React, { useState } from "react";
import LibraryManagementHeader from "../../components/pages/Admin/LibraryManagementHeader";
import ShowEntriesDropdown from "../../components/pages/Admin/ShowEntriesDropdown";
import NotDataFoundMessage from "../../components/pages/Admin/NoDataFoundMessage";
import Search from "../../components/pages/Admin/Search";
import IssueRequest from "../../components/pages/Admin/IssueRequest";

const jsonData = {
  headers: [ "BELT NO", "NAME", "TITLE", "AUTHOR", "ROLE", "ACTION"],
};

export default function IssueBookRequest() {
  const [entries, setEntries] = useState(5);
  const headers = jsonData.headers;
  const [search, setSearch] = useState("");
  const [isError, setIsError] = useState(false); 
  const [books, setBooks] = useState([]); 


  const issueRequests = [
    {
      beltno: "123",
      name: "Murtaza",
      title: "Book 1",
      authorName: "Author 1",
      role: "student",
    },
    {
      beltno: "123",
      name: "Murtaza",
      title: "Book 1",
      authorName: "Author 1",
      role: "student",
    },
    {
      beltno: "123",
      name: "Murtaza",
      title: "Book 1",
      authorName: "Author 1",
      role: "student",
    },
    
  ];

  const handleSearch = (e) => {
    setSearch(e.target.value)  
  };

  return (
    <>
      <LibraryManagementHeader
        data={issueRequests}
        headers={headers}
      >
        <>
          {isError ? (
            <NotDataFoundMessage />
          ) : (
            <>
              <Search handleSearch={handleSearch} input1={"Search by ISBN"} input2={"Search by Title"} input3={"Search by Category"} />
              <ShowEntriesDropdown entries={entries} setEntries={setEntries} />
              <IssueRequest headers={headers} data={issueRequests} search={search} />
            </>
          )}
        </>
      </LibraryManagementHeader>
    </>
  );
}
