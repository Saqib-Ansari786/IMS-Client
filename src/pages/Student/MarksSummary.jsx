import { Spinner, Stack } from "@chakra-ui/react";
import StudentDashboardDetail from "../../components/pages/Student/StudentDashboardDetail";
import StudentMarksSummaryTable from "../../components/pages/Student/StudentMarksSummaryTable";
import { useQuery } from "react-query";
import apiMiddleware from "../../components/common/Server/apiMiddleware";
import { useSelector } from "react-redux";
import { selectStudent } from "../../store/redux-slices/student_slice";
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
  const student = useSelector(selectStudent);
  const {
    data: studentMarksSummary,
    error,
    isLoading,
  } = useQuery("studentMarksSummary", () =>
    apiMiddleware(`marks/marks-summary/${student?._id}/${student?.courseId}`)
  );
  return (
    <Stack gap={0}>
      <StudentDashboardDetail text={"Marks Summary"} />
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <div>Error fetching data</div>
      ) : (
        Object?.keys(studentMarksSummary || {})?.map((key, index) => (
          <StudentMarksSummaryTable
            key={index}
            text={key}
            data={studentMarksSummary[key]}
            boxStyle={{
              bg: "#2FB5EE",
              boxShadow: "0px 20px 27px rgba(0, 0, 0, 0.05)",
              borderTopRadius: 8,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: "3xl",
              fontWeight: "bold",
            }}
          />
        ))
      )}
    </Stack>
  );
};
