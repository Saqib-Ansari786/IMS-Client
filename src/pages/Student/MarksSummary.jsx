import { Stack } from "@chakra-ui/react";
import StudentDashboardDetail from "../../components/pages/Student/StudentDashboardDetail";
import StudentMarksSummaryTable from "../../components/pages/Student/StudentMarksSummaryTable";
const jsonData = {
  headers: [
    "TITLE",
    "TOTAL MARKS",
    "OBTAINED MARKS",
    "DATE TIME",
    "TEACHER COMMENT",
  ],
  data: {
    AssignmenttableData: [
      {
        title: "Assignment 1",
        totalMarks: "10",
        obtainedMarks: "9",
        dateTime: "10/01/2023 Wednesday",
        teacherComment: "Good Job",
      },
      {
        title: "Assignment 2",
        totalMarks: "10",
        obtainedMarks: "10",
        dateTime: "10/01/2023 Monday",
        teacherComment: "Excellent Job",
      },
      {
        title: "Assignment 3",
        totalMarks: "10",
        obtainedMarks: "5",
        dateTime: "10/01/2023 Friday",
        teacherComment: "Need Improvement",
      },
    ],
    FinaltableData: [
      {
        title: "First Term",
        totalMarks: "25",
        obtainedMarks: "21",
        dateTime: "10/01/2023 wednesday",
        teacherComment: "Good Job",
      },
      {
        title: "Mid Term",
        totalMarks: "25",
        obtainedMarks: "23",
        dateTime: "10/01/2023 wednesday",
        teacherComment: "Good Job",
      },
      {
        title: "Final Term",
        totalMarks: "100",
        obtainedMarks: "82",
        dateTime: "10/01/2023 wednesday",
        teacherComment: "Good Job",
      },
    ],
  },
};

export const MarksSummary = () => {
  const headers = jsonData.headers;
  const data = jsonData.data;
  return (
    <Stack gap={0}>
      <StudentDashboardDetail text={"Marks Summary"} />
      <StudentMarksSummaryTable
        text={"Assignments"}
        headers={headers}
        data={data.AssignmenttableData}
      />
      <StudentMarksSummaryTable text={"Finals"} headers={headers} data={data.FinaltableData} />
    </Stack>
  );
};
