import {
  Avatar,
  Box,
  Flex,
  Heading,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import StackedColumnChart from "../../components/pages/Teacher/StackedColumnChart";
import LineChart from "../../components/pages/Teacher/LineChart";
import BoxwithCircularProgressBar from "../../components/pages/Teacher/CircularProgressBar";
import { FaFile } from "react-icons/fa"; // Import the desired document icon

const Layout = ({ children, heading }) => {
  return (
    <Box flex={1} p={4} backgroundColor="white.base" borderRadius={10}>
      <Heading mb={2} size="md" textAlign={"left"}>
        {heading}
      </Heading>
      {children}
    </Box>
  );
};

const ActivityBox = ({ date, activity, place, time, status }) => {
  return (
    <Flex direction="row" alignItems="center">
      <Box
        backgroundColor="primary.base"
        color="white"
        p={2}
        borderRadius={5}
        mr={3}
      >
        {date}
      </Box>
      <Flex direction="column">
        <Text color={"primary.base"} fontWeight={"bold"}>
          {activity}
        </Text>
        <Text color={"gray.600"}>{place}</Text>
      </Flex>
      <Spacer />
      <Flex direction="column">
        <Text>{time}</Text>
        <Text color={status === "Upcoming" ? "secondary.base" : "primary.base"}>
          {status}
        </Text>
      </Flex>
    </Flex>
  );
};

const MessageBox = ({ sender, message, time }) => {
  return (
    <Flex direction="row" alignItems="center">
      <Avatar size="sm" name={sender} src="url_to_avatar_image" mr={3} />
      <Flex direction="column" textAlign={"left"}>
        <Text fontWeight="bold">{sender}</Text>
        <Text>{message}</Text>
      </Flex>
      <Spacer />
      <Text color="gray.500">{time}</Text>
    </Flex>
  );
};
const DocumentBox = ({ name, time }) => {
  return (
    <Flex direction="row" alignItems="center">
      <Box as={FaFile} fontSize="xl" color="primary.base" mr={3} />
      <Flex direction="column" textAlign={"left"}>
        <Text fontWeight="bold">{name}</Text>
        <Text color="gray.500">{time}</Text>
      </Flex>
    </Flex>
  );
};

const TeacherDashboard = () => {
  return (
    <Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        flexWrap={"wrap"}
        gap={{ base: 5, md: 10 }}
      >
        {/* First Column */}
        <Layout heading={"Student Statistics"}>
          <StackedColumnChart />
          {/* Add navigation arrows here */}
        </Layout>
        {/* Second Column */}
        <Layout heading="Student Attendence">
          <LineChart />
        </Layout>
        {/* Third Column */}
        <Layout heading="Progress">
          <BoxwithCircularProgressBar percentage={75} strength={75} />
          {/* Add more class boxes here */}
          <BoxwithCircularProgressBar percentage={75} strength={75} />
          <BoxwithCircularProgressBar percentage={75} strength={75} />
        </Layout>
        {/* Fourth Column */}
        <Layout heading="Upcomming Activities">
          <ActivityBox
            date="31"
            activity="Activity Name"
            place="Activity Place"
            time="10:00 AM"
            status="Upcoming"
          />
          <ActivityBox
            date="25"
            activity="Activity Name"
            place="Activity Place"
            time="10:00 AM"
            status="Due soon"
          />
          <ActivityBox
            date="25"
            activity="Activity Name"
            place="Activity Place"
            time="10:00 AM"
            status="Due soon"
          />
        </Layout>
        {/* Fifth Column */}
        <Layout heading="Messages">
          <MessageBox
            sender="John Doe"
            message="Hi, how are you?"
            time="10:30 AM"
          />
          <MessageBox
            sender="Jane Smith"
            message="Can we discuss the project?"
            time="11:15 AM"
          />
        </Layout>
        {/* Sixth Column */}
        <Layout heading="Documents">
          <DocumentBox name="Report.pdf" time="Aug 25, 2:30 PM" />
          <DocumentBox name="Presentation.pptx" time="Aug 26, 10:00 AM" />
          {/* Add more DocumentBoxes here */}
        </Layout>
      </Flex>
    </Box>
  );
};

export default TeacherDashboard;
