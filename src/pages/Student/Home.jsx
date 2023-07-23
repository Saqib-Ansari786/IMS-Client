import {Stack} from "@chakra-ui/react";
import StudentSidebarwithHeader from "../../components/common/Sidebar/StudentSidebarwithHeader";
import StudentDashboardDetail from "../../components/common/Sidebar/StudentDashboardDetail";
import StudentDashboardTable from "../../components/common/Sidebar/StudentDashboardTable";


export default function StudentDashboard() {
  return (
    <Stack minW="100%">
      <StudentSidebarwithHeader>
        <StudentDashboardDetail text={"Registered Course List"}/>
        <StudentDashboardTable />
            </StudentSidebarwithHeader>
    </Stack>
  );
}
