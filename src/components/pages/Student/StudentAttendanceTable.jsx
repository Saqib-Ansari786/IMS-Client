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
import { Bar } from "react-chartjs-2";

export default function StudentAttendanceTable({ headers, data }) {
  const totalClasses = data.length;
  const totalPresent = data.filter((row) => row.status === "Present").length;
  const totalAbsent = data.filter((row) => row.status === "Absent").length;
  const presentPercentage = totalPresent
    ? ((totalPresent / totalClasses) * 100).toFixed(2)
    : 0;

  const chartData = {
    labels: ["Total Classes", "Present", "Absent"],
    datasets: [
      {
        label: "Attendance",
        backgroundColor: ["#3182CE", "green", "red"], 
        data: [totalClasses, totalPresent, totalAbsent],
      },
    ],
  };

  return (
    <>
      <Box backgroundColor="white" borderRadius="md" boxShadow="md">
        <Bar
          data={chartData}
          options={{
            scales: {
              y: {
                beginAtZero: true,
                max: totalClasses + 10, 
              },
            },
          }}
        />
      </Box>
      <TableContainer backgroundColor="white" borderRadius="md" boxShadow="md" p="4">
        <Box color="#4076CE" fontSize="xl" mb="3">
          Total classes: {totalClasses} ({presentPercentage}%)
        </Box>
        <Flex justifyContent="flex-end" mr="4">
          <Text color="green" mr="4">
            Present: {totalPresent}
          </Text>
          <Text color="red">Absent: {totalAbsent}</Text>
        </Flex>
        <Table variant="simple" backgroundColor="white" mt="4">
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
                  <Td textAlign="center">{row.topic}</Td>
                  <Td textAlign="center">
                    <Text color={row.status === "Present" ? "green" : "red"}>
                      {row.status}
                    </Text>
                  </Td>
                  <Td textAlign="center">{row.classstartingtime}</Td>
                  <Td textAlign="center">{row.classendingtime}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
