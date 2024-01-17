import { Spinner, Stack, Text } from "@chakra-ui/react";
import StudentDashboardDetail from "../../components/pages/Student/StudentDashboardDetail";
import CourseResourcesTable from "../../components/pages/Student/CourseResourcesTable";
import { useSelector } from "react-redux";
import { selectStudent } from "../../store/redux-slices/student_slice";
import { useQuery } from "react-query";
import apiMiddleware from "../../components/common/Server/apiMiddleware";

const jsonData = {
  headers: ["TITLE", "DESCRIPTION", "DOWNLOAD"],
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
    },
  ],
};

export default function CourseResources() {
  const student = useSelector(selectStudent);
  const {
    data: studentCourseMaterials,
    isLoading,
    isError,
  } = useQuery("studentCourseMaterials", () =>
    apiMiddleware(
      `courses/course-materials/${student.courseId}/${student.teacherId}`
    )
  );
  console.log(student);
  console.log(studentCourseMaterials);
  const headers = jsonData.headers;
  return (
    <Stack minW="100%">
      <StudentDashboardDetail text={"Class Resources"} />
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <Text>There was an error fetching the data</Text>
      ) : studentCourseMaterials.length === 0 ? (
        <Text>No Resources</Text>
      ) : (
        <CourseResourcesTable
          headers={headers}
          data={studentCourseMaterials}
          type="student"
        />
      )}
    </Stack>
  );
}
