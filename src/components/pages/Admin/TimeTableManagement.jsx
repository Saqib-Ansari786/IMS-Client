// import React, { useState } from 'react';
// import {
//   Box,
//   Flex,
//   Input,
//   Button,
//   VStack,
//   HStack,
//   Text,
//   Select,
// } from '@chakra-ui/react';

// export default function TimeTableManagement() {
//   const [courses, setCourses] = useState([]);
//   const [courseName, setCourseName] = useState('');
//   const [courseDuration, setCourseDuration] = useState('');
//   const [teachers, setTeachers] = useState([]);
//   const [teacherName, setTeacherName] = useState('');
//   const [selectedCourse, setSelectedCourse] = useState('');
//   const [classSchedules, setClassSchedules] = useState([]);

//   const addCourse = () => {
//     if (courseName && courseDuration) {
//       setCourses([...courses, { name: courseName, duration: courseDuration }]);
//       setCourseName('');
//       setCourseDuration('');
//     }
//   };

//   const addTeacher = () => {
//     if (teacherName) {
//       setTeachers([...teachers, { name: teacherName }]);
//       setTeacherName('');
//     }
//   };

//   const addClassSchedule = () => {
//     if (selectedCourse && teacherName) {
//       setClassSchedules([...classSchedules, { course: selectedCourse, teacher: teacherName }]);
//       // Add scheduling logic to check for conflicts with other classes
//       // Update teacher availability or handle conflicts as needed
//       setTeacherName('');
//       setSelectedCourse('');
//     }
//   };

//   return (
//     <Box p={4} backgroundColor={"white"}>
//       <Text fontSize="xl" mb={4}>
//         Course Management
//       </Text>
//       <HStack>
//         <Input
//           placeholder="Course Name"
//           value={courseName}
//           onChange={(e) => setCourseName(e.target.value)}
//         />
//         <Select
//           placeholder="Course Duration"
//           value={courseDuration}
//           onChange={(e) => setCourseDuration(e.target.value)}
//         >
//           <option value="7 days">7 days</option>
//           <option value="14 days">14 days</option>
//           <option value="1 month">1 month</option>
//           <option value="3 months">3 months</option>
//         </Select>
//         <Button colorScheme="blue" onClick={addCourse}>
//           Add Course
//         </Button>
//       </HStack>

//       <Text fontSize="xl" mt={6} mb={4}>
//         Teacher Management
//       </Text>
//       <HStack>
//         <Input
//           placeholder="Teacher Name"
//           value={teacherName}
//           onChange={(e) => setTeacherName(e.target.value)}
//         />
//         <Button colorScheme="blue" onClick={addTeacher}>
//           Add Teacher
//         </Button>
//       </HStack>

//       <Text fontSize="xl" mt={6} mb={4}>
//         Time Table Management
//       </Text>
//       <HStack>
//         <Select
//           placeholder="Select a Course"
//           value={selectedCourse}
//           onChange={(e) => setSelectedCourse(e.target.value)}
//         >
//           {courses.map((course) => (
//             <option key={course.name} value={course.name}>
//               {course.name}
//             </option>
//           ))}
//         </Select>
//         <Select
//           placeholder="Assign Teacher"
//           value={teacherName}
//           onChange={(e) => setTeacherName(e.target.value)}
//         >
//           {teachers.map((teacher) => (
//             <option key={teacher.name} value={teacher.name}>
//               {teacher.name}
//             </option>
//           ))}
//         </Select>
//         <Button colorScheme="blue" onClick={addClassSchedule}>
//           Add Class Schedule
//         </Button>
//       </HStack>

//       <Text fontSize="xl" mt={6} mb={4}>
//         Class Schedules
//       </Text>
//       {classSchedules.map((schedule, index) => (
//         <VStack
//           key={index}
//           p={4}
//           borderWidth="1px"
//           borderRadius="md"
//           boxShadow="md"
//           align="left"
//         >
//           <Text fontWeight="bold">Course: {schedule.course}</Text>
//           <Text>Teacher: {schedule.teacher}</Text>
//           {/* Display class schedules for the selected course */}
//         </VStack>
//       ))}
//     </Box>
//   );
// }

// ScheduleManagement.js
// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Button,
//   Center,
//   Container,
//   Divider,
//   FormControl,
//   FormLabel,
//   Input,
//   Select,
//   Textarea,
//   VStack,
// } from "@chakra-ui/react";

// function TimeTableManagement() {
//   // State for schedule data
//   const [schedules, setSchedules] = useState([]);
//   const [faculty, setFaculty] = useState("");
//   const [title, setTitle] = useState("");
//   const [scheduleType, setScheduleType] = useState(1);
//   const [description, setDescription] = useState("");
//   const [location, setLocation] = useState("");
//   const [isRepeating, setIsRepeating] = useState(false);
//   const [daysOfWeek, setDaysOfWeek] = useState([]);
//   const [monthFrom, setMonthFrom] = useState("");
//   const [monthTo, setMonthTo] = useState("");
//   const [scheduleDate, setScheduleDate] = useState("");
//   const [timeFrom, setTimeFrom] = useState("");
//   const [timeTo, setTimeTo] = useState("");

