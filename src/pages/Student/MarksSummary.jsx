import { Stack } from "@chakra-ui/react";
import StudentDashboardDetail from '../../components/pages/Student/StudentDashboardDetail'
import StudentMarksSummaryTable from "../../components/pages/Student/StudentMarksSummaryTable";
const tableHeader = ["TITLE", "TOTAL MARKS", "OBTAINED MARKS", "DATE TIME", "TEACHER COMMENT"];
const QuiztableData = [
  ["Quiz 1", "10", "9", "10/01/2023 Wednesday", "Good Job"],
  ["Quiz 2", "10", "10", "10/01/2023 Monday", "Excellent Job"],
  ["Quiz 3", "10", "5", "10/01/2023 Friday", "Need Improvement"],
]
const AssignmenttableData = [
  ["Assignment 1", "10", "9", "10/01/2023 Wednesday", "Good Job"],
  ["Assignment 2", "10", "10", "10/01/2023 Monday", "Excellent Job"],
  ["Assignment 3", "10", "5", "10/01/2023 Friday", "Need Improvement"],
]
const FinaltableData = [
  ["Finals", "100", "83", "10/01/2023 Wednesday", "Good Job"],
]
export const MarksSummary = () => {
  return (
  <Stack gap={0}>
    <StudentDashboardDetail text={"Marks Summary"} />
    <StudentMarksSummaryTable text={"Quizes"} headers={tableHeader} data={QuiztableData} boxStyle={{marginTop: "10"}} />
    <StudentMarksSummaryTable text={"Assignments"} headers={tableHeader} data={AssignmenttableData} />
    <StudentMarksSummaryTable text={"Finals"} headers={tableHeader} data={FinaltableData} />
  </Stack>
  )
}
