import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box } from "@chakra-ui/react";

export default function StudentMarksSummaryTable({text, headers, data, boxStyle}) {
  return (
    <TableContainer >
        <Box
      w="100%"
      h="100%"
      bg="#FB635C"
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
      <Table variant="simple" backgroundColor={"white"} borderBottomRadius={8} >
        <Thead>
          <Tr>
            {headers && headers.map((header, index) => (
              <Th key={index} textAlign="center">{header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data
           && data.map((row, rowIndex) => (
            <Tr key={rowIndex}>
                <Td key={rowIndex} textAlign="center">
                  {row.title}
                </Td>
                <Td key={rowIndex} textAlign="center">
                  {row.totalMarks}
                </Td>
                <Td key={rowIndex} textAlign="center">
                  {row.obtainedMarks}
                </Td>
                <Td key={rowIndex} textAlign="center">
                  {row.dateTime}
                </Td>
                <Td key={rowIndex} textAlign="center">
                  {row.teacherComment}
                </Td>
                </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
