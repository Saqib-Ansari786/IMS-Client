import React from 'react';
import {
  Box,
  Image,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  Stack,
  Heading,
  Link,
} from '@chakra-ui/react';
import { FaCalendar, FaMoneyBillAlt, FaUsers } from 'react-icons/fa';

export default function CourseCard({
  imageUrl,
  title,
  description,
  duration,
  fees,
  students,
}) {

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      backgroundColor="white"
    >
      <Link href="/courseDetails">
        <Image src={imageUrl} alt={`Image for ${title}`} objectFit="cover" height="200px" width="100%" />
      </Link>
      <Box p="4">
        <Heading as="h5" size="md">
          <Link href="/courseDetails">{title}</Link>
        </Heading>
        <Text color="gray.600" mt="2">
          {description}
        </Text>
        <Table size="sm" mt="3">
          <Tbody>
            <Tr>
              <Td>
                <Stack spacing={1} direction="row" alignItems="center">
                  <FaCalendar color={"blue"} />
                  <Text fontWeight="semibold">
                    Duration
                  </Text>
                </Stack>
              </Td>
              <Td textAlign="right">{duration}</Td>
            </Tr>
            <Tr>
              <Td>
                <Stack spacing={1} direction="row" alignItems="center">
                  <FaMoneyBillAlt color={"red"} />
                  <Text fontWeight="semibold" >
                    Fees
                  </Text>
                </Stack>
              </Td>
              <Td textAlign="right">{fees}</Td>
            </Tr>
            <Tr>
              <Td>
                <Stack spacing={1} direction="row" alignItems="center">
                  <FaUsers color={"green"} />
                  <Text fontWeight="semibold">
                    Students
                  </Text>
                </Stack>
              </Td>
              <Td textAlign="right">{students}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}
