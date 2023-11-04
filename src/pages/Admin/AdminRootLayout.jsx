import { Outlet } from "react-router";
import SidebarwithHeader from "../../components/common/Sidebar/SidebarwithHeader";
import { InfoIcon, SearchIcon, SettingsIcon, StarIcon } from "@chakra-ui/icons";
import Breadcrumbs from "../../components/common/Breadcrumb/Breadcrumb";
import { Navigate } from "react-router-dom";
const LinkItems = [
  { name: "Home", icon: InfoIcon, route: "/admin" },
  { name: "Students", icon: SearchIcon, route: "/admin/studentview" },
  { name: "Teachers", icon: StarIcon, route: "/admin/teacherview" },
  { name: "Library", icon: SettingsIcon, route: "/admin/library" },
  { name: "Courses", icon: SettingsIcon, route: "/admin/courses" },
  { name: "Result", icon: SettingsIcon, route: "/admin/result" },
  { name: "Time Table", icon: SettingsIcon, route: "/admin/timetable" },
];

export default function AdminRootLayout({ isAdminAuthenticated }) {
  if (!isAdminAuthenticated) {
    return <Navigate to="/" />;
  } else {
    return (
      <div>
        <SidebarwithHeader linkItems={LinkItems}>
          <Breadcrumbs />
          <Outlet />
        </SidebarwithHeader>
      </div>
    );
  }
}
