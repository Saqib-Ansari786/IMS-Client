import React from 'react';
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from '@chakra-ui/react';

function AlertDeleteDialog({ isOpen, onClose, onConfirm, type }) {
  return (
    <AlertDialog isOpen={isOpen} leastDestructiveRef={undefined} onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent backgroundColor="white">
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Are you sure you want to delete this {type}?
          </AlertDialogHeader>
          <AlertDialogBody>
            Deleting a {type} cannot be undone.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={onClose}>No</Button>
            <Button
              colorScheme="red"
              ml={3}
              onClick={onConfirm}
            >
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default AlertDeleteDialog;
