import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import StackedColumnChart from "../../components/pages/Teacher/StackedColumnChart";
import LineChart from "../../components/pages/Teacher/LineChart";
import BoxwithCircularProgressBar from "../../components/pages/Teacher/CircularProgressBar";
import ActivityBox from "../../components/pages/Teacher/ActivityBox";
import MessageBox from "../../components/pages/Teacher/MessageBox";
import DocumentBox from "../../components/pages/Teacher/DocumentBox";
import { selectUser } from "../../store/redux-slices/user_slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import apiMiddleware from "../../components/common/Server/apiMiddleware";
import {
  selectTeacher,
  setTeacher,
} from "../../store/redux-slices/teacher_slice";
import { fetchCourses } from "../../store/redux-slices/courses_slice";

const Layout = ({ children, heading }) => {
  return (
    <GridItem p={4} backgroundColor="white.base" borderRadius={10}>
      <Heading mb={2} size="md" textAlign="left">
        {heading}
      </Heading>
      {children}
    </GridItem>
  );
};

const TeacherDashboard = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const teacher = useSelector(selectTeacher);

  if (teacher) {
    console.log("Teacher", teacher);
  }

  useEffect(() => {
    const getTeacher = async () => {
      const teacher = await apiMiddleware(`/auth/getteacher/${user.id}`);
      console.log("Teacher", teacher);
      dispatch(setTeacher(teacher.user));
    };

    getTeacher();
    dispatch(fetchCourses());
  }, [dispatch]);
  return (
    <Box>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
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
          <BoxwithCircularProgressBar percentage={40} strength={75} />
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
      </Grid>
    </Box>
  );
};

export default TeacherDashboard;
