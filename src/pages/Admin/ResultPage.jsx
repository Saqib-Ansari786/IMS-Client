import React, { useState } from "react";
import ShowEntriesDropdown from "../../components/pages/Admin/ShowEntriesDropdown";
import ResultTable from "../../components/pages/Admin/ResultTable";
import ResultHeader from "../../components/pages/Admin/ResultHeader";
import apiMiddleware from "../../components/common/Server/apiMiddleware";
import { useQuery } from "react-query";
import Search from "../../components/pages/Admin/Search";
import { Spinner } from "@chakra-ui/react";
import ErrorComponent from "../../components/pages/Admin/ErrorComponent";
import NotDataFoundMessage from "../../components/pages/Admin/NoDataFoundMessage";

const jsonData = {
  headers: [
    "BELT NO",
    "STUDENT NAME",
    "COURSE NAME",
    "DURATION STATUS",
    "STATUS",
  ],
};
export default function ResultPage() {
  const [entries, setEntries] = useState(5);
  const headers = jsonData.headers;
  const data = jsonData.data;
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const {
    data: result_data,
    isLoading,
    isError,
  } = useQuery("result_record", () =>
    apiMiddleware("admin/students/students-status")
  );

  console.log(result_data);
  return (
    <ResultHeader name={"Student Result"} headers={headers} data={result_data}>
      <Search
        input1={"Belt No"}
        input2={"Student Name"}
        input3={"Course Name"}
        handleSearch={handleSearch}
      />
      <ShowEntriesDropdown entries={entries} setEntries={setEntries} />
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
      ): isError ? (
        <ErrorComponent/>
      ): result_data.length > 0 ? (
        <ResultTable headers={headers} data={result_data} entries={entries} search={search}/>
      ): (
        <NotDataFoundMessage/>
       )}
      </>
      
    </ResultHeader>
  );
}
