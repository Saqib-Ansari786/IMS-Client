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
    QuiztableData: [
      {
        title: "Quiz 1",
        totalMarks: "10",
        obtainedMarks: "9",
        dateTime: "10/01/2023 Wednesday",
        teacherComment: "Good Job",
      },
      {
        title: "Quiz 2",
        totalMarks: "10",
        obtainedMarks: "10",
        dateTime: "10/01/2023 Monday",
        teacherComment: "Excellent Job",
      },
      {
        title: "Quiz 1",
        totalMarks: "10",
        obtainedMarks: "5",
        dateTime: "10/01/2023 Friday",
        teacherComment: "Need Improvement",
      },
    ],
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
        title: "Finals",
        totalMarks: "100",
        obtainedMarks: "83",
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
        text={"Quizes"}
        headers={headers}
        data={data.QuiztableData}
        boxStyle={{ marginTop: "10" }}
      />
      <StudentMarksSummaryTable
        text={"Assignments"}
        headers={headers}
        data={data.AssignmenttableData}
      />
      <StudentMarksSummaryTable text={"Finals"} headers={headers} data={data.FinaltableData} />
    </Stack>
  );
};
