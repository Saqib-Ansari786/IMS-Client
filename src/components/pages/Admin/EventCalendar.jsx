import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  GridItem,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  IconButton,
  Divider
} from "@chakra-ui/react";
import { addDays, format, startOfMonth, endOfMonth, getDaysInMonth } from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon, CalendarIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const EventCalendar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [eventText, setEventText] = useState("");
  const [editEventIndex, setEditEventIndex] = useState(null);

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = startOfMonth(currentDate);
  const lastDay = endOfMonth(currentDate);

  const handlePrevMonth = () => {
    setCurrentDate(addDays(firstDay, -1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addDays(lastDay, 1));
  };

  const handleDayClick = (day) => {
    setSelectedDate(day);
    onOpen();
  };

  const handleEventAdd = () => {
    if (eventText) {
      const newEvent = { date: selectedDate, text: eventText, color: getRandomColor() };
      setEvents([...events, newEvent]);
      setEventText("");
      onClose();
    }
  };

  const handleEventEdit = (index) => {
    setEventText(events[index].text);
    setEditEventIndex(index);
    onOpen();
  };

  const handleEventUpdate = () => {
    if (eventText && editEventIndex !== null) {
      const updatedEvents = [...events];
      updatedEvents[editEventIndex] = {
        ...updatedEvents[editEventIndex],
        text: eventText,
      };
      setEvents(updatedEvents);
      setEventText("");
      setEditEventIndex(null);
      onClose();
    }
  };

  const handleEventDelete = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
  };

  const getEventsForDay = (day) => {
    return events.filter((event) => format(event.date, "MM/dd/yyyy") === format(day, "MM/dd/yyyy"));
  };

  return (
    <Box p={4} backgroundColor="white" mb={3}>
      <Grid templateColumns="repeat(7, 1fr)" gap={2} mb={4}>
        {[0, 1, 2, 3, 4, 5, 6].map((offset) => (
          <GridItem key={offset} textAlign="center">
            {format(addDays(firstDay, offset), "EEE")}
          </GridItem>
        ))}
      </Grid>
      <Box mb={4}>
        <IconButton
          icon={<ChevronLeftIcon />}
          onClick={handlePrevMonth}
          variant="ghost"
        />
        <span>{format(firstDay, "MMMM yyyy")}</span>
        <IconButton
          icon={<ChevronRightIcon />}
          onClick={handleNextMonth}
          variant="ghost"
        />
      </Box>
      <Grid templateColumns="repeat(7, 1fr)" gap={2}>
        {Array.from({ length: daysInMonth }, (_, index) => {
          const day = addDays(firstDay, index);
          const eventsForDay = getEventsForDay(day);
          const hasEvents = eventsForDay.length > 0;

          return (
            <GridItem
              key={index}
              p={2}
              textAlign="center"
              borderWidth={1}
              borderColor="gray.200"
              _hover={{ cursor: "pointer" }}
              onClick={() => handleDayClick(day)}
              bg={hasEvents ? eventsForDay[0].color : "transparent"}
            >
              <div>{format(day, "d")}</div>
              {eventsForDay.map((event, eventIndex) => (
                <div key={eventIndex}>
                  {event.text}
                  <Divider />
                  <IconButton
                    icon={<EditIcon color={"white"} />}
                    backgroundColor="#1D238F"
                    _hover={{ bg: "blue.300", color: "white" }}
                    size="sm"
                    variant="outline"
                    onClick={() => handleEventEdit(eventIndex)}
                  />
                  <IconButton
                    icon={<DeleteIcon color={"white"} />}
                    backgroundColor="#1D238F"
                    _hover={{ bg: "blue.300", color: "white" }}
                    size="sm"
                    variant="outline"
                    onClick={() => handleEventDelete(eventIndex)}
                  />
                </div>
              ))}
            </GridItem>
          );
        })}
      </Grid>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor="white">
          <ModalHeader>{editEventIndex !== null ? "Edit Event" : "Add Event"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Event description"
              value={eventText}
              onChange={(e) => setEventText(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            {editEventIndex !== null ? (
              <Button colorScheme="blue" onClick={handleEventUpdate}>
                Update
              </Button>
            ) : (
              <Button colorScheme="blue" onClick={handleEventAdd}>
                Add
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default EventCalendar;
