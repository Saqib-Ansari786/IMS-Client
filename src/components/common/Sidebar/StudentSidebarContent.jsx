import {
    Box,
    CloseButton,
    Flex,
    useColorModeValue,
    Text,
  } from "@chakra-ui/react";
  import {
    InfoIcon,
    ArrowUpIcon,
    SearchIcon,
    StarIcon,
    SettingsIcon,
  } from "@chakra-ui/icons";
  import NavItem from "./NavItem";
  
  const LinkItems = [
    { name: "Home", icon: InfoIcon },
    { name: "Attendance", icon: SearchIcon },
    { name: "Assignments", icon: StarIcon },
    { name: "Marks Summary", icon: SettingsIcon },
    { name: "Course Resources", icon: SettingsIcon },
    { name: "View Library", icon: SettingsIcon },
  ];
  
  const routeItems = [
    { name: "Profile", icon: InfoIcon },
    { name: "Messages", icon: ArrowUpIcon },
    { name: "Support", icon: SearchIcon },
  ];
  
  export default function StudentSidebarContent({ onClose, ...rest }) {
    return (
      <Box
        transition="3s ease"
        borderRight="1px"
        bgGradient={"linear(to-b, primary.base, primary.base,secondary.hover)"}
        borderRightColor={useColorModeValue("gray.200", "gray.700")}
        w={{ base: "full", md: 60 }}
        pos="fixed"
        h="full"
        color={"white"}
        {...rest}
      >
        
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Dashboard
          </Text>
          <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
        </Flex>
  
        {LinkItems.map((link) => (
          <NavItem p={3} key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
  
        <Box mt={10} ml={1}>
          {routeItems.map((link) => (
            <NavItem p={3} key={link.name} icon={link.icon}>
              {link.name}
            </NavItem>
          ))}
        </Box>
  
        <NavItem icon={InfoIcon} pos="absolute" bottom="4">
          Logout
        </NavItem>
      </Box>
    );
  }
  