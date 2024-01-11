import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
} from "@chakra-ui/react";

export default function StudentMarksSummaryTable({ text, data, boxStyle }) {
  return (
    <TableContainer mt={3}>
      <Box
        w="100%"
        h="100%"
        bg="#2FB5EE"
        boxShadow="0px 20px 27px rgba(0, 0, 0, 0.05)"
        borderTopRadius={8}
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
        fontSize="3xl"
        fontWeight="bold"
        {...boxStyle}
      >
        {text}
      </Box>
      <Table variant="striped" backgroundColor={"white"} borderBottomRadius={8}>
        <Thead>
          <Tr>
            {["No.", "TOTAL MARKS", "OBTAINED MARKS"].map((header, index) => (
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
                  {rowIndex + 1}
                </Td>
                <Td key={rowIndex} textAlign="center">
                  {row.totalMarks}
                </Td>
                <Td key={rowIndex} textAlign="center">
                  {row.obtainedMarks}
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
