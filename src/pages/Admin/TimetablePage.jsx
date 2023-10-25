// src/pages/TimetablePage.js
import React, { useState } from "react";
import {
  Box,
  Heading,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Select,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const TimetablePage = () => {
  const [timetable, setTimetable] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState({
    day: "",
    time: "",
  });

  // Define available courses, teachers, and rooms
  const availableCourses = ["Course A", "Course B", "Course C"];
  const availableTeachers = ["Teacher X", "Teacher Y", "Teacher Z"];
  const availableRooms = ["Room 101", "Room 102", "Room 103"];

  const handleBoxClick = (day, time) => {
    setSelectedTimeSlot({ day, time });
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = () => {
    // Check if an entry with the same course, teacher, and room already exists for the selected day
    const isConflict = timetable.some(
      (entry) =>
        entry.day === selectedTimeSlot.day &&
        entry.course === selectedCourse &&
        entry.teacher === selectedTeacher &&
        entry.room === selectedRoom
    );

    if (isConflict) {
      alert("This class already exists on this day.");
    } else {
      // Add the selected course, teacher, and room to the timetable
      const updatedTimetable = [...timetable];
      updatedTimetable.push({
        day: selectedTimeSlot.day,
        time: selectedTimeSlot.time,
        course: selectedCourse,
        teacher: selectedTeacher,
        room: selectedRoom,
      });
      setTimetable(updatedTimetable);
      setIsModalOpen(false);
    }
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Timetable Page
      </Heading>
      <Flex>
        <Box w="100px"></Box>
        <Box flex="1">
          <Table size="sm">
            <Thead>
              <Tr>
                <Th></Th>
                <Th>8:00 AM</Th>
                <Th>10:00 AM</Th>
                <Th>12:00 PM</Th>
                <Th>2:00 PM</Th>
                <Th>4:00 PM</Th>
              </Tr>
            </Thead>
            <Tbody>
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
                (day) => (
                  <Tr key={day}>
                    <Th>{day}</Th>
                    {[8, 10, 12, 14, 16].map((time) => (
                      <Td
                        key={`${day}-${time}`}
                        onClick={() => handleBoxClick(day, `${time}:00`)}
                        style={{
                          cursor: "pointer",
                          backgroundColor: "lightgray",
                        }}
                      >
                        {/* Display timetable data if exists */}
                        {timetable.map((entry) =>
                          entry.day === day && entry.time === `${time}:00` ? (
                            <div key={entry.day + entry.time}>
                              {entry.course}
                              <br />
                              {entry.teacher}
                              <br />
                              {entry.room}
                            </div>
                          ) : null
                        )}
                      </Td>
                    ))}
                  </Tr>
                )
              )}
            </Tbody>
          </Table>
        </Box>
      </Flex>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Select
              placeholder="Select a course"
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              {availableCourses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </Select>
            <Select
              mt={4}
              placeholder="Select a teacher"
              onChange={(e) => setSelectedTeacher(e.target.value)}
            >
              {availableTeachers.map((teacher) => (
                <option key={teacher} value={teacher}>
                  {teacher}
                </option>
              ))}
            </Select>
            <Select
              mt={4}
              placeholder="Select a room"
              onChange={(e) => setSelectedRoom(e.target.value)}
            >
              {availableRooms.map((room) => (
                <option key={room} value={room}>
                  {room}
                </option>
              ))}
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={handleModalSubmit}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default TimetablePage;
