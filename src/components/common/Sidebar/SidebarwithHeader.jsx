import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";

import SidebarContent from "./SidebarContent";
import MobileNav from "./MobileNav";

export default function SidebarwithHeader({
  children,
  linkItems,
  routeItems,
  headerRoutes,
  user,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      minH="100vh"
      bg={useColorModeValue("gray.200", "gray.900")}
      width={"full"}
    >
      <SidebarContent
        onClose={onClose}
        display={{ base: "none", md: "block" }}
        linkItems={linkItems}
        routeItems={routeItems}
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
          <SidebarContent
            onClose={onClose}
            linkItems={linkItems}
            routeItems={routeItems}
            user={user}
          />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <Box>
        <MobileNav onOpen={onOpen} link={headerRoutes} />
      </Box>
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}
