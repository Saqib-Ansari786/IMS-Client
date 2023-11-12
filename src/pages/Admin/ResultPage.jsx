import React, { useState } from "react";
import ShowEntriesDropdown from "../../components/pages/Admin/ShowEntriesDropdown";
import ResultTable from "../../components/pages/Admin/ResultTable";
import ResultHeader from "../../components/pages/Admin/ResultHeader";
import apiMiddleware from "../../components/common/Server/apiMiddleware";
import { useQuery } from "react-query";
import Search from "../../components/pages/Admin/Search";

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
      />
      <ShowEntriesDropdown entries={entries} setEntries={setEntries} />
      <ResultTable headers={headers} data={result_data} entries={entries} />
    </ResultHeader>
  );
}
