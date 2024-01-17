import { useState } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
  Input,
  Button,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { DownloadIcon, AttachmentIcon, CheckIcon } from "@chakra-ui/icons";
import {
  createCloudinaryFormdata,
  uploadToCloudinary,
} from "../../../utils/cloudinarySetup";
import apiMiddleware from "../../common/Server/apiMiddleware";
import { useQueryClient } from "react-query";

export default function StudentAssignmentTable({ header, data, studentId }) {
  const [assignmentState, setAssignmentState] = useState({});
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const queryClient = useQueryClient();

  const handleFileUpload = (event, assignmentId) => {
    const file = event.target.files[0];
    if (file) {
      setAssignmentState((prev) => ({
        ...prev,
        [assignmentId]: {
          ...prev[assignmentId],
          file,
          uploadedFile: file.name,
        },
      }));
    }
  };

  console.log("assignmentState:", assignmentState);

  const handleSubmission = async (assignmentId) => {
    // Make the API call
    const uploadedFile = assignmentState[assignmentId]?.file;

    if (uploadedFile) {
      console.log("uploadedFile:", uploadedFile);
      // Assuming you have the assignment data for the current row, let's call it 'currentAssignment'
      const currentAssignment = data?.find(
        (assignment) => assignment._id === assignmentId
      );

      console.log("currentAssignment:", currentAssignment);

      const cloudinaryFormData = createCloudinaryFormdata(
        uploadedFile,
        "ims-client-student",
        "ims_student_images"
      );

      setLoading(true);
      try {
        const cloudinaryResponse = await uploadToCloudinary(cloudinaryFormData);
        console.log("Cloudinary Response:", cloudinaryResponse);

        const payload = {
          studentId,
          assignmentId: currentAssignment._id,
          doc: cloudinaryResponse?.secure_url,
        };

        const options = {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        };

        const response = await apiMiddleware(
          "assignments/add-submission",
          options
        );
        console.log("Response:", response);
        queryClient.invalidateQueries("studentAssignments");
        toast({
          title: "Assignment Submitted Successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } catch (error) {
        console.log(error);
        toast({
          title: "Error",
          description: "Something went wrong",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
      setLoading(false);
    }
  };

  return (
    <TableContainer>
      <Table variant="simple" backgroundColor="white" mt={5} borderRadius={8}>
        <Thead>
          <Tr>
            {header?.map((header, index) => (
              <Th key={index} textAlign="center">
                {header}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((row) => (
            <Tr key={row._id}>
              <Td key={row._id} textAlign="center">
                <Box>{row.title}</Box>
              </Td>
              <Td key={row._id} textAlign="center">
                <Box>{row.startDate}</Box>
              </Td>
              <Td key={row._id} textAlign="center">
                <Box>{row.endDate}</Box>
              </Td>
              <Td key={row._id} textAlign="center">
                <Box>
                  <a href={row.downloadLink} download>
                    <IconButton
                      aria-label="Download"
                      icon={<DownloadIcon />}
                      size="sm"
                    />
                  </a>
                </Box>
              </Td>
              <Td key={row._id} textAlign="center">
                <Box
                  color={
                    assignmentState[row._id]?.uploadedFile ? "green" : "#FE1212"
                  }
                  onMouseEnter={() =>
                    setAssignmentState((prev) => ({
                      ...prev,
                      [row._id]: { ...prev[row._id], isUploadHovered: true },
                    }))
                  }
                  onMouseLeave={() =>
                    setAssignmentState((prev) => ({
                      ...prev,
                      [row._id]: { ...prev[row._id], isUploadHovered: false },
                    }))
                  }
                >
                  {row?.submissions[0]?.studentId === studentId ? (
                    <label htmlFor={`upload-input-${row._id}`} cursor="pointer">
                      File already uploaded
                    </label>
                  ) : assignmentState[row._id]?.uploadedFile ? (
                    <div>
                      <CheckIcon />
                      {assignmentState[row._id].uploadedFile}
                    </div>
                  ) : (
                    <>
                      <label htmlFor={`upload-input-${row._id}`}>
                        <AttachmentIcon cursor="pointer" />
                        Upload
                      </label>
                      <Input
                        id={`upload-input-${row._id}`}
                        type="file"
                        display="none"
                        onChange={(event) => handleFileUpload(event, row._id)}
                      />
                    </>
                  )}
                </Box>
              </Td>
              <Td key={row._id} textAlign="center">
                <Box>
                  {row?.submissions[0]?.studentId === studentId ? (
                    <Box color="#17AD37">Submitted</Box>
                  ) : (
                    <Button
                      colorScheme="green"
                      size="sm"
                      onClick={() => handleSubmission(row._id)}
                    >
                      {loading ? <Spinner size="sm" /> : "Submit"}
                    </Button>
                  )}
                </Box>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
