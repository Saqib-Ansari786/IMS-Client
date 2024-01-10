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
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/redux-slices/user_slice";
import { selectStudent } from "../../store/redux-slices/student_slice";

const LinkItems = [
  { name: "Home", icon: InfoIcon, route: "/student" },
  { name: "Attendance", icon: ViewIcon, route: "/student/attendance" },
  { name: "Assignments", icon: StarIcon, route: "/student/assignments" },
  { name: "Marks Summary", icon: ChatIcon, route: "/student/marks" },
  { name: "Course Resources", icon: SettingsIcon, route: "/student/resources" },
  { name: "View Library", icon: SearchIcon, route: "/student/viewlibrary" },
];

export default function StudentRootLayout() {
  const user = useSelector(selectUser);
  const student = useSelector(selectStudent);
  const location = useLocation();
  if (user) {
    if (user.type !== "student") {
      return <Navigate to="/" />;
    } else {
      return (
        <div>
          <SidebarwithHeader linkItems={LinkItems} user={student}>
            <Breadcrumbs />
            <Outlet />
          </SidebarwithHeader>
        </div>
      );
    }
  }
  if (location.pathname === "/student") {
    return <Navigate to="/" />;
  }
}
