import { Stack, Flex, Heading } from "@chakra-ui/react";
import StudentDashboardCard from "../../components/pages/Student/StudentDashboardCard";
import Timetable from "../../components/pages/Student/Timetable";
import AnnouncementCard from "../../components/pages/Dashboard/AnnouncementCard";

const courseData = {
  courseCode: "CSC 102",
  teacherName: "John Teacher",
  startDate: "10-10-2023",
  endDate: "20-10-2023",
  attendancePercentage: 73
};

const announcements = [
  { id: 1, title: "Announcement 1", content: "Content 1" },
  { id: 2, title: "Announcement 2", content: "Content 2" },
  { id: 3, title: "Announcement 3", content: "Content 3" },
];

export default function Home() {
  return (
    <Stack minW="100%">
     <Heading mb={"5"} as="h3" size="md" color="#120E87">
        Welcome Murtaza!
      </Heading>
      <Timetable />
      <Flex direction={{ base: "column", md: "row" }} gap={3}>
        <Flex direction="column" flex={{ base: "1", md: "0.7" }} minW="0">
           <StudentDashboardCard {...courseData} />
           
        </Flex>
        <Flex direction="column" flex={{ base: "1", md: "0.3" }} minW="0">
          <AnnouncementCard data={announcements} />
        </Flex>
      </Flex>
      
    </Stack>
  );
}
