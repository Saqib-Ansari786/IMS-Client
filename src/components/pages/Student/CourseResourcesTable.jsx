import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box } from "@chakra-ui/react";

export default function CourseResourcesTable({ headers, data }) {
  return (
    <TableContainer>
      <Table variant="simple" backgroundColor="white" mt={5} borderRadius={8}>
        <Thead>
          <Tr>
            {headers.map((header, index) => (
              <Th key={index} textAlign="center">
                {header}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <Td key={cellIndex} textAlign="center">
                  {cell}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
