import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Progress, ProgressLabel } from "@chakra-ui/progress";

export default function StudentDashboardTable({ headers, data }) {
  return (
    <TableContainer>
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
                  {row.courseid}
                </Td>
                <Td key={rowIndex} textAlign="center">
                  {row.coursename}
                </Td>
                <Td key={rowIndex} textAlign="center">
                  {row.teachername}
                </Td>
                <Td key={rowIndex} textAlign="center">
                  {row.classbatch}
                </Td>

                <Td key={rowIndex} textAlign="center">
                  <Progress
                    hasStripe
                    isAnimated
                    value={parseInt(row.attendance)}
                    color="#98EC2D"
                    borderRadius="5"
                    height="4"
                    fontSize="45"
                  >
                    <ProgressLabel>{row.attendance} </ProgressLabel>
                  </Progress>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
