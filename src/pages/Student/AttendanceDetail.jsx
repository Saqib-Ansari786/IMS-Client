import { Stack } from "@chakra-ui/react";
import StudentDashboardDetail from '../../components/pages/Student/StudentDashboardDetail'
import StudentAttendaceTable from "../../components/pages/Student/StudentAttendanceTable";

const tableHeader = ["TOPIC", "STATUS", "CLASS STARTING TIME", "CLASS ENDING TIME"];
const tableData = [
  ["Class 1", "Present", "10/01/2023 1:00 AM", "10/01/2023 1:00 AM"],
  ["CLass 2", "Present", "10/01/2023 1:00 AM","10/01/2023 1:00 AM"],
  ["CLass 3", "Absent", "10/01/2023 1:00 AM","10/01/2023 1:00 AM"],
  ["CLass 4", "Absent", "10/01/2023 1:00 AM","10/01/2023 1:00 AM"],
  ["CLass 5", "Present", "10/01/2023 1:00 AM","10/01/2023 1:00 AM"],
]

export const AttendanceDetail = () => {
  return (
  <Stack minW="100%">
    <StudentDashboardDetail text={"Class Attendance Details"}/>
    <StudentAttendaceTable headers={tableHeader} data={tableData}/>
  </Stack>
  )
}
