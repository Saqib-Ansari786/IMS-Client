import React, { useState } from "react";
import LibraryManagementHeader from "../../components/pages/Admin/LibraryManagementHeader";
import ShowEntriesDropdown from "../../components/pages/Admin/ShowEntriesDropdown";
import NotDataFoundMessage from "../../components/pages/Admin/NoDataFoundMessage";
import Search from "../../components/pages/Admin/Search";
import IssueRequest from "../../components/pages/Admin/IssueRequest";
import LibraryHeader from "../../components/pages/Admin/LibrarayHeader";

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
      <LibraryHeader heading={"Issued Books Request"}>
        <>
          {isError ? (
            <NotDataFoundMessage />
          ) : (
            <>
              <Search handleSearch={handleSearch} input1={"Search by Belt No"} input2={"Search by Title"} input3={"Search by Author Name"} />
              <ShowEntriesDropdown entries={entries} setEntries={setEntries} />
              <IssueRequest headers={headers} data={issueRequests} search={search} entries={entries} />
            </>
          )}
        </>
      </LibraryHeader>
    </>
  );
}