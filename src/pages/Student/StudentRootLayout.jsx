import { Outlet } from "react-router";
import SidebarwithHeader from "../../components/common/Sidebar/SidebarwithHeader";
import { InfoIcon, SearchIcon, SettingsIcon, StarIcon } from "@chakra-ui/icons";
import Breadcrumbs from "../../components/common/Breadcrumb/Breadcrumb";
import { Navigate } from "react-router-dom";

const LinkItems = [
  { name: "Home", icon: InfoIcon, route: "/student" },
  { name: "Attendance", icon: SearchIcon, route: "/student/attendance" },
  { name: "Assignments", icon: StarIcon, route: "/student/assignments" },
  { name: "Marks Summary", icon: SettingsIcon, route: "/student/marks" },
  { name: "Course Resources", icon: SettingsIcon, route: "/student/resources" },
  { name: "View Library", icon: SettingsIcon, route: "/student/viewlibrary" },
];

export default function StudentRootLayout({ isStudentAuthenticated }) {
  if (!isStudentAuthenticated) {
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
