import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  VStack,
  HStack,
  Spacer,
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
  { name: "Explore", icon: SearchIcon },
  { name: "Favourites", icon: StarIcon },
  { name: "Settings", icon: SettingsIcon },
];

const routeItems = [
  { name: "Library Management", icon: InfoIcon },
  { name: "Student Management", icon: ArrowUpIcon },
  { name: "Teacher Management", icon: SearchIcon },
];

export default function SidebarContent({ onClose, ...rest }) {
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
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}

      <Box my={5}>
        {routeItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
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
