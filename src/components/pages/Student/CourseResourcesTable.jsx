import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Link,
  Icon,
} from "@chakra-ui/react";
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
                {row?.title}
              </Td>
              <Td key={rowIndex} textAlign="center">
                {row?.description}
              </Td>
              <Td key={rowIndex} textAlign="center">
                <Flex alignItems="center" justifyContent="center">
                  <Link display={"flex"} href={row?.doc} download>
                    <FaDownload color="#120E89" />
                    <span style={{ marginLeft: "0.5rem" }}>
                      {"Check Document"}
                    </span>
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
