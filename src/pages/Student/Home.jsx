import { Stack, Flex, Heading } from "@chakra-ui/react";
import StudentDashboardCard from "../../components/pages/Student/StudentDashboardCard";
import Timetable from "../../components/pages/Student/Timetable";
import AnnouncementCard from "../../components/pages/Dashboard/AnnouncementCard";
import StudentDashboardDetail from "../../components/pages/Student/StudentDashboardDetail";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/redux-slices/user_slice";
import { useEffect } from "react";
import {
  selectStudent,
  setStudent,
} from "../../store/redux-slices/student_slice";
import apiMiddleware from "../../components/common/Server/apiMiddleware";
import {
  fetchCourses,
  selectCourses,
  selectIsError,
  selectIsLoading,
} from "../../store/redux-slices/courses_slice";
import { fetchTeachers } from "../../store/redux-slices/teachers_slice";

const courseData = {
  courseCode: "CSC 102",
  teacherName: "John Teacher",
  startDate: "10-10-2023",
  endDate: "20-10-2023",
  attendancePercentage: 73,
};

const announcements = [
  { id: 1, title: "Announcement 1", content: "Content 1" },
  { id: 2, title: "Announcement 2", content: "Content 2" },
  { id: 3, title: "Announcement 3", content: "Content 3" },
];

export default function Home() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const student = useSelector(selectStudent);
  const courses = useSelector(selectCourses);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    const getStudent = async () => {
      const student = await apiMiddleware(`/auth/getstudent/${user.id}`);
      console.log("Student", student);
      dispatch(setStudent(student.user));
    };

    getStudent();

    dispatch(fetchCourses());
    dispatch(fetchTeachers());
  }, [dispatch]);

  return (
    <Stack minW="100%">
      <StudentDashboardDetail
        text={`Welcome, ${student?.firstname + " " + student?.lastname}`}
      />
      <Timetable />
      <Flex direction={{ base: "column", md: "row" }} gap={3}>
        <Flex direction="column" flex={{ base: "1", md: "0.7" }} minW="0">
          <StudentDashboardCard {...student} />
        </Flex>
        <Flex direction="column" flex={{ base: "1", md: "0.3" }} minW="0">
          <AnnouncementCard data={announcements} />
        </Flex>
      </Flex>
    </Stack>
  );
}
