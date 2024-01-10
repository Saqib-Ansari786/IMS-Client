import React, { useState } from "react";
import ShowEntriesDropdown from "../../components/pages/Admin/ShowEntriesDropdown";
import NotDataFoundMessage from "../../components/pages/Admin/NoDataFoundMessage";
import Search from "../../components/pages/Admin/Search";
import LibraryHeader from "../../components/pages/Admin/LibrarayHeader";
import AllIssuedBooks from "../../components/pages/Admin/AllIssuedBooks";
import { useQuery } from "react-query";
import apiMiddleware from "../../components/common/Server/apiMiddleware";
import { Spinner } from "@chakra-ui/react";

const jsonData = {
  headers: [
    "ISBN",
    "TITLE",
    "AUTHOR NAME",
    "LANGUAGE",
    "DEPARTMENT",
    "QUANTITY",
  ],
};

export default function AllIssuedBooksPage() {
  const [entries, setEntries] = useState(5);
  const headers = jsonData.headers;
  const [search, setSearch] = useState("");

  const {
    data: issuedBooks,
    error,
    isLoading,
  } = useQuery("issuedBooks", () =>
    apiMiddleware("admin/libraries/library-items/issued")
  );
  const issueRequests = [
    {
      beltno: "123",
      name: "Murtaza",
      title: "Book 1",
      authorName: "Author 1",
      role: "teacher",
      issueDate: "12-12-2023",
    },
    {
      beltno: "123",
      name: "Murtaza",
      title: "Book 1",
      authorName: "Author 1",
      role: "teacher",
      issueDate: "12-12-2023",
    },
    {
      beltno: "123",
      name: "Murtaza",
      title: "Book 1",
      authorName: "Author 1",
      role: "student",
      issueDate: "12-12-2023",
    },
    {
      beltno: "123",
      name: "Murtaza",
      title: "Book 1",
      authorName: "Author 1",
      role: "student",
      issueDate: "12-12-2023",
    },
    {
      beltno: "123",
      name: "Murtaza",
      title: "Book 1",
      authorName: "Author 1",
      role: "student",
      issueDate: "12-12-2023",
    },
    {
      beltno: "123",
      name: "Murtaza",
      title: "Book 1",
      authorName: "Author 1",
      role: "student",
      issueDate: "12-12-2023",
    },
    {
      beltno: "123",
      name: "Murtaza",
      title: "Book 1",
      authorName: "Author 1",
      role: "teacher",
      issueDate: "12-12-2023",
    },
    {
      beltno: "123",
      name: "Murtaza",
      title: "Book 1",
      authorName: "Author 1",
      role: "teacher",
      issueDate: "12-12-2023",
    },
  ];

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <LibraryHeader heading={"All Issued Books"}>
        <>
          {isLoading ? (
            <Spinner
              marginTop={10}
              size="xl"
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.300"
            />
          ) : error ? (
            <NotDataFoundMessage />
          ) : (
            <>
              <Search
                handleSearch={handleSearch}
                input1={"Search by Belt No"}
                input2={"Search by Title"}
                input3={"Search by Author Name"}
              />
              <ShowEntriesDropdown entries={entries} setEntries={setEntries} />
              <AllIssuedBooks
                headers={headers}
                data={issuedBooks}
                search={search}
                entries={entries}
              />
            </>
          )}
        </>
      </LibraryHeader>
    </>
  );
}
