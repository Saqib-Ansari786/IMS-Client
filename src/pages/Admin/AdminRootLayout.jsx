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
  { name: "Explore", icon: SearchIcon },
  { name: "Favourites", icon: StarIcon },
  { name: "Settings", icon: SettingsIcon },
];

const routeItems = [
  { name: "Library Management", icon: InfoIcon },
  { name: "Student Management", icon: ArrowUpIcon },
  { name: "Teacher Management", icon: SearchIcon },
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
