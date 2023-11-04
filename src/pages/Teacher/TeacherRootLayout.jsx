import { Outlet } from "react-router";
import SidebarwithHeader from "../../components/common/Sidebar/SidebarwithHeader";
import { InfoIcon, SearchIcon, SettingsIcon, StarIcon } from "@chakra-ui/icons";
import Breadcrumbs from "../../components/common/Breadcrumb/Breadcrumb";
import { Navigate } from "react-router-dom";

const LinkItems = [
  { name: "Home", icon: InfoIcon, route: "/teacher" },
  { name: "Attendance", icon: SearchIcon, route: "/teacher/manage-attendance" },
  { name: "Assignments", icon: StarIcon, route: "/teacher/assignments" },
  { name: "Marks Summary", icon: SettingsIcon, route: "/teacher/classes" },
  {
    name: "Course Resources",
    icon: SettingsIcon,
    route: "/teacher/manage-courses",
  },
];

export default function TeacherRootLayout({ isTeacherAuthenticated }) {
  if (!isTeacherAuthenticated) {
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
