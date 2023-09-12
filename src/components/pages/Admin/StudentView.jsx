import React from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  IconButton,
  Icon,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon, ViewIcon } from '@chakra-ui/icons'; // Import Chakra UI icons
import StudentSearch from './StudentSearch';

export default function StudentView() {
  return (
    <>
    <StudentSearch/>
    <Box mt={3} borderWidth="1px" borderRadius="lg" p={4} backgroundColor="white">
      <Table variant="striped" colorScheme="blackAlpha">
        <Thead>
          <Tr>
            <Th>Belt No.</Th>
            <Th>Name</Th>
            <Th>Course Name</Th>
            <Th>Email</Th>
            <Th>Phone No</Th>
            <Th>Admission Date</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>A1225</Td>
            <Td>
              <span className="font-16">Murtaza</span>
            </Td>
            <Td>Programming</Td>
            <Td>check@gmail.com</Td>
            <Td>0321-1234567</Td>
            <Td>04 Jan, 2019</Td>
            <Td>
              <IconButton
                size="sm"
                colorScheme="blue"
                title="View"
                icon={<Icon as={ViewIcon} />}
              />
              <IconButton
                size="sm"
                colorScheme="blue"
                title="Edit"
                icon={<Icon as={EditIcon} />}
              />
              <IconButton
                size="sm"
                colorScheme="red"
                title="Delete"
                icon={<Icon as={DeleteIcon} />}
              />
            </Td>
          </Tr>
          <Tr>
            <Td>A1225</Td>
            <Td>
              <span className="font-16">Murtaza</span>
            </Td>
            <Td>Programming</Td>
            <Td>check@gmail.com</Td>
            <Td>0321-1234567</Td>
            <Td>04 Jan, 2019</Td>
            <Td>
              <IconButton
                size="sm"
                colorScheme="blue"
                title="View"
                icon={<Icon as={ViewIcon} />}
              />
              <IconButton
                size="sm"
                colorScheme="blue"
                title="Edit"
                icon={<Icon as={EditIcon} />}
              />
              <IconButton
                size="sm"
                colorScheme="red"
                title="Delete"
                icon={<Icon as={DeleteIcon} />}
              />
            </Td>
          </Tr>
          <Tr>
            <Td>A1225</Td>
            <Td>
              <span className="font-16">Murtaza</span>
            </Td>
            <Td>Programming</Td>
            <Td>check@gmail.com</Td>
            <Td>0321-1234567</Td>
            <Td>04 Jan, 2019</Td>
            <Td>
              <IconButton
                size="sm"
                colorScheme="blue"
                title="View"
                icon={<Icon as={ViewIcon} />}
              />
              <IconButton
                size="sm"
                colorScheme="blue"
                title="Edit"
                icon={<Icon as={EditIcon} />}
              />
              <IconButton
                size="sm"
                colorScheme="red"
                title="Delete"
                icon={<Icon as={DeleteIcon} />}
              />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
    </>
  );
}
