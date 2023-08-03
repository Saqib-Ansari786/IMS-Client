// import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
// import { Progress, ProgressLabel } from "@chakra-ui/progress";

// export default function StudentDashboardTable({headers, data}) {
//   return (
//     <TableContainer>
//       <Table variant="simple" backgroundColor={"white"} mt={5} borderRadius={8}>
//         <Thead>
//           <Tr>
//             {headers && headers.map((header, index) => (
//               <Th key={index} textAlign="center">{header}</Th>
//             ))}
//           </Tr>
//         </Thead>
//         <Tbody>
//           {data && data.map((row, rowIndex) => (
//             <Tr key={rowIndex}>
//               {row.map((cell, cellIndex) => (
//                 <Td key={cellIndex} textAlign="center">
//                   {cellIndex === 4? (
//                     <Progress hasStripe isAnimated value={parseInt(cell)} color="#98EC2D" borderRadius="5" height="4" fontSize="45">
//                       <ProgressLabel>{cell}</ProgressLabel>
//                     </Progress>
//                   ) : (cell)}
//                 </Td>
//               ))}
//             </Tr>
//           ))}
//         </Tbody>
//       </Table>
//     </TableContainer>
//   );
// }

// import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
// import { Progress, ProgressLabel } from "@chakra-ui/progress";

// export default function StudentDashboardTable({headers, data}) {
//   return (
//     <TableContainer>
//       <Table variant="simple" backgroundColor={"white"} mt={5} borderRadius={8}>
//         <Thead>
//           <Tr>
//             {headers && headers.map((header, index) => (
//               <Th key={index} textAlign="center">{header}</Th>
//             ))}
//           </Tr>
//         </Thead>
//         <Tbody>
//           {data && data.map((row, rowIndex) => (
//             <Tr key={rowIndex}>
              
//                 <Td key={rowIndex} textAlign="center">
//                   {rowIndex === 4? (
//                     <Progress hasStripe isAnimated value={parseInt(row.attendance)} color="#98EC2D" borderRadius="5" height="4" fontSize="45">
//                       <ProgressLabel>{row.attendance}</ProgressLabel>
//                     </Progress>
//                   ) : (row)}
//                 </Td>

//             </Tr>
//           ))}
//         </Tbody>
//       </Table>
//     </TableContainer>
//   );
// }

import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
import { Progress, ProgressLabel } from "@chakra-ui/progress";

export default function StudentDashboardTable({ headers, data }) {
  return (
    <TableContainer>
      <Table variant="simple" backgroundColor={"white"} mt={5} borderRadius={8}>
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
              {headers.map((header, cellIndex) => (
                <Td key={cellIndex} textAlign="center">
                  {cellIndex === 4 ? (
                    <Progress hasStripe isAnimated value={parseInt(row[header])} color="#98EC2D" borderRadius="5" height="4" fontSize="45">
                      <ProgressLabel>{row[header]}</ProgressLabel>
                    </Progress>
                  ) : (row[header])}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
