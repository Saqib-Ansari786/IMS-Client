import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

export default function SidebarContent({
  onClose,
  linkItems,
  routeItems,
  ...rest
}) {
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

      {linkItems &&
        linkItems.map((link) => (
          <NavItem p={3} key={link.name} icon={link.icon}>
            <Link to={link.route}>{link.name}</Link>
          </NavItem>
        ))}

      <Box my={10} ml={1}>
        {routeItems &&
          routeItems.map((link) => (
            <NavItem p={3} key={link.name} icon={link.icon}>
              <Link to={link.route}>{link.name}</Link>
            </NavItem>
          ))}
      </Box>
      <NavItem p={3} icon={InfoIcon}>
        <Link to={"/"}>Logout</Link>
      </NavItem>
    </Box>
  );
}
