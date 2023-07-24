import { Flex, SimpleGrid, Stack } from "@chakra-ui/react";
import CustomCard from "../../components/pages/Dashboard/CustomCard";
import AnnouncementCard from "../../components/pages/Dashboard/AnnouncementCard";

const cardcontent = [1, 2, 3, 4, 5];

export default function Dashboard() {
  return (
    <Stack minW="100%">
      <Flex direction={{ base: "column", md: "row" }} gap={3} m={5}>
        {/* Left Column (70%) */}
        <Flex direction="column" flex="0.7" minW="0">
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 5, md: 10 }}
          >
            {cardcontent.map((item, index) => (
              <CustomCard
                key={index}
                title={"Card"}
                text={
                  "lorem asda aksd ajsdnasd asjdahsda sdjasdhasd asjdahsdjasd asdjasdhasd asjdashdjas djasdas djasdhasd asjdasjd"
                }
              />
            ))}
          </SimpleGrid>
        </Flex>

        {/* Right Column (30%) */}
        <Flex direction="column" flex="0.3" minW="0">
          <AnnouncementCard />
        </Flex>
      </Flex>
    </Stack>
  );
}
