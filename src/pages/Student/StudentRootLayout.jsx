import { Outlet } from "react-router";
import SidebarwithHeader from "../../components/common/Sidebar/SidebarwithHeader";
import {
  ArrowUpIcon,
  InfoIcon,
  SearchIcon,
  SettingsIcon,
  StarIcon,
} from "@chakra-ui/icons";

const LinkItems = [
  { name: "Home", icon: InfoIcon },
  { name: "Attendance", icon: SearchIcon },
  { name: "Assignments", icon: StarIcon },
  { name: "Marks Summary", icon: SettingsIcon },
  { name: "Course Resources", icon: SettingsIcon },
  { name: "View Library", icon: SettingsIcon },
];

const routeItems = [
  { name: "Profile", icon: InfoIcon },
  { name: "Messages", icon: ArrowUpIcon },
  { name: "Support", icon: SearchIcon },
];

export default function StudentRootLayout() {
  return (
    <div>
      <SidebarwithHeader linkItems={LinkItems} routeItems={routeItems}>
        <Outlet />
      </SidebarwithHeader>
    </div>
  );
}
