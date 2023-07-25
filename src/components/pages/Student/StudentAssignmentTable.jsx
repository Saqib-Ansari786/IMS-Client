import { useState } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, TableContainer, IconButton, Input, Button } from "@chakra-ui/react";
import { DownloadIcon, AttachmentIcon, CheckIcon } from "@chakra-ui/icons";

export default function StudentAssignmentTable({header, data}) {
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
              {row.map((cell, cellIndex) => (
                <Td key={cellIndex} textAlign="center">
                  {cellIndex === 1 ? (
                    <Box color="#17AD37">{cell}</Box>
                  ) : cellIndex === 2 ? (
                    <Box color="#FE1212">{cell}</Box>
                  ) : cellIndex === 3 ? (
                    <Box>
                      <a href={`file_url/${cell}`} download>
                        <IconButton backgroundColor="white" color="#180E8A" icon={<DownloadIcon />} />
                        {cell}
                      </a>
                    </Box>
                  ) : cellIndex === 4 ? (
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
                  ) : cellIndex === 5 ? (
                    <Box>
                      {isSubmitted ? (
                        <Box color="#17AD37">Submitted</Box>
                      ) : (
                        <Button colorScheme="green" size="sm" onClick={handleSubmission}>
                          Submit
                        </Button>
                      )}
                    </Box>
                  ) : (
                    cell
                  )}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