//   // Function to fetch schedules (simulate fetching data)
//   const fetchSchedules = () => {
//     // Simulate fetching schedules, replace this with actual API call
//     const dummySchedules = [
//       {
//         id: 1,
//         faculty: "John Doe",
//         title: "Class 1",
//         scheduleType: 1,
//         description: "Description for Class 1",
//         location: "Location 1",
//         isRepeating: true,
//         daysOfWeek: [1, 2], // Example: Monday and Tuesday
//         monthFrom: "2023-09",
//         monthTo: "2023-12",
//         timeFrom: "08:00",
//         timeTo: "10:00",
//       },
//       {
//         id: 2,
//         faculty: "Alice Smith",
//         title: "Meeting 1",
//         scheduleType: 2,
//         description: "Meeting Description",
//         location: "Meeting Room",
//         isRepeating: false,
//         scheduleDate: "2023-09-15",
//         timeFrom: "14:00",
//         timeTo: "15:30",
//       },
//     ];

//     setSchedules(dummySchedules);
//   };

//   // Initial data fetch on component mount
//   useEffect(() => {
//     fetchSchedules();
//   }, []);

//   const handleSaveSchedule = () => {
//     // Prepare new schedule data
//     const newSchedule = {
//       faculty,
//       title,
//       scheduleType,
//       description,
//       location,
//       isRepeating,
//       daysOfWeek: isRepeating ? daysOfWeek : [],
//       monthFrom: isRepeating ? monthFrom : "",
//       monthTo: isRepeating ? monthTo : "",
//       scheduleDate: !isRepeating ? scheduleDate : "",
//       timeFrom,
//       timeTo,
//     };

//     // Add the new schedule to the list (you can replace this with an API call)
//     setSchedules([...schedules, newSchedule]);

//     // Clear the form fields
//     clearForm();
//   };

//   const clearForm = () => {
//     setFaculty("");
//     setTitle("");
//     setScheduleType(1);
//     setDescription("");
//     setLocation("");
//     setIsRepeating(false);
//     setDaysOfWeek([]);
//     setMonthFrom("");
//     setMonthTo("");
//     setScheduleDate("");
//     setTimeFrom("");
//     setTimeTo("");
//   };

//   return (
//     <Container maxW="xl">
//       <Center>
//         <VStack spacing={4} align="stretch">
//           <FormControl id="faculty">
//             <FormLabel>Faculty</FormLabel>
//             <Input
//               value={faculty}
//               onChange={(e) => setFaculty(e.target.value)}
//               placeholder="Faculty"
//             />
//           </FormControl>
//           <FormControl id="title">
//             <FormLabel>Title</FormLabel>
//             <Input
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder="Schedule Title"
//             />
//           </FormControl>
//           <FormControl id="scheduleType">
//             <FormLabel>Schedule Type</FormLabel>
//             <Select
//               value={scheduleType}
//               onChange={(e) => setScheduleType(e.target.value)}
//             >
//               <option value={1}>Class</option>
//               <option value={2}>Meeting</option>
//               <option value={3}>Others</option>
//             </Select>
//           </FormControl>
//           <FormControl id="description">
//             <FormLabel>Description</FormLabel>
//             <Textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder="Schedule Description"
//             />
//           </FormControl>
//           <FormControl id="location">
//             <FormLabel>Location</FormLabel>
//             <Textarea
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               placeholder="Schedule Location"
//             />
//           </FormControl>
//           <FormControl id="isRepeating">
//             <FormLabel>Weekly Schedule</FormLabel>
//             <input
//               type="checkbox"
//               checked={isRepeating}
//               onChange={() => setIsRepeating(!isRepeating)}
//             />
//           </FormControl>
//           {isRepeating && (
//             <FormControl id="daysOfWeek">
//               <FormLabel>Days of Week</FormLabel>
//               <Select
//                 value={daysOfWeek}
//                 onChange={(e) => setDaysOfWeek(e.target.value)}
//                 placeholder="Select Days"
//                 isMulti
//               >
//                 <option value={1}>Monday</option>
//                 <option value={2}>Tuesday</option>
//                 <option value={3}>Wednesday</option>
//                 <option value={4}>Thursday</option>
//                 <option value={5}>Friday</option>
//                 <option value={6}>Saturday</option>
//                 <option value={7}>Sunday</option>
//               </Select>
//             </FormControl>
//           )}
//           {isRepeating ? (
//             <>
//               <FormControl id="monthFrom">
//                 <FormLabel>Month From</FormLabel>
//                 <Input
//                   type="month"
//                   value={monthFrom}
//                   onChange={(e) => setMonthFrom(e.target.value)}
//                 />
//               </FormControl>
//               <FormControl id="monthTo">
//                 <FormLabel>Month To</FormLabel>
//                 <Input
//                   type="month"
//                   value={monthTo}
//                   onChange={(e) => setMonthTo(e.target.value)}
//                 />
//               </FormControl>
//             </>
//           ) : (
//             <FormControl id="scheduleDate">
//               <FormLabel>Schedule Date</FormLabel>
//               <Input
//                 type="date"
//                 value={scheduleDate}
//                 onChange={(e) => setScheduleDate(e.target.value)}
//               />
//             </FormControl>
//           )}
//           <FormControl id="timeFrom">
//             <FormLabel>Time From</FormLabel>
//             <Input
//               type="time"
//               value={timeFrom}
//               onChange={(e) => setTimeFrom(e.target.value)}
//             />
//           </FormControl>
//           <FormControl id="timeTo">
//             <FormLabel>Time To</FormLabel>
//             <Input
//               type="time"
//               value={timeTo}
//               onChange={(e) => setTimeTo(e.target.value)}
//             />
//           </FormControl>
//           <Button colorScheme="teal" onClick={handleSaveSchedule}>
//             Save Schedule
//           </Button>
//         </VStack>
//       </Center>
//       <Divider my={4} />
//       {/* Display the list of schedules */}
//       <SchedulesList schedules={schedules} />
//     </Container>
//   );
// }

