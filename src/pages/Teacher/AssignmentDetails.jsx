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
  CircularProgress,
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

  const totalStudents = selectedAssignment.studentsSubmitted;
  const progressValue = (totalStudents / 50) * 100;

  return (
    <Box p={4} minW={"100%"}>
      <Heading size="lg" mb={4} fontWeight="bold">
        {selectedAssignment.title}
      </Heading>

      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Description:
      </Text>
      <Text>{selectedAssignment.description}</Text>

      <Text fontSize="lg" fontWeight="bold" mt={4}>
        Total Students Submitted:
      </Text>
      <CircularProgress
        value={progressValue}
        color="green.400"
        thickness="8px"
        size="60px"
        mt={2}
        mb={4}
      />
      <Text fontWeight="bold" fontSize="lg">
        {totalStudents}/{50}
      </Text>

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
    </Box>
  );
};

export default AssignmentDetailsPage;
