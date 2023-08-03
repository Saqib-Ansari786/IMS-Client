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
          {data && data.map((row, rowIndex) => (
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