import { useState } from "react";
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
  // Import ScrollView
} from "@chakra-ui/react";
import { FaEdit, FaPlus, FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa"; // Import sort icons
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCourses,
  selectIsError,
  selectIsLoading,
} from "../../store/redux-slices/courses_slice";

const sampleData = [
  {
    id: 1,
    courseId: "Course123",
    department: "Department A",
    previousAttendance: "75",
    date: "2021-10-10",
  },
  {
    id: 2,
    courseId: "Course456",
    department: "Department B",
    previousAttendance: "82",
    date: "2021-10-10",
  },
  {
    id: 3,
    courseId: "Course789",
    department: "Department C",
    previousAttendance: "67",
    date: "2021-10-10",
  },
  // Add more data as needed
];

const AddAttendancePage = () => {
  const [sortedData, setSortedData] = useState(sampleData);
  const [sortBy, setSortBy] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const courses = useSelector(selectCourses);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  console.log(courses);

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
        data.previousAttendance.toLowerCase().includes(query) ||
        data.date.toLowerCase().includes(query)
    );
    setSortedData(filteredData);
    setSearchQuery(query);
  };

  return (
    <Box p={{ base: 0, md: 4 }} minW={"100%"}>
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
            md: "repeat(4, 1fr)",
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
              w={28}
              onClick={() => handleSort("department")}
            >
              Category
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
              w={28}
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
              w={28}
              onClick={() => handleSort("previousAttendance")}
            >
              Attendance
            </Button>
          </HStack>
          <HStack spacing={2}>
            <Button
              leftIcon={
                sortBy === "date" ? <FaSortAlphaDown /> : <FaSortAlphaUp />
              }
              variant="outline"
              colorScheme="blue"
              size="sm"
              w={28}
              onClick={() => handleSort("date")}
            >
              Date
            </Button>
          </HStack>
        </Grid>

        {/* Search Bar */}
        <Input
          placeholder="Search"
          onChange={handleSearch}
          value={searchQuery}
          w={{ base: "100%", md: "40%" }}
          mt={{ base: 5, md: 0 }}
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
              <Th>Category</Th>
              <Th>Strength</Th>
              <Th>Duration</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {courses?.map((data, index) => (
              <Tr key={data.id}>
                <Td>{index + 1}</Td>
                <Td>{data?.courseCode}</Td>
                <Td>{data?.category}</Td>
                <Td>{data?.strength}</Td>
                <Td>{data?.duration} hrs</Td>
                <Td>
                  <Link to={`/teacher/add-attendance/${data.courseCode}`}>
                    <Button colorScheme="blue" size="sm" mr={2}>
                      <FaPlus />
                    </Button>
                  </Link>
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
