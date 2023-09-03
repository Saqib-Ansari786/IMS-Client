import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  HStack,
  TableContainer,
  // Import ScrollView
} from "@chakra-ui/react";
import { FaEdit, FaPlus, FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa"; // Import sort icons

const sampleData = [
  {
    id: 1,
    courseId: "Course123",
    department: "Department A",
    previousAttendance: "75%",
  },
  {
    id: 2,
    courseId: "Course456",
    department: "Department B",
    previousAttendance: "82%",
  },
  {
    id: 3,
    courseId: "Course789",
    department: "Department C",
    previousAttendance: "67%",
  },
  // Add more data as needed
];

const AddAttendancePage = () => {
  const [sortedData, setSortedData] = useState(sampleData);
  const [sortBy, setSortBy] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSort = (field) => {
    if (field === sortBy) {
      // Toggle sorting order
      setSortedData([...sortedData].reverse());
    } else {
      // Sort by the selected field
      setSortedData(
        [...sortedData].sort((a, b) => a[field].localeCompare(b[field]))
      );
    }
    setSortBy(field);
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const filteredData = sampleData.filter(
      (data) =>
        data.courseId.toLowerCase().includes(query) ||
        data.department.toLowerCase().includes(query) ||
        data.previousAttendance.toLowerCase().includes(query)
    );
    setSortedData(filteredData);
    setSearchQuery(query);
  };

  return (
    <Box p={4} minW={"100%"}>
      <Heading size="lg" mb={4}>
        Add Attendance
      </Heading>

      {/* Sort and Search Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        mb={4}
        bgColor={"white.base"}
        p={3}
        rounded={5}
      >
        {/* Sort Buttons */}
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={4}
        >
          <HStack spacing={2}>
            <Button
              leftIcon={
                sortBy === "department" ? (
                  <FaSortAlphaDown />
                ) : (
                  <FaSortAlphaUp />
                )
              }
              variant="outline"
              colorScheme="blue"
              size="sm"
              onClick={() => handleSort("department")}
            >
              Department
            </Button>
          </HStack>

          <HStack spacing={2}>
            <Button
              leftIcon={
                sortBy === "courseId" ? <FaSortAlphaDown /> : <FaSortAlphaUp />
              }
              variant="outline"
              colorScheme="blue"
              size="sm"
              onClick={() => handleSort("courseId")}
            >
              Course ID
            </Button>
          </HStack>

          <HStack spacing={2}>
            <Button
              leftIcon={
                sortBy === "previousAttendance" ? (
                  <FaSortAlphaDown />
                ) : (
                  <FaSortAlphaUp />
                )
              }
              variant="outline"
              colorScheme="blue"
              size="sm"
              onClick={() => handleSort("previousAttendance")}
            >
              Attendance
            </Button>
          </HStack>
        </Grid>

        {/* Search Bar */}
        <Input
          placeholder="Search"
          onChange={handleSearch}
          value={searchQuery}
          w={{ base: "100%", md: "50%" }}
          mt={{ base: 2, md: 0 }}
        />
      </Flex>

      {/* Attendance Table */}
      <Box
        backgroundColor="white.base"
        borderRadius={10}
        p={4}
        overflowX="auto"
      >
        <Heading size="md" mb={4}>
          Attendance Table
        </Heading>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th>Course ID</Th>
              <Th>Department Name</Th>
              <Th>Previous Attendance</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sortedData.map((data, index) => (
              <Tr key={data.id}>
                <Td>{index + 1}</Td>
                <Td>{data.courseId}</Td>
                <Td>{data.department}</Td>
                <Td>{data.previousAttendance}</Td>
                <Td>
                  <Button colorScheme="blue" size="sm" mr={2}>
                    <FaPlus />
                  </Button>
                  <Button colorScheme="teal" size="sm">
                    <FaEdit />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default AddAttendancePage;
