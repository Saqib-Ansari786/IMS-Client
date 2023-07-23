import {
  IconButton,
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  BellIcon,
  ChevronDownIcon,
  AddIcon,
  DownloadIcon,
} from "@chakra-ui/icons";
import logo from "../../../assets/logo.png";
export default function StudentNav({ onOpen, ...rest }) {
  return (

    <Box
      display={"flex"}
      ml={{ base: 0, md: "auto" }}
      px={{ base: 6, md: 6 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-evenly" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<HamburgerIcon />}
      />  
      <Flex alignItems="center" >
         <Box as="img" src={logo} w="30" h="16" alt="Police Logo" mr="2" />
         <Text fontSize="xl" fontWeight="bold" textAlign="center">
           Police Training Institute
         </Text>
      </Flex>
        

      <HStack spacing={{ base: "0", md: "1" }}>  
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<BellIcon />}
        />
        
        <Flex alignItems={"center"}>
         
              <HStack>
                <Avatar
                  size={"md"}
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
                  <Text fontSize="sm">Hey, Murtaza</Text>
                </VStack>
              </HStack>
            
        </Flex>
      </HStack>
    </Box>
  );
}