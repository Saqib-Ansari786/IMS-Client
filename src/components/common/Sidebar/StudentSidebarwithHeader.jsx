/* eslint-disable */
import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
  } from "@chakra-ui/react";
  import {
    InfoIcon,
    ArrowUpIcon,
    SearchIcon,
    StarIcon,
    SettingsIcon,
    HamburgerIcon,
    BellIcon,
    ChevronDownIcon,
  } from "@chakra-ui/icons";
import StudentSidebarContent from "./StudentSidebarContent";
import StudentNav from "./StudentNav";
  
  export default function StudentSidebarwithHeader({ children }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <Box
        minH="100vh"
        bg={useColorModeValue("gray.200", "gray.900")}
        width={"full"}
      >
        
        <StudentSidebarContent
          onClose={onClose}
          display={{ base: "none", md: "block" }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
            
          <DrawerContent>
            <StudentSidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <Box>
          <StudentNav onOpen={onOpen} />
        </Box>
        <Box ml={{ base: 0, md: 60 }} p="4">
          {children}
        </Box>
      </Box>
    );
  }
  