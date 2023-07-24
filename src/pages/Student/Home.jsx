import {Stack} from "@chakra-ui/react";
import StudentSidebarwithHeader from "../../components/common/Sidebar/StudentSidebarwithHeader";
import StudentDashboardDetail from "../../components/common/Sidebar/StudentDashboardDetail";
import StudentDashboardTable from "../../components/common/Sidebar/StudentDashboardTable";
const headers = ["COURSE ID", "COURSE NAME", "TEACHER NAME", "CLASS BATCH", "ATTENDANCE"];
const tableData = [
  ["PSI-202", "Computer Skills", "Rana Tahir", "Batch-09", "100%"],
  ["PSI-203", "IT Information", "Murtaza", "Batch-09", "60%"],
];
export default function Home() {
  return (
    <Stack minW="100%">
      <StudentSidebarwithHeader>
        <StudentDashboardDetail text={"Registered Course List"}/>
        <StudentDashboardTable headers={headers} data={tableData}/>
            </StudentSidebarwithHeader>
    </Stack>
  );
}
