import React, { useState } from "react";
import BookList from "../../components/pages/Admin/BookList";
import LibraryManagementHeader from "../../components/pages/Admin/LibraryManagementHeader";
import ShowEntriesDropdown from "../../components/pages/Admin/ShowEntriesDropdown";
import SearchBook from "../../components/pages/Admin/SearchBook";
import apiMiddleware from "../../components/common/Server/apiMiddleware";
import { useQuery } from "react-query";
import { Spinner } from "@chakra-ui/react";
import NotDataFoundMessage from "../../components/pages/Admin/NoDataFoundMessage";
const jsonData = {
  headers: ["TITLE", "AUTHOR", "ISBN", "CATEGORY", "AVAILABILTY", "ACTION"],
};

export default function LibraryView() {
  const [entries, setEntries] = useState(5);
  const headers = jsonData.headers;
  const {
    data: books,
    isLoading,
    isError,
  } = useQuery("books", () => apiMiddleware("admin/libraries/library-items"));
  return (
    <>
      <LibraryManagementHeader data={books} headers={headers}>
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
        ) : books.length > 0 ? (
          <>
            <SearchBook />
            <ShowEntriesDropdown entries={entries} setEntries={setEntries} />
            <BookList headers={headers} data={books} entries={entries} />
          </>
        ) : (
          <NotDataFoundMessage/>
        )}
      </LibraryManagementHeader>
    </>
  );
}
