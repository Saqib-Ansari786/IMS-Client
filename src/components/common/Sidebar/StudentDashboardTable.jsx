import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
import { Progress, ProgressLabel } from "@chakra-ui/progress";

const tableHeaders = ["COURSE ID", "COURSE NAME", "TEACHER NAME", "CLASS BATCH", "ATTENDANCE"];
const tableData = [
  ["PSI-202", "Computer Skills", "Rana Tahir", "Batch-09", "100%"],
  ["PSI-203", "IT Information", "Murtaza", "Batch-09", "60%"],
];

export default function StudentDashboardTable() {
  return (
    <TableContainer>
      <Table variant="simple" backgroundColor={"white"} mt={5} borderRadius={8}>
        <Thead>
          <Tr>
            {tableHeaders.map((header, index) => (
              <Th key={index} textAlign="center">{header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <Td key={cellIndex} textAlign="center">
                  {cellIndex === 4? (
                    <Progress hasStripe isAnimated value={parseInt(cell)} color="#98EC2D" borderRadius="5" height="4" fontSize="45">
                      <ProgressLabel>{cell}</ProgressLabel>
                    </Progress>
                  ) : (cell)}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
