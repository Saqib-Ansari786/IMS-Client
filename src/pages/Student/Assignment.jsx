import { Spinner, Stack, Text } from "@chakra-ui/react";
import StudentDashboardDetail from "../../components/pages/Student/StudentDashboardDetail";
import StudentAssignmentTable from "../../components/pages/Student/StudentAssignmentTable";
import StudentAssignmentCard from "../../components/pages/Student/StudentAssignmentTable";
import { useQuery } from "react-query";
import apiMiddleware from "../../components/common/Server/apiMiddleware";
import { useSelector } from "react-redux";
import { selectStudent } from "../../store/redux-slices/student_slice";

const jsonData = {
  headers: ["TITLE", "START DATE", "END DATE", "DOWNLOAD", "UPLOAD", "STATUS"],
  data: [
    {
      title: "Assignment 01",
      startDate: "1/01/2023 1:00 PM",
      endDate: "10/01/2023 1:00 AM",
      downloadLink: "file01.pdf",
      uploadStatus: null,
      status: null,
    },
    {
      title: "Assignment 02",
      startDate: "2/01/2023 1:00 PM",
      endDate: "15/01/2023 1:00 AM",
      downloadLink: "file02.pdf",
      uploadStatus: null,
      status: null,
    },
  ],
};

export default function Assignment() {
  const student = useSelector(selectStudent);
  const {
    data: studentAssignments,
    isLoading,
    isError,
  } = useQuery("studentAssignments", () =>
    apiMiddleware(
      `assignments/getassignments/${student.courseId}/${student._id}`
    )
  );

  const headers = jsonData.headers;
  return (
    <Stack minW="100%">
      <StudentDashboardDetail text={"Class Assignments"} />
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <Text>There was an error fetching the data</Text>
      ) : studentAssignments.length === 0 ? (
        <Text>No Assignments</Text>
      ) : (
        <StudentAssignmentTable
          headers={headers}
          data={studentAssignments}
          type="student"
        />
      )}
    </Stack>
  );
}
