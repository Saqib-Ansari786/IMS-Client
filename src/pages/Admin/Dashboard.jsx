import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  HStack,
  Heading,
  IconButton,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import SidebarWithHeader from "../../components/common/Sidebar";
import { AttachmentIcon, StarIcon, ViewIcon } from "@chakra-ui/icons";

export default function Dashboard() {
  return (
    <Stack minW={"100vw"}>
      <SidebarWithHeader>
        <Heading>Dashboard</Heading>
        <Flex justify={"space-between"} gap={10} m={5}>
          <SimpleGrid
            spacing={{ base: 5, md: 10 }}
            columns={{ base: 1, md: 2 }}
            width={"75%"}
          >
            <Card
              align={"flex-start"}
              size={"lg"}
              borderLeft={"8px"}
              borderColor={"blue"}
            >
              <CardHeader>
                <Heading as={"h2"} size={"md"}>
                  Card
                </Heading>
              </CardHeader>
              <CardBody>
                <Text textAlign={"left"} fontSize={"md"}>
                  lorem asda aksd ajsdnasd asjdahsda sdjasdhasd asjdahsdjasd
                  asdjashdas dajsdhasd asdjashdjasd asdjasdhasd asjdashdjas
                  djasdas djasdhasd asjdasjd
                </Text>
              </CardBody>
              <CardFooter>
                <HStack>
                  <IconButton icon={<ViewIcon />} />

                  <IconButton icon={<StarIcon />} />

                  <IconButton icon={<AttachmentIcon />} />
                </HStack>
              </CardFooter>
            </Card>
          </SimpleGrid>
          <Box
            bg="white"
            height="350px"
            boxShadow={"xl"}
            rounded={"2xl"}
            width={"25%"}
          ></Box>
        </Flex>
      </SidebarWithHeader>
    </Stack>
  );
}
