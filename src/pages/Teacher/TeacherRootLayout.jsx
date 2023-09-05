import { Outlet } from "react-router";
import SidebarwithHeader from "../../components/common/Sidebar/SidebarwithHeader";
import { InfoIcon, SearchIcon, SettingsIcon, StarIcon } from "@chakra-ui/icons";

const LinkItems = [
  { name: "Home", icon: InfoIcon, route: "/teacher" },
  { name: "Attendance", icon: SearchIcon, route: "/teacher/manage-attendance" },
  { name: "Assignments", icon: StarIcon, route: "/teacher/assignments" },
  { name: "Marks Summary", icon: SettingsIcon, route: "/teacher/marks" },
  { name: "Course Resources", icon: SettingsIcon, route: "/teacher/resources" },
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
