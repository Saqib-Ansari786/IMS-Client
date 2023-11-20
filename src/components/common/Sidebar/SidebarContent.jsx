import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  Button,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import NavItem from "./NavItem";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/redux-slices/user_slice";

export default function SidebarContent({
  onClose,
  linkItems,
  routeItems,
  user,
  ...rest
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      <Flex flexDirection="column" h="full">
        <Box>
          <Flex
            h="20"
            alignItems="center"
            mx="8"
            justifyContent="space-between"
          >
            <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
              Dashboard
            </Text>
            <CloseButton
              display={{ base: "flex", md: "none" }}
              onClick={onClose}
            />
          </Flex>

          {linkItems &&
            linkItems.map((link) => (
              <Link to={link.route} key={link.name} onClick={onClose}>
                <NavItem p={3} icon={link.icon}>
                  <Text fontSize={{ base: "xl", md: "md" }}> {link.name}</Text>
                </NavItem>
              </Link>
            ))}

          <Box my={10} ml={1}>
            {routeItems &&
              routeItems.map((link) => (
                <Link to={link.route} key={link.name}>
                  <NavItem p={3} icon={link.icon}>
                    {link.name}
                  </NavItem>
                </Link>
              ))}
          </Box>
        </Box>

        <Box
          bottom={{ base: "14", md: "6" }}
          ml={1}
          position={"fixed"}
          onClick={() => {
            dispatch(setUser(null));
            navigate("/");
          }}
        >
          <NavItem p={3} icon={InfoIcon}>
            <Text fontSize={{ base: "xl", md: "md" }}> Logout</Text>
          </NavItem>
        </Box>
      </Flex>
    </Box>
  );
}
