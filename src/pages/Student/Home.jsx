import { Stack } from "@chakra-ui/react";
import StudentDashboardDetail from "../../components/pages/Student/StudentDashboardDetail";
import StudentDashboardTable from "../../components/pages/Student/StudentDashboardTable";

const jsonData = {
  headers: [
    "COURSE ID",
    "COURSE NAME",
    "TEACHER NAME",
    "CLASS BATCH",
    "ATTENDANCE",
  ],
  data: [
    {
      courseid: "PSI-202",
      coursename: "Computer Skills",
      teachername: "Rana Tahir",
      classbatch: "Batch-09",
      attendance: "100%",
    },
    {
      courseid: "PSI-203",
      coursename: "Computer Skills",
      teachername: "Murtaza",
      classbatch: "Batch-09",
      attendance: "100%",
    },
  ],
};

export default function Home() {
  const headers = jsonData.headers;
  const data = jsonData.data;

  return (
    <Stack minW="100%">
      <StudentDashboardDetail text={"Registered Course List"} />
      <StudentDashboardTable headers={headers} data={data} />
    </Stack>
  );
}
