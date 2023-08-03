import { Stack } from "@chakra-ui/react";
import StudentDashboardDetail from "../../components/pages/Student/StudentDashboardDetail";
import CourseResourcesTable from "../../components/pages/Student/CourseResourcesTable";


const tableHeader = ["TITLE", "START DATE", "END DATE", "DOWNLOAD", "UPLOAD", "STATUS"];
const tableData = [
  ["Assignment 01", "1/01/2023 1:00 PM", "10/01/2023 1:00 AM", "file01.pdf", null, null],
  ["Assignment 01", "1/01/2023 1:00 PM", "10/01/2023 1:00 AM", "file01.pdf", null, null],
]

export default function CourseResources() {
  return (
    <Stack minW="100%">
      <StudentDashboardDetail text={"Class Assignments"} />
      <CourseResourcesTable headers={tableHeader} data={tableData} />
    </Stack>
  );
}
