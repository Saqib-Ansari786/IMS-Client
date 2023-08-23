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
  { name: "Home", icon: InfoIcon, route: "/admin" },
  { name: "Explore", icon: SearchIcon, route: "/admin" },
  { name: "Favourites", icon: StarIcon, route: "/admin" },
  { name: "Settings", icon: SettingsIcon, route: "/admin" },
];

const routeItems = [
  { name: "Library Management", icon: InfoIcon, route: "/admin/library" },
  { name: "Student Management", icon: ArrowUpIcon, route: "/admin/student" },
  { name: "Teacher Management", icon: SearchIcon, route: "/admin/teacher" },
];

export default function AdminRootLayout() {
  return (
    <div>
      <SidebarwithHeader linkItems={LinkItems} routeItems={routeItems}>
        <Outlet />
      </SidebarwithHeader>
    </div>
  );
}
