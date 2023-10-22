import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import ProfileColumn from "../../components/pages/Profile/ProfileColumn";
import AnnouncementCard from "../../components/pages/Dashboard/AnnouncementCard";

const Profile = () => {
  const announcements = [
    { id: 1, title: "Announcement 1", content: "Content 1" },
    { id: 2, title: "Announcement 2", content: "Content 2" },
    { id: 3, title: "Announcement 3", content: "Content 3" },
  ];
  return (
    <Box width="100%" m="0 auto">
      <Grid templateColumns={{ base: "1fr", md: "2.5fr 1fr" }} gap="4" mt={5}>
        <GridItem>
          <ProfileColumn
            name={"Saqib Ali"}
            phone={"+923218875200"}
            email={"saqib.ns111@gmail.com"}
            destination={"Software Engineer"}
            description={
              "lorem ajajs aja jasdasj asjdasd asdjasdas djasdhasd asjdasd asdjasdas djasdasd asdjashdas djasdh ajsdas dajsdasd jasdhasd asjdashda sdnasdhjasd asjdhasd asdasjghd jasndas djasdasd ahsdgasd ashdashdas dhasdyashd ashdgfasyda sbdavsdyasd"
            }
          />
          <Box
            bg={"white"}
            minH={{ base: "fit-content", md: "300px" }}
            boxShadow="xl"
            rounded="2xl"
            p={5}
            mt={5}
          >
            <Heading size="md" textAlign="left">
              Platform Setting
            </Heading>
            <Box textAlign={"left"} color={"gray.500"} fontWeight={"semibold"}>
              <Box lineHeight={"10"} mt={5}>
                <Box
                  as="button"
                  bg="blue.500"
                  color="white"
                  rounded="md"
                  px={4}
                  py={2}
                  _hover={{ bg: "blue.600" }}
                >
                  Change Password
                </Box>
              </Box>

              <Box lineHeight={"10"} mt={5}>
                <Box
                  as="button"
                  bg="blue.500"
                  color="white"
                  rounded="md"
                  px={4}
                  py={2}
                  _hover={{ bg: "blue.600" }}
                >
                  Change Email
                </Box>
              </Box>
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <AnnouncementCard data={announcements} />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Profile;
