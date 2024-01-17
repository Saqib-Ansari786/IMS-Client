import { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import apiMiddleware from "../../common/Server/apiMiddleware";
import { useQueryClient } from "react-query";

export default function EditBookModal({ isOpen, onClose, book }) {
  const [editedBook, setEditedBook] = useState({ ...book });
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const queryClient = useQueryClient();
  useEffect(() => {
    setEditedBook({ ...book });
  }, [book]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onEdit(editedBook);
    onClose();
  };

  const onEdit = async (book) => {
    setLoading(true);
    try {
      const response = await apiMiddleware(
        `admin/libraries/library-items/edit/${book._id}`,
        {
          method: "POST",
          body: JSON.stringify(book),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("response from server", response);

      if (response.success) {
        queryClient.invalidateQueries("books");
        toast({
          title: "Book Edited",
          description: "Book has been edited successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent backgroundColor={"white"}>
        <ModalHeader>Edit Book</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              name="title"
              value={editedBook.title}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Author Name</FormLabel>
            <Input
              type="text"
              name="authorName"
              value={editedBook.authorName}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Publisher Name</FormLabel>
            <Input
              type="text"
              name="publisherName"
              value={editedBook.publisherName}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>ISBN</FormLabel>
            <Input
              type="text"
              name="isbn"
              value={editedBook.isbn}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Category</FormLabel>
            <Select
              placeholder="Select Category"
              name="category"
              value={editedBook.category}
              onChange={handleInputChange}
            >
              <option>Computer Science</option>
              <option>English Literature</option>
              <option>Urdu Literature</option>
              <option>Mathematics</option>
              <option>Physiology</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Availability</FormLabel>
            <Select
              name="availability"
              value={editedBook.availability ? "true" : "false"}
              onChange={handleInputChange}
            >
              <option value="true">In Stock</option>
              <option value="false">Out of Stock</option>
            </Select>
          </FormControl>
          <Button
            mt={4}
            colorScheme="blue"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? <Spinner /> : "Save"}
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
