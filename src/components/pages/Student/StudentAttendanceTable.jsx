import {
  Box,
  Text,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
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
    labels: ["Present", "Absent"],
    datasets: [
      {
        label: "Attendance",
        backgroundColor: ["green", "red"],
        data: [totalPresent, totalAbsent],
      },
    ],
  };

  return (
    <>
    
     <TableContainer backgroundColor="white" borderRadius="md" boxShadow="md" p="4">
     <Flex direction="column" align="center" p="3">
      <Box backgroundColor="white" borderRadius="md" boxShadow="md" mb="2">
        <Bar
          data={chartData}
          options={{
            scales: {
              y: {
                beginAtZero: true,
                max: totalClasses,
              },
            },
          }}
        />
      </Box>
    </Flex>
     <Box color="#4076CE" fontSize="xl" mb="3">
       Total classes: {totalClasses} ({presentPercentage}%)
     </Box>
     <Flex justifyContent="flex-end" mr="4">
       <Text color="green" mr="4">
         Present: {totalPresent}
       </Text>
       <Text color="red">Absent: {totalAbsent}</Text>
     </Flex>
     <Table variant="striped" backgroundColor="white" mt="4">
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
