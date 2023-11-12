import { Stack } from "@chakra-ui/react";
import StudentDashboardDetail from "../../components/pages/Student/StudentDashboardDetail";
import StudentAssignmentTable from "../../components/pages/Student/StudentAssignmentTable";
import StudentAssignmentCard from "../../components/pages/Student/StudentAssignmentTable";

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
  const headers = jsonData.headers;
  const data = jsonData.data;
  return (
    <Stack minW="100%">
      <StudentDashboardDetail text={"Class Assignments"} />
      <StudentAssignmentTable header={headers} data={data} />
    </Stack>
  );
}
