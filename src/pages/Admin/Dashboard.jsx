import { Flex, SimpleGrid, Heading } from "@chakra-ui/react";
import AnnouncementCard from "../../components/pages/Dashboard/AnnouncementCard";
import DashboardWidget from "../../components/pages/Admin/DashboardWidget";
import TopStudentsTable from "../../components/pages/Admin/TopStudentCard";
import StudentYearChart from "../../components/pages/Admin/StudentYearChart";
import EventCalendar from "../../components/pages/Admin/EventCalendar";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTeachers,
  selectTeachers,
  setTeachers,
} from "../../store/redux-slices/teachers_slice";
import {
  fetchStudents,
  selectStudents,
  setStudents,
} from "../../store/redux-slices/students_slice";
import {
  fetchCourses,
  selectCourses,
  setCourses,
} from "../../store/redux-slices/courses_slice";
import { useEffect, useState } from "react";
import apiMiddleware from "../../components/common/Server/apiMiddleware";

const topStudentsData = [
  {
    id: 1,
    name: "John Smith",
    course: "Web Developmemt",
    marks: 1185,
    percentage: "98%",
    year: 2015,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s",
  },
  {
    id: 2,
    name: "John Smith",
    course: "Web Developmemt",
    marks: 1185,
    percentage: "98%",
    year: 2016,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s",
  },
  {
    id: 3,
    name: "John Smith",
    course: "Web Developmemt",
    marks: 1185,
    percentage: "98%",
    year: 2017,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s",
  },
  {
    id: 4,
    name: "John Smith",
    course: "Web Developmemt",
    marks: 1185,
    percentage: "98%",
    year: 2018,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s",
  },
];
const chartData = {
  years: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
  maleStudents: [20, 25, 30, 35, 40, 45, 50], // Replace with your male student data
  femaleStudents: [30, 35, 45, 55, 70, 80, 90], // Replace with your female student data
};

const announcements = [
  { id: 1, title: "Announcement 1", content: "Content 1" },
  { id: 2, title: "Announcement 2", content: "Content 2" },
  { id: 3, title: "Announcement 3", content: "Content 3" },
];

export default function Dashboard() {
  const teachers = useSelector(selectTeachers);
  const students = useSelector(selectStudents);
  const courses = useSelector(selectCourses);
  const [books, setBooks] = useState([]);
  const dispatch = useDispatch();

  console.log(courses, "courses");

  useEffect(() => {
    const fetchBooks = async () => {
      const books = await apiMiddleware("admin/libraries/library-items");
      setBooks(books);
    };
    dispatch(fetchTeachers());
    dispatch(fetchStudents());
    dispatch(fetchCourses());

    fetchBooks();
  }, [dispatch]);

  const [dashboardData, setDashboardData] = useState([
    {
      title: "Total Students",
      value: ``,
      iconSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s",
      altText: "Students Icon",
    },
    {
      title: "Total Teachers",
      value: ``,
      iconSrc: "assets/img/icons/teachers-icon.svg",
      altText: "Teachers Icon",
    },
    {
      title: "Courses",
      value: ``,
      iconSrc: "assets/img/icons/courses-icon.svg",
      altText: "Courses Icon",
    },
    {
      title: "Total Books",
      value: "230",
      iconSrc: "assets/img/icons/books-icon.svg",
      altText: "Books Icon",
    },
  ]);

  return (
    <>
      <Heading mb={"5"} as="h3" size="md" color="#120E87">
        Welcome Admin!
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4} mb={2}>
        <DashboardWidget
          title={"Total Students"}
          value={`${students?.length}`}
          iconSrc={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s"
          }
          altText={"Students Icon"}
        />
        <DashboardWidget
          title={"Total Teachers"}
          value={`${teachers?.length}`}
          iconSrc={"assets/img/icons/teachers-icon.svg"}
          altText={"Teachers Icon"}
        />
        <DashboardWidget
          title={"Total Courses"}
          value={`${courses?.length}`}
          iconSrc={"assets/img/icons/courses-icon.svg"}
          altText={"Courses Icon"}
        />
        <DashboardWidget
          title={"Total Books"}
          value={`${books?.length}`}
          iconSrc={"assets/img/icons/books-icon.svg"}
          altText={"Books Icon"}
        />
      </SimpleGrid>
      <StudentYearChart data={chartData} />
      <Flex direction={{ base: "column", md: "row" }} gap={3}>
        <Flex direction="column" flex={{ base: "1", md: "0.7" }} minW="0">
          <EventCalendar />
          <TopStudentsTable data={topStudentsData} />
        </Flex>
        <Flex direction="column" flex={{ base: "1", md: "0.3" }} minW="0">
          <AnnouncementCard data={announcements} />
        </Flex>
      </Flex>
    </>
  );
}
