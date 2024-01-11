import { useState } from "react";
import ShowEntriesDropdown from "../../components/pages/Admin/ShowEntriesDropdown";
import NotDataFoundMessage from "../../components/pages/Admin/NoDataFoundMessage";
import Search from "../../components/pages/Admin/Search";
import IssueRequest from "../../components/pages/Admin/IssueRequest";
import LibraryHeader from "../../components/pages/Admin/LibrarayHeader";
import { useQuery } from "react-query";
import apiMiddleware from "../../components/common/Server/apiMiddleware";
import { Spinner } from "@chakra-ui/react";

const jsonData = {
  headers: ["BOOK ID", "STUDENT ID", "STATUS", "ISSUE DATE", "ACTION"],
};

export default function IssueBookRequest() {
  const [entries, setEntries] = useState(5);
  const headers = jsonData.headers;
  const [search, setSearch] = useState("");
  const {
    data: issuedRequests,
    error,
    isLoading,
  } = useQuery("issuedRequests", () =>
    apiMiddleware("admin/libraries/library-items/issue-requests")
  );
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
    setSearch(e.target.value);
  };

  return (
    <>
      <LibraryHeader heading={"Issued Books Request"}>
        <>
          {isLoading ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="#120E87"
              size="xl"
              mt="10"
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
              <IssueRequest
                headers={headers}
                data={issuedRequests}
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
