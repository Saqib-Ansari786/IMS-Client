import { Outlet } from "react-router";
import SidebarwithHeader from "../../components/common/Sidebar/SidebarwithHeader";
import Breadcrumbs from "../../components/common/Breadcrumb/Breadcrumb";
import { Navigate } from "react-router-dom";
import {
  InfoIcon,
  SearchIcon,
  StarIcon,
  TimeIcon,
  CalendarIcon,
  CheckIcon,
  EditIcon,
} from "@chakra-ui/icons";

const LinkItems = [
  { name: "Home", icon: InfoIcon, route: "/admin" },
  { name: "Students", icon: SearchIcon, route: "/admin/studentview" },
  { name: "Teachers", icon: StarIcon, route: "/admin/teacherview" },
  { name: "Library", icon: EditIcon, route: "/admin/library" },
  { name: "Courses", icon: CalendarIcon, route: "/admin/courses" },
  { name: "Result", icon: CheckIcon, route: "/admin/result" },
  { name: "Time Table", icon: TimeIcon, route: "/admin/timetable" },
  { name: "Calendar", icon: CalendarIcon, route: "/admin/calendar" },
];

export default function AdminRootLayout({ isAdminAuthenticated }) {
  if (!isAdminAuthenticated) {
    return <Navigate to="/" />;
  } else {
    return (
      <div>
        <SidebarwithHeader
          linkItems={LinkItems}
          logoutClose={() => {
            localStorage.removeItem("admin");
            window.location.reload();
          }}
        >
          <Breadcrumbs />
          <Outlet />
        </SidebarwithHeader>
      </div>
    );
  }
}
