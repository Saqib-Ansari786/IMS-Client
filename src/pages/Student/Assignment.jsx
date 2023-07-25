import { Stack } from "@chakra-ui/react";
import StudentDashboardDetail from "../../components/pages/Student/StudentDashboardDetail";
import StudentAssignmentTable from "../../components/pages/Student/StudentAssignmentTable";

const tableHeader = ["TITLE", "START DATE", "END DATE", "DOWNLOAD", "UPLOAD", "STATUS"];
const tableData = [
  ["Assignment 01", "1/01/2023 1:00 PM", "10/01/2023 1:00 AM", "file01.pdf", null, null],
  ["Assignment 01", "1/01/2023 1:00 PM", "10/01/2023 1:00 AM", "file01.pdf", null, null],
]

export default function Assignment() {
  return (
    <Stack minW="100%">
      <StudentDashboardDetail text={"Class Assignments"} />
      <StudentAssignmentTable header={tableHeader} data={tableData}/>
    </Stack>
  );
}
