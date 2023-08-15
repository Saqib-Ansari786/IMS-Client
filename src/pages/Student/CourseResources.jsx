import { Stack } from "@chakra-ui/react";
import StudentDashboardDetail from "../../components/pages/Student/StudentDashboardDetail";
import CourseResourcesTable from "../../components/pages/Student/CourseResourcesTable";


const jsonData = {
  headers: ["TITLE", "FILE TITLE", "UPLOAD TIME", "FILE SIZE", "FILE TYPE", "DOWNLOAD"],
  data: [
    {
      title: "Course Hand Book",
      fileTitle: "PSI_202_book",
      uploadTime: "10/01/2023 1:00 AM",
      fileSize: "3KB",
      fileType: "pdf",
      download: null,
    },
    {
      title: "Course Notes",
      fileTitle: "PSI_203_notes",
      uploadTime: "10/01/2023 1:00 AM",
      fileSize: "3KB",
      fileType: "powerpoint",
      download: null,
    }
  ],
};

export default function CourseResources() {
  const headers = jsonData.headers;
  const data = jsonData.data;
  return (
    <Stack minW="100%">
      <StudentDashboardDetail text={"Class Resources"} />
      <CourseResourcesTable headers={headers} data={data} />
    </Stack>
  );
}
