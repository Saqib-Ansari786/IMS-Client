import { Flex, SimpleGrid, Stack, Text, Heading } from "@chakra-ui/react";
import CustomCard from "../../components/pages/Dashboard/CustomCard";
import AnnouncementCard from "../../components/pages/Dashboard/AnnouncementCard";
import DashboardWidget from "../../components/pages/Admin/DashboardWidget";
import TopStudentsCard from "../../components/pages/Admin/TopStudentCard";
import StudentYearChart from "../../components/pages/Admin/StudentYearChart";

const dashboardData = [
  {
    title: "Total Students",
    value: "50055",
    iconSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s",
    altText: "Students Icon",
  },
  {
    title: "Total Teachers",
    value: "123",
    iconSrc: "assets/img/icons/teachers-icon.svg",
    altText: "Teachers Icon",
  },
  {
    title: "Courses",
    value: "45",
    iconSrc: "assets/img/icons/courses-icon.svg",
    altText: "Courses Icon",
  },
  {
    title: "Total Books",
    value: "230",
    iconSrc: "assets/img/icons/books-icon.svg",
    altText: "Books Icon",
  },
];

const topStudentsData = [
  
  {
    id: 1,
    name: "John Smith",
    course: "Web Developmemt",
    marks: 1185,
    percentage: "98%",
    year: 2015,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s",
  },
  {
    id: 2,
    name: "John Smith",
    course: "Web Developmemt",
    marks: 1185,
    percentage: "98%",
    year: 2016,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s",
  },
  {
    id: 3,
    name: "John Smith",
    course: "Web Developmemt",
    marks: 1185,
    percentage: "98%",
    year: 2017,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s",
  },
  {
    id: 4,
    name: "John Smith",
    course: "Web Developmemt",
    marks: 1185,
    percentage: "98%",
    year: 2018,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s",
  },
  
];
const chartData = {
  years: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
  maleStudents: [20, 25, 30, 35, 40, 45, 50], // Replace with your male student data
  femaleStudents: [30, 35, 45, 55, 70, 80, 90], // Replace with your female student data
};

export default function Dashboard() {
  return (
    <>
    <Heading mb={"5"} as="h3" size="md" color="#120E87" >
       Welcome Admin!
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4} mb={2}>
        {dashboardData.map((item, index) => (
          <DashboardWidget
            key={index}
            title={item.title}
            value={item.value}
            iconSrc={item.iconSrc}
            altText={item.altText}
          />
        ))}
      </SimpleGrid>
      <StudentYearChart data={chartData} />
      <Flex direction={{ base: "column", md: "row" }} gap={3}>
        <Flex direction="column" flex="0.7" minW="0">
        <TopStudentsCard data={topStudentsData} />
        </Flex>
        <Flex direction="column" flex="0.3" minW="0">
          <AnnouncementCard />
        </Flex>
      </Flex>
    </>
  );
}
