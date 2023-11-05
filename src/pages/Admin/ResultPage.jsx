import React, { useState } from "react";
import StudentSearch from "../../components/pages/Admin/StudentSearch";
import ShowEntriesDropdown from "../../components/pages/Admin/ShowEntriesDropdown";
import ResultTable from "../../components/pages/Admin/ResultTable";
import ResultHeader from "../../components/pages/Admin/ResultHeader";
import apiMiddleware from "../../components/common/Server/apiMiddleware";
import { useQuery } from "react-query";

const jsonData = {
  headers: [
    "BELT NO",
    "STUDENT NAME",
    "COURSE NAME",
    "DURATION STATUS",
    "MARKS",
    "STATUS",
  ],
  data: [
    {
      beltno: 1,
      name: "Student A",
      durationComplete: false,
      marks: null,
      course: "Maths",
    },
    {
      beltno: 2,
      name: "Student B",
      durationComplete: true,
      marks: 85,
      course: "Maths",
    },
    {
      beltno: 3,
      name: "Student C",
      durationComplete: false,
      marks: null,
      course: "Maths",
    },
    {
      beltno: 4,
      name: "Student D",
      durationComplete: true,
      marks: 72,
      course: "Maths",
    },
    {
      beltno: 5,
      name: "Student E",
      durationComplete: true,
      marks: 45,
      course: "Maths",
    },
    {
      beltno: 5,
      name: "Student E",
      durationComplete: true,
      marks: 45,
      course: "Maths",
    },
    {
      beltno: 5,
      name: "Student E",
      durationComplete: true,
      marks: 45,
      course: "Maths",
    },
    {
      beltno: 5,
      name: "Student E",
      durationComplete: true,
      marks: 45,
      course: "Maths",
    },
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
  } = useQuery("result_record", () => apiMiddleware("admin/result/result"));
  return (
    <ResultHeader headers={headers} data={data}>
      <StudentSearch />
      <ShowEntriesDropdown entries={entries} setEntries={setEntries} />
      <ResultTable headers={headers} data={data} entries={entries} />
    </ResultHeader>
  );
}
