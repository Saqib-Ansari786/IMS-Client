import { useState } from "react";
import {
  Box,
  Button,
  Image,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  Stack,
  Heading,
  Link,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Select,
  Flex,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { FaCalendar, FaUser, FaUsers } from "react-icons/fa";
import { useParams } from "react-router-dom";

const courseData = [
  {
    id: 1,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s",
    title: "PHP Development Course",
    description: "Look, my liege! The Knights Who Say Ni demand a sacrifice!",
    duration: "6",
    category: "Web Development",
    author: "John Doe",
  },
  {
    id: 2,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s",
    title: "PHP Development Course",
    description: "Look, my liege! The Knights Who Say Ni demand a sacrifice!",
    duration: "6",
    category: "Web Development",
    author: "John Doe",
  },
  {
    id: 3,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s",
    title: "PHP Development Course",
    description: "Look, my liege! The Knights Who Say Ni demand a sacrifice!",
    duration: "6",
    category: "Web Development",
    author: "John Doe",
  },
  {
    id: 4,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s",
    title: "PHP Development Course",
    description: "Look, my liege! The Knights Who Say Ni demand a sacrifice!",
    duration: "6",
    category: "Web Development",
    author: "John Doe",
  },
  {
    id: 5,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s",
    title: "PHP Development Course",
    description: "Look, my liege! The Knights Who Say Ni demand a sacrifice!",
    duration: "6",
    category: "Web Development",
    author: "John Doe",
  },
  {
    id: 6,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s",
    title: "PHP Development Course",
    description: "Look, my liege! The Knights Who Say Ni demand a sacrifice!",
    duration: "6",
  },
  {
    id: 7,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s",
    title: "PHP Development Course",
    description: "Look, my liege! The Knights Who Say Ni demand a sacrifice!",
    duration: "6",
  },
];

export default function CourseDetail() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState("");
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const { courseId } = useParams(); // Get the course ID from the URL
  console.log(courseId);

  const classes = ["Class A", "Class B", "Class C"]; // Replace with your actual class data

  const selectedCourse = courseData.find((course) => course.id == courseId); // Replace with your actual course data

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAddToClass = () => {
    setIsOpen(true);
  };

  const handleClassSelect = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleConfirmOpen = () => {
    setIsOpen(false);
    setIsConfirmOpen(true);
  };

  const handleConfirmClose = () => {
    setIsConfirmOpen(false);
  };

  const handleConfirmAdd = () => {
    // Perform your action to add the course to the selected class here
    setIsConfirmOpen(false);
  };

  const handleEdit = () => {
    // Navigate to the edit page for this course
    <Link to={`/editCourse/${courseId}`} />; // Replace with the actual route
  };

  const handleDelete = () => {
    // Perform your action to delete the course here
  };

  return (
    <Box backgroundColor="white" p={0} m={0}>
      <Image
        src={selectedCourse.imageUrl}
        alt={`Image for ${selectedCourse.title}`}
        objectFit="cover"
        height="300px" // Set the height of the image as needed
        width="100%"
      />
      <Box p="4" maxW="800px" mx="auto">
        <Heading as="h4" size="lg">
          {selectedCourse.title}
        </Heading>
        <Text color="gray.600" mt="2" fontSize={"lg"}>
          {selectedCourse.description}
        </Text>
        <Table size="sm" mt="3">
          <Tbody>
            <Tr>
              <Td>
                <Stack spacing={1} direction="row" alignItems="center">
                  <FaCalendar color={"blue"} size={20} />
                  <Text fontWeight="semibold" fontSize={"xl"}>
                    Duration
                  </Text>
                </Stack>
              </Td>
              <Td textAlign="right">
                <CircularProgress
                  value={(selectedCourse.duration * 100) / 12}
                  size={"100px"}
                  // progress should be calculated as (duration / 6) * 100
                >
                  <CircularProgressLabel>
                    {selectedCourse.duration}M
                  </CircularProgressLabel>
                </CircularProgress>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Stack spacing={1} direction="row" alignItems="center">
                  <FaUser color={"red"} size={20} />
                  <Text fontWeight="semibold" fontSize={"xl"}>
                    Author
                  </Text>
                </Stack>
              </Td>
              <Td textAlign="right">
                <Text fontSize={"xl"}>{selectedCourse.author}</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Stack spacing={1} direction="row" alignItems="center">
                  <FaUsers color={"green"} size={20} />
                  <Text fontWeight="semibold" fontSize={"xl"}>
                    Category
                  </Text>
                </Stack>
              </Td>
              <Td textAlign="right">
                <Text fontSize={"xl"}>{selectedCourse.category}</Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <Flex justifyContent="space-between" alignItems="center" mt="10">
          <Button colorScheme="blue" mt="3" onClick={handleAddToClass}>
            Add to Class
          </Button>
          <Button colorScheme="teal" mt="2" onClick={handleEdit}>
            Edit
          </Button>
          <Button colorScheme="red" mt="2" onClick={handleDelete}>
            Delete
          </Button>
        </Flex>
      </Box>

      {/* Add to Class Dialog */}
      <AlertDialog isOpen={isOpen} onClose={handleClose}>
        <AlertDialogOverlay>
          <AlertDialogContent bgColor={"white"}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Add to Class
            </AlertDialogHeader>

            <AlertDialogBody>
              <Select
                placeholder="Select Class"
                onChange={handleClassSelect}
                value={selectedClass}
              >
                {classes.map((className, index) => (
                  <option key={index} value={className}>
                    {className}
                  </option>
                ))}
              </Select>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button variant="outline" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                colorScheme="blue"
                onClick={handleConfirmOpen}
                ml={3}
                isDisabled={!selectedClass}
              >
                Add
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      {/* Confirm Add Dialog */}
      <AlertDialog isOpen={isConfirmOpen} onClose={handleConfirmClose}>
        <AlertDialogOverlay>
          <AlertDialogContent bgColor={"white"}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Confirm Add
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to add this course to {selectedClass}?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button variant="outline" onClick={handleConfirmClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" onClick={handleConfirmAdd} ml={3}>
                Add
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
}
