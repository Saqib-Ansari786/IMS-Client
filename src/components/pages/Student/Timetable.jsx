import React from "react";
import {Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import TimetableCell from "./TimeTableCell";

const daysOfWeek = ["Time", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const timetableData = [
  { time: "9:00 - 10:00", Monday: "", Tuesday: { courseId: "CSC 102", lecture: "Lec 1", location: "Room 1" }, Wednesday: "", Thursday: "", Friday: "" },
  { time: "10:00 - 11:00", Monday: { courseId: "CSC 102", lecture: "Lec 2", location: "Room 2" }, Tuesday: "", Wednesday: "", Thursday: "", Friday: "" },
  { time: "11:00 - 12:00", Monday: "", Tuesday: "", Wednesday: { courseId: "CSC 102", lecture: "Lec 3", location: "Room 3" }, Thursday: "", Friday: "" },
  { time: "1:00 - 2:00", Monday: "", Tuesday: "", Wednesday: "", Thursday: { courseId: "CSC 102", lecture: "Lec 4", location: "Room 4" }, Friday: "" },
  { time: "2:00 - 3:00", Monday: "", Tuesday: { courseId: "CSC 102", lecture: "Lec 5", location: "Room 5" }, Wednesday: "", Thursday: "", Friday: "" },
];

const Timetable = () => {
  return (
    <Box style={{ overflowX: "auto" }}>
      <Table variant="simple" bg="white" style={{ minWidth: "600px" }}>
        <Thead>
          <Tr>
            {daysOfWeek.map((day, index) => (
              <Th key={index} textAlign="center">{day}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {timetableData.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {Object.values(row).map((cell, cellIndex) => (
                <Td key={cellIndex} textAlign="center">
                  {cell && typeof cell === "object" ? (
                    <TimetableCell {...cell} />
                  ) : (
                    cell
                  )}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Timetable;
