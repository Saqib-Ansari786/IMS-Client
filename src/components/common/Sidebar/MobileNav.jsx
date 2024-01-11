import {
  IconButton,
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Text,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuButton,
  Menu,
} from "@chakra-ui/react";
import { HamburgerIcon, BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

export default function MobileNav({ onOpen, user, ...rest }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px={{ base: 4, md: 6 }}
      py={2}
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<HamburgerIcon />}
      />

      <Flex alignItems="center" margin="auto">
        <Box
          as="img"
          src={logo}
          w={{ base: "35", md: "37" }}
          h={{ base: "16", md: "16" }}
          alt="Police Logo"
          mr={2}
        />
        <Text
          color="#180E8A"
          fontSize={{ base: "lg", md: "3xl" }}
          fontWeight="medium"
          textAlign="center"
        >
          Police Training Institute
        </Text>
      </Flex>

      <HStack spacing={{ base: "2", md: "4" }}>
        <IconButton
          size={{ base: "md", md: "lg" }}
          variant="ghost"
          aria-label="open menu"
          icon={<BellIcon />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="xs" color="gray.600">
                    {user?.type === "admin"
                      ? "Admin"
                      : user?.type === "iadmin"
                      ? "Inventory Admin"
                      : user?.firstname + " " + user?.lastname}
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <ChevronDownIcon />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>
                <Link to={""}>Profile</Link>
              </MenuItem>
              <MenuItem>
                <Link to={""}>Settings</Link>
              </MenuItem>
              <MenuItem>
                <Link to={""}>Messages</Link>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                <Link to={""}>Sign out</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Box>
  );
}
