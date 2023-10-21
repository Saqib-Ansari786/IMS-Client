import { Flex, SimpleGrid, Stack } from "@chakra-ui/react";
import CustomCard from "../../components/pages/Dashboard/CustomCard";
import AnnouncementCard from "../../components/pages/Dashboard/AnnouncementCard";
import DashboardWidget from "../../components/pages/Admin/DashboardWidget";

const dashboardData = [
  {
    title: "Total Students",
    value: "50055",
    iconSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s",
    altText: "Students Icon",
  },
  {
    title: "Total Teachers",
    value: "123",
    iconSrc: "assets/img/icons/teachers-icon.svg",
    altText: "Teachers Icon",
  },
  {
    title: "Courses",
    value: "45",
    iconSrc: "assets/img/icons/courses-icon.svg",
    altText: "Courses Icon",
  },
  {
    title: "Total Books",
    value: "230",
    iconSrc: "assets/img/icons/books-icon.svg",
    altText: "Books Icon",
  },
];

const cardcontent = [1, 2, 3, 4, 5];

export default function Dashboard() {
  return (
    <Stack minW="100%">
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4} m={5}>
        {dashboardData.map((item, index) => (
          <DashboardWidget
            key={index}
            title={item.title}
            value={item.value}
            iconSrc={item.iconSrc}
            altText={item.altText}
          />
        ))}
      </SimpleGrid>
      <Flex direction={{ base: "column", md: "row" }} gap={3} m={5}>
        {/* Left Column (70%) */}
        <Flex direction="column" flex="0.7" minW="0">
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 10 }}>
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
