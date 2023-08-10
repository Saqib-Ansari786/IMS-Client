import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";

export default function StudentAttendanceTable({ headers, data }) {
  const totalClasses = data.length;
  const totalPresent = data.filter((row) => row.status === "Present").length;
  const totalAbsent = data.filter((row) => row.status === "Absent").length;
  const presentPercentage = totalPresent
    ? ((totalPresent / totalClasses) * 100).toFixed(2)
    : 0;

  return (
    <TableContainer backgroundColor={"white"}>
      <Box color={"#4076CE"} mt={4} fontSize={18} mb={3}>
        Total classes: {totalClasses} ({presentPercentage}% )
      </Box>
      <Flex justifyContent="flex-end" mr={"10"}>
        <Text color="green" mt={1} mr={4}>
          Present: {totalPresent}
        </Text>
        <Text color="red" mt={1}>
          Absent: {totalAbsent}
        </Text>
      </Flex>
      <Table variant="simple" backgroundColor={"white"} mt={5} borderRadius={8}>
        <Thead>
          <Tr>
            {headers &&
              headers.map((header, index) => (
                <Th key={index} textAlign="center">
                  {header}
                </Th>
              ))}
          </Tr>
        </Thead>
        <Tbody>
          {data &&
            data.map((row, rowIndex) => (
              <Tr key={rowIndex}>
                <Td key={rowIndex} textAlign="center">
                  {row.topic}
                </Td>
                <Td key={rowIndex} textAlign="center">
                  <span
                    style={{
                      color: row.status === "Present" ? "green" : "red",
                    }}
                  >
                    {row.status}
                  </span>
                </Td>
                <Td key={rowIndex} textAlign="center">
                  {row.classstartingtime}
                </Td>
                <Td key={rowIndex} textAlign="center">
                  {row.classendingtime}
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
