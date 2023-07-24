import { Stack } from "@chakra-ui/react";
import StudentDashboardDetail from "../../components/pages/Student/StudentDashboardDetail";
import StudentDashboardTable from "../../components/pages/Student/StudentDashboardTable";

export default function Assignment() {
  return (
    <Stack minW="100%">
      <StudentDashboardDetail text={"Class Assignments"} />
      <StudentDashboardTable />
    </Stack>
  );
}