// // Separate component for displaying a list of schedules
// function SchedulesList({ schedules }) {
//   return (
//     <div>
//       <h2>Schedules List</h2>
//       <ul>
//         {schedules.map((schedule) => (
//           <li key={schedule.id}>{schedule.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TimeTableManagement;
// ScheduleManagement.js

// ScheduleManagement.js

import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Heading,
  Flex,
  Button,
  Input,
  Text,
  Select,
} from "@chakra-ui/react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function TimeTableManagement() {
  const localizer = momentLocalizer(moment);

  // Sample schedule data
  const dummySchedules = [
    {
      id: 1,
      title: "Meeting 1",
      start: new Date(2023, 8, 2, 10, 0),
      end: new Date(2023, 8, 2, 11, 0),
    },
    {
      id: 2,
      title: "Class 1",
      start: new Date(2023, 8, 3, 14, 0),
      end: new Date(2023, 8, 3, 16, 0),
    },
  ];

  const [schedules, setSchedules] = useState(dummySchedules);

  const [formData, setFormData] = useState({
    title: "",
    start: "",
    end: "",
    room: "",
    teacher: "",
  });

  const rooms = ["Room A", "Room B", "Room C"];
  const teachers = ["Teacher 1", "Teacher 2", "Teacher 3"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveSchedule = () => {
    // Validate and save the schedule data here
    if (
      formData.title &&
      formData.start &&
      formData.end &&
      formData.room &&
      formData.teacher
    ) {
      // Create a new schedule event
      const newEvent = {
        id: schedules.length + 1,
        title: formData.title,
        start: new Date(formData.start),
        end: new Date(formData.end),
        room: formData.room,
        teacher: formData.teacher,
      };

      setSchedules([...schedules, newEvent]);

      // Clear the form
      setFormData({
        title: "",
        start: "",
        end: "",
        room: "",
        teacher: "",
      });
    }
  };

  return (
    <Container maxW="full">
      <Box bg="white" p={4} borderRadius="md" boxShadow="md" mb={4}>
        <Heading as="h2" size="lg" mb={4}>
          Timetable Management
        </Heading>
        <Flex justifyContent="space-between">
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Title"
            mr={2}
          />
          <Input
            type="datetime-local"
            name="start"
            value={formData.start}
            onChange={handleInputChange}
            mr={2}
          />
          <Input
            type="datetime-local"
            name="end"
            value={formData.end}
            onChange={handleInputChange}
            mr={2}
          />
          <Select
            name="room"
            value={formData.room}
            onChange={handleInputChange}
            placeholder="Select Room"
            mr={2}
          >
            {rooms.map((room) => (
              <option key={room} value={room}>
                {room}
              </option>
            ))}
          </Select>
          <Select
            name="teacher"
            value={formData.teacher}
            onChange={handleInputChange}
            placeholder="Select Teacher"
            mr={2}
          >
            {teachers.map((teacher) => (
              <option key={teacher} value={teacher}>
                {teacher}
              </option>
            ))}
          </Select>
          <Button colorScheme="teal" onClick={handleSaveSchedule}>
            Save
          </Button>
        </Flex>
      </Box>
      <Calendar
        localizer={localizer}
        events={schedules}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, backgroundColor: "white", padding: "20px" }}
        eventPropGetter={(event, start, end, isSelected) => {
          const backgroundColor =
            event.room === "Room A"
              ? "blue"
              : event.room === "Room B"
              ? "green"
              : "red";
          return { style: { backgroundColor } };
        }}
        tooltipAccessor={(event) => {
          return `Teacher: ${event.teacher}, Room: ${event.room}`;
        }}
      />
    </Container>
  );
}
