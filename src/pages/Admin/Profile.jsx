import { Box, Grid, GridItem } from "@chakra-ui/react";
import ProfileColumn from "../../components/pages/Profile/ProfileColumn";
import AnnouncementsColumn from "../../components/pages/Profile/AnnouncementColumn";
import AnnouncementCard from "../../components/pages/Dashboard/AnnouncementCard";

const Profile = () => {
  return (
    <Box width="100%" m="0 auto">
      <Grid templateColumns={{ base: "1fr", md: "2.5fr 1fr" }} gap="4">
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
        </GridItem>
        <GridItem>
          <AnnouncementCard />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Profile;
