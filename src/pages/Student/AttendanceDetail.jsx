import { Stack } from "@chakra-ui/react";
import StudentDashboardDetail from "../../components/pages/Student/StudentDashboardDetail";
import StudentAttendaceTable from "../../components/pages/Student/StudentAttendanceTable";

const jsonData = {
  headers: ["TOPIC", "STATUS", "CLASS STARTING TIME", "CLASS ENDING TIME"],
  data: [
    {
      topic: "Class 1",
      status: "Present",
      classstartingtime: "10/01/2023 1:00 AM",
      classendingtime: "10/01/2023 1:00 AM",
    },
    {
      topic: "Class 2",
      status: "Present",
      classstartingtime: "10/01/2023 1:00 AM",
      classendingtime: "10/01/2023 1:00 AM",
    },
    {
      topic: "Class 3",
      status: "Present",
      classstartingtime: "10/01/2023 1:00 AM",
      classendingtime: "10/01/2023 1:00 AM",
    },
    {
      topic: "Class 4",
      status: "Absent",
      classstartingtime: "10/01/2023 1:00 AM",
      classendingtime: "10/01/2023 1:00 AM",
    },
    {
      topic: "Class 5",
      status: "Absent",
      classstartingtime: "10/01/2023 1:00 AM",
      classendingtime: "10/01/2023 1:00 AM",
    },
  ],
};

export const AttendanceDetail = () => {
  const headers = jsonData.headers;
  const data = jsonData.data;
  return (
    <Stack minW="100%">
      <StudentDashboardDetail text={"Class Attendance Details"} />
      <StudentAttendaceTable headers={headers} data={data} />
    </Stack>
  );
};
