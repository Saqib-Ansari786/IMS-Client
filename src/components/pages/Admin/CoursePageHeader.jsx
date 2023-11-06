// import React, { useState } from "react";
// import { Box, Flex, Heading, Button } from "@chakra-ui/react";
// import { AddIcon, RepeatIcon } from "@chakra-ui/icons";
// import AddCourse from "./AddCourse";

// export default function CoursePageHeader({ children }) {
//   const [showAddCourse, setShowAddCourse] = useState(false);
//   const [gridView, setGridView] = useState(false);

//   const toggleAddCourse = () => {
//     setShowAddCourse(!showAddCourse);
//   };

//   const toggleGridView = () => {
//     setGridView(!gridView);
//   };

//   return (
//     <Box py={4} bg="white" rounded="lg" boxShadow="md">
//       <Flex justify="space-between" align="center" mx={4}>
//         <Heading as="h3" size="lg" color={"#120E87"}>
//           Course Page
//         </Heading>
//         <Flex align="center">
//         <Button
//             leftIcon={<RepeatIcon />}
//             colorScheme="blue"
//             variant={gridView ? "solid" : "outline"}
//             _hover={{ bg: gridView ? "blue.300" : "blue.200", color: "white" }}
//             onClick={toggleGridView}
           
//           >
//             Grid View
//           </Button>
//           <Button
//             leftIcon={<AddIcon />}
//             colorScheme="blue"
//             _hover={{ bg: "blue.300", color: "white" }}
//             onClick={toggleAddCourse}
//             ml={2}
//           >
//             Add Course
//           </Button>
//         </Flex>
//       </Flex>
//       {showAddCourse ? <AddCourse /> : children}
//     </Box>
//   );
// }
import React, { useState } from "react";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import { AddIcon, RepeatIcon } from "@chakra-ui/icons";
import AddCourse from "./AddCourse";

export default function CoursePageHeader({ children }) {
    const [showAddCourse, setShowAddCourse] = useState(false); // Start by showing Add Course
    const [gridViewActive, setGridViewActive] = useState(true);
  
    const toggleAddCourse = () => {
      setShowAddCourse(true); // Show Add Course
      setGridViewActive(false); // Set grid view as inactive
    };
  
    const toggleGridView = () => {
      setShowAddCourse(false); // Hide the Add Course component
      setGridViewActive(true); // Set grid view as active
    };
  
  return (
    <Box py={4} bg="white" rounded="lg" boxShadow="md">
      <Flex justify="space-between" align="center" mx={4}>
        <Heading as="h3" size="lg" color={"#120E87"}>
          Course Page
        </Heading>
        <Flex align="center">
          <Button
            leftIcon={<RepeatIcon />}
            colorScheme="blue"
            variant={gridViewActive ? "solid" : "outline"}
            _hover={{ bg: gridViewActive ? "blue.300" : "blue.200", color: "white" }}
            onClick={toggleGridView}
          >
            Grid View
          </Button>
          <Button
            leftIcon={<AddIcon />}
            colorScheme="blue"
            variant={showAddCourse ? "solid" : "outline"}
            _hover={{ bg: showAddCourse ? "blue.300" : "blue.200", color: "white" }}
            onClick={toggleAddCourse}
            ml={2}
          >
            Add Course
          </Button>
        </Flex>
      </Flex>
      {showAddCourse ? <AddCourse /> : children}
    </Box>
  );
}
