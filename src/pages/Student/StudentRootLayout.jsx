import { Outlet } from "react-router";
import SidebarwithHeader from "../../components/common/Sidebar/SidebarwithHeader";
import {
  InfoIcon,
  SearchIcon,
  SettingsIcon,
  StarIcon,
  ViewIcon,
  ChatIcon,
} from "@chakra-ui/icons";
import Breadcrumbs from "../../components/common/Breadcrumb/Breadcrumb";
import { Navigate } from "react-router-dom";

const LinkItems = [
  { name: "Home", icon: InfoIcon, route: "/student" },
  { name: "Attendance", icon: ViewIcon, route: "/student/attendance" },
  { name: "Assignments", icon: StarIcon, route: "/student/assignments" },
  { name: "Marks Summary", icon: ChatIcon, route: "/student/marks" },
  { name: "Course Resources", icon: SettingsIcon, route: "/student/resources" },
  { name: "View Library", icon: SearchIcon, route: "/student/viewlibrary" },
];

export default function StudentRootLayout({ isStudentAuthenticated }) {
  const student = localStorage.getItem("student");
  console.log("student key in student page", student);
  if (!isStudentAuthenticated) {
    return <Navigate to="/" />;
  } else {
    return (
      <div>
        <SidebarwithHeader linkItems={LinkItems} user={"student"}>
          <Breadcrumbs />
          <Outlet />
        </SidebarwithHeader>
      </div>
    );
  }
}
