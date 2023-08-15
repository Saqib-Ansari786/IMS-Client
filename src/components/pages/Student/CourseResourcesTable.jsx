import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex, Link, Icon } from "@chakra-ui/react";
import { FaDownload, FaFilePdf, FaFilePowerpoint } from "react-icons/fa";

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
            <Td key={rowIndex} textAlign="center">
              {row.title}
            </Td>
            <Td key={rowIndex} textAlign="center">
              {row.fileTitle}
            </Td>
            <Td key={rowIndex} textAlign="center">
              {row.uploadTime}
            </Td>
            <Td key={rowIndex} textAlign="center">
              {row.fileSize}
            </Td>
            <Td key={rowIndex} textAlign="center">
                {row.fileType === "pdf" ? (
                  <Icon as={FaFilePdf} boxSize={6} color="red" />
                ) : row.fileType === "powerpoint" ? (
                  <Icon as={FaFilePowerpoint} boxSize={6} color="blue" />
                ) : (
                  row.fileType
                )}
              </Td>
              <Td key={rowIndex} textAlign="center">
                <Flex alignItems="center" justifyContent="center">
                  <Link display={"flex"} href={row.downloadLink} download>
                    <FaDownload color="#120E89"/> 
                    <span style={{ marginLeft: "0.5rem" }}>{row.fileTitle}</span>
                  </Link>
                </Flex>
              </Td>
          </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
