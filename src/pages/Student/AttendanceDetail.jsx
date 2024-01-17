import { Spinner, Stack, Text } from "@chakra-ui/react";
import StudentDashboardDetail from "../../components/pages/Student/StudentDashboardDetail";
import StudentAttendaceTable from "../../components/pages/Student/StudentAttendanceTable";
import { useQuery } from "react-query";
import apiMiddleware from "../../components/common/Server/apiMiddleware";
import { selectStudent } from "../../store/redux-slices/student_slice";
import { useSelector } from "react-redux";

const jsonData = {
  headers: ["TOPIC", "STATUS", "CLASS STARTING TIME"],
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
  const student = useSelector(selectStudent);
  const {
    data: studentAttendance,
    isLoading,
    isError,
  } = useQuery("studentAttendance", () =>
    apiMiddleware(
      `attendances/attendance/${student._id}/${student.teacherId}/${student.courseId}`
    )
  );
  const headers = jsonData.headers;
  return (
    <Stack minW="100%">
      <StudentDashboardDetail text={"Class Attendance Details"} />
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <Text>No Data Found</Text>
      ) : (
        <StudentAttendaceTable header={headers} data={studentAttendance} />
      )}
    </Stack>
  );
};
