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
];

export default function TeacherRootLayout() {
  return (
    <div>
      <SidebarwithHeader linkItems={LinkItems}>
        <Outlet />
      </SidebarwithHeader>
    </div>
  );
}
