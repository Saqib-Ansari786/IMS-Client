import React, { useState } from "react";
import ShowEntriesDropdown from "../../components/pages/Admin/ShowEntriesDropdown";
import NotDataFoundMessage from "../../components/pages/Admin/NoDataFoundMessage";
import Search from "../../components/pages/Admin/Search";
import LibraryHeader from "../../components/pages/Admin/LibrarayHeader";
import AllIssuedBooks from "../../components/pages/Admin/AllIssuedBooks";

const jsonData = {
  headers: [ "BELT NO", "NAME", "TITLE", "AUTHOR", "ROLE","ISSUE DATE", "ACTION"],
};

export default function AllIssuedBooksPage() {
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
      role: "teacher",
      issueDate: "12-12-2023"
    },
    {
      beltno: "123",
      name: "Murtaza",
      title: "Book 1",
      authorName: "Author 1",
      role: "teacher",
      issueDate: "12-12-2023"
    },
    {
      beltno: "123",
      name: "Murtaza",
      title: "Book 1",
      authorName: "Author 1",
      role: "student",
      issueDate: "12-12-2023"
    },
    {
      beltno: "123",
      name: "Murtaza",
      title: "Book 1",
      authorName: "Author 1",
      role: "student",
      issueDate: "12-12-2023"
    },
    {
      beltno: "123",
      name: "Murtaza",
      title: "Book 1",
      authorName: "Author 1",
      role: "student",
      issueDate: "12-12-2023"
    },
    {
      beltno: "123",
      name: "Murtaza",
      title: "Book 1",
      authorName: "Author 1",
      role: "student",
      issueDate: "12-12-2023"
    },
    {
      beltno: "123",
      name: "Murtaza",
      title: "Book 1",
      authorName: "Author 1",
      role: "teacher",
      issueDate: "12-12-2023"
    },
    {
      beltno: "123",
      name: "Murtaza",
      title: "Book 1",
      authorName: "Author 1",
      role: "teacher",
      issueDate: "12-12-2023"
    },
    
  ];

  const handleSearch = (e) => {
    setSearch(e.target.value)  
  };

  return (
    <>
      <LibraryHeader heading={"All Issued Books"}>
        <>
          {isError ? (
            <NotDataFoundMessage />
          ) : (
            <>
              <Search handleSearch={handleSearch} input1={"Search by Belt No"} input2={"Search by Title"} input3={"Search by Author Name"} />
              <ShowEntriesDropdown entries={entries} setEntries={setEntries} />
              <AllIssuedBooks headers={headers} data={issueRequests} search={search} entries={entries} />
            </>
          )}
        </>
      </LibraryHeader>
    </>
  );
}
