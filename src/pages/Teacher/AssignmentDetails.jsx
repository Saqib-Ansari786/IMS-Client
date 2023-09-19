import {
  Box,
  Heading,
  Text,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Link,
  TableContainer,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const assignments = [
  {
    id: 1,
    title: "Assignment 1",
    description: "Complete chapter 1 exercises",
    documents: [],
    studentsSubmitted: 10, // Number of students who have submitted
    startTimestamp: new Date("2023-09-10T08:00:00"), // Assignment start time
    deadlineTimestamp: new Date("2023-09-15T23:59:59"), // Assignment deadline
    submissions: [
      {
        studentName: "John Doe",
        dateSubmitted: new Date("2023-09-10T08:00:00"),
        documents: [
          {
            url: "https://www.google.com",
          },
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.",
      },
      {
        studentName: "Jane Smith",
        dateSubmitted: new Date("2023-09-10T08:00:00"),
        documents: [
          {
            url: "https://www.google.com",
          },
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.",
      },
    ],
  },
  {
    id: 2,
    title: "Assignment 2",
    description: "Complete chapter 2 exercises",
    documents: [],
    studentsSubmitted: 10, // Number of students who have submitted
    startTimestamp: new Date("2023-09-10T08:00:00"), // Assignment start time
    deadlineTimestamp: new Date("2023-09-15T23:59:59"), // Assignment deadline
    submissions: [
      {
        studentName: "John Doe",
        dateSubmitted: new Date("2023-09-10T08:00:00"),
        documents: [
          {
            url: "https://www.google.com",
          },
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.",
      },
      {
        studentName: "Jane Smith",
        dateSubmitted: new Date("2023-09-10T08:00:00"),
        documents: [
          {
            url: "https://www.google.com",
          },
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.",
      },
    ],
  },
  {
    id: 3,
    title: "Assignment 3",
    description: "Complete chapter 3 exercises",
    documents: [],
    studentsSubmitted: 10, // Number of students who have submitted
    startTimestamp: new Date("2023-09-10T08:00:00"), // Assignment start time
    deadlineTimestamp: new Date("2023-09-15T23:59:59"), // Assignment deadline
    submissions: [
      {
        studentName: "John Doe",
        dateSubmitted: new Date("2023-09-10T08:00:00"),
        documents: [
          {
            url: "https://www.google.com",
          },
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.",
      },
      {
        studentName: "Jane Smith",
        dateSubmitted: new Date("2023-09-10T08:00:00"),
        documents: [
          {
            url: "https://www.google.com",
          },
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.",
      },
    ],
  },
];

const AssignmentDetailsPage = () => {
  const { assignmentId } = useParams();
  const selectedAssignment = assignments.find(
    (assignment) => assignment.id === Number(assignmentId)
  );

  if (!selectedAssignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <Box p={4} minW={"100%"}>
      <Heading size="lg" mb={4}>
        Assignment Details
      </Heading>

      <Text>Title: {selectedAssignment.title}</Text>
      <Text>Description: {selectedAssignment.description}</Text>
      <Text>
        Total Students Submitted: {selectedAssignment.studentsSubmitted}
      </Text>
      <TableContainer>
        <Table variant="striped" bgColor={"white"} mt={4}>
          <Thead>
            <Tr>
              <Th>Student</Th>
              <Th>Date Submitted</Th>
              <Th>Documents</Th>
              <Th>Submission Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            {selectedAssignment.submissions.map((submission, index) => (
              <Tr key={index}>
                <Td>{submission.studentName}</Td>
                <Td>{submission.dateSubmitted.toLocaleString()}</Td>
                <Td>
                  {submission.documents.map((document, docIndex) => (
                    <div key={docIndex}>
                      <Link
                        href={document.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Document {docIndex + 1}
                      </Link>
                    </div>
                  ))}
                </Td>
                <Td>{submission.description}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AssignmentDetailsPage;
