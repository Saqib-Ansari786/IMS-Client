import { Box, Image, Text } from '@chakra-ui/react';
import logoImage from "../../../assets/logo.png";
import signature1 from "../../../assets/signature1.png";
import signature2 from "../../../assets/signature2.png";
import awardIcon from "../../../assets/award_icon.png";

function StudentCertificate({ studentName }) {
  return (
    <Box
      maxW="900px"
      top={5}
      m="auto"
      p={4}
      position="relative"
      borderRadius="lg"
      boxShadow="0 4px 8px rgba(0,0,0,0.3)"
      textAlign="center"
      border="2px solid "
      bg={"white"}
    >
      <Box>
        <Image justifyContent="center" src={logoImage} alt="Logo" width="100px" />
      </Box>
      <Text fontSize="53px" fontWeight="bold" color={"#A40225"} mb={4}>
        Certificate of Achievement
      </Text>
      <Text as="h1" fontSize="33px"  color={"#1D238F"} mb={2}>
        This Certificate is Awarded to
      </Text>
      <Text fontSize="40px" fontWeight={"bold"} mb={3}>
        {studentName}
      </Text>
      <Text fontSize="18px" mb={4}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Box display="flex" justifyContent="space-between" alignItems="center" pl={"10%"} pr={"10%"}>
        <Box textAlign="center">
          <Image src={signature1} alt="Signature 1" width="120px" />
          <Text mt={2} fontWeight="bold">
            Director
          </Text>
          <Text fontSize="14px">Police Training Institute</Text>
        </Box>
        <Box>
          <Image src={awardIcon} alt="Award Icon" width="60px" />
        </Box>
        <Box textAlign="center">
          <Image src={signature2} alt="Signature 2" width="120px" />
          <Text mt={2} fontWeight="bold">
            Head Trainer
          </Text>
          <Text fontSize="14px">Police Training Institute</Text>
        </Box>
      </Box>
      <Box borderTop="2px solid #1D238F" mt={4} pt={2}>
        <Text fontSize="12px">This certificate is a recognition of achievement presented by the Police Training Institute.</Text>
      </Box>
    </Box>
  );
}

export default StudentCertificate;
