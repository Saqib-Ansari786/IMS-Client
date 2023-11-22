import { useState } from "react";
import {
  Container,
  Box,
  Heading,
  Flex,
  Button,
  Input,
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
