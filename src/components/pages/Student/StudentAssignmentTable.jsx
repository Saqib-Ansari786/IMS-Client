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
} from "@chakra-ui/react";
import { DownloadIcon, AttachmentIcon, CheckIcon } from "@chakra-ui/icons";

export default function StudentAssignmentTable({ header, data }) {
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isUploadHovered, setIsUploadHovered] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFileName(file.name);
    }
  };

  const handleSubmission = () => {
    setIsSubmitted(true);
  };

  return (
    <TableContainer>
      <Table variant="simple" backgroundColor="white" mt={5} borderRadius={8}>
        <Thead>
          <Tr>
            {header.map((header, index) => (
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
                <Box color="#17AD37">{row.startDate}</Box>
              </Td>
              <Td key={rowIndex} textAlign="center">
                <Box color="#FE1212">{row.endDate}</Box>
              </Td>
              <Td key={rowIndex} textAlign="center">
                <Box>
                  <a href={`file_url/${row.downloadLink}`} download>
                    <IconButton
                      backgroundColor="white"
                      color="downloadIcon.base"
                      icon={<DownloadIcon />}
                    />
                    {row.downloadLink}
                  </a>
                </Box>
              </Td>
              <Td key={rowIndex} textAlign="center">
                <Box
                  color={isUploadHovered ? "green" : "#FE1212"}
                  onMouseEnter={() => setIsUploadHovered(true)}
                  onMouseLeave={() => setIsUploadHovered(false)}
                >
                  {uploadedFileName ? (
                    <div>
                      <CheckIcon />
                      {uploadedFileName}
                    </div>
                  ) : (
                    <label htmlFor="upload-input">
                      <AttachmentIcon cursor="pointer" />
                      Upload
                    </label>
                  )}
                  <Input
                    id="upload-input"
                    type="file"
                    display="none"
                    onChange={handleFileUpload}
                  />
                </Box>
              </Td>
              <Td key={rowIndex} textAlign="center">
                <Box>
                  {isSubmitted ? (
                    <Box color="#17AD37">Submitted</Box>
                  ) : (
                    <Button
                      colorScheme="green"
                      size="sm"
                      onClick={handleSubmission}
                    >
                      Submit
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
