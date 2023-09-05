import { Flex, Icon, Link } from "@chakra-ui/react";
export default function NavItem({ icon, children, ...rest }) {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "secondary.hover",
          color: "white",
        }}
        {...rest}
        textAlign={"left"}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize={{ base: "20", md: "16" }}
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
}
