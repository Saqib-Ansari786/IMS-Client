import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const SuccessModal = ({ successMessage, isModalOpen, closeModal }) => {
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent bgColor={"white"} p={4} borderRadius="lg" textAlign="center">
        <ModalHeader display="flex" flexDirection="column" alignItems="center">
          <Box bg="green.500" color="white" borderRadius="full" p={2} mb={2}>
            <CheckIcon boxSize={8} />
          </Box>
          Success
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{successMessage}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SuccessModal;
